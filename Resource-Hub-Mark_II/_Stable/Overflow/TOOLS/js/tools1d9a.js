var undoStack = [];

function mkUndo (toolName) {
    var undoSelector = '#' + toolName + '-submit-undo';
    var textSelector = '#' + toolName + '-text';

    $(undoSelector).click(function (ev) {
        ev.preventDefault();

        var last = undoStack.pop();
        $(textSelector).val(last);

        if (undoStack.length == 0) {
            $(undoSelector).hide();
        }
    });
}

function mkTool (toolName, computeFn, opts) {
    opts = opts || {};

    var submitSelector = '#' + toolName + '-submit';
    var undoSelector = '#' + toolName + '-submit-undo';
    var textSelector = '#' + toolName + '-text';

    $(submitSelector).click(function () {
        var text = $(textSelector).val();
        if (!opts.allowEmptyText) {
            if (!text.length) return;
        }

        $('#action-error').hide();

        try {
            if (opts.asyncResultFn) {
                computeFn(text, opts.asyncResultFn);
            }
            else {
                var result = computeFn(text, opts.asyncResultFn);
                $(textSelector).val(result);
            }
        }
        catch (err) {
            if (opts.exceptionFn) opts.exceptionFn(err);
            return;
        }

        undoStack.push(text);

        $(undoSelector).show();
    });

    mkUndo(toolName);
}

function mkImageConvertTool (toolName, inputOpts, outputOpts, computeFn) {
    if ($('#tool-' + toolName).length == 0) return;

    var fileSelector = '#file-select';
    var submitSelector = '#submit';
    var selectedFile;

    // make file selector work
    $(fileSelector).on('change', function (ev) {
        $('#action-error').hide();
        var file = ev.target.files[0];
        if (file.type != inputOpts.inputMime) {
            $('#action-error').show();
            $('#action-error').text("Selected file is not a " + inputOpts.inputHumanFormat);
            return;
        }
        selectedFile = file;
        $(submitSelector).attr('disabled', false);
    });

    // make drag & drop work
    $('#drag-and-drop').on('dragover', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        $('#drag-and-drop').addClass('hover');
    });
    $('#drag-and-drop').on('dragenter', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        $('#drag-and-drop').addClass('hover');
    });
    $('#drag-and-drop').on('dragleave', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        $('#drag-and-drop').removeClass('hover');
    });
    $('#drag-and-drop').on('dragend', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        $('#drag-and-drop').removeClass('hover');
    });
    $('#drag-and-drop').on('drop', function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        $('#drag-and-drop').removeClass('hover');
        $('#action-error').hide();
        ev.dataTransfer = ev.originalEvent.dataTransfer;
        var file = ev.dataTransfer.files[0];
        if (file.type != inputOpts.inputMime) {
            $('#action-error').show();
            $('#action-error').text("Selected file is not a " + inputOpts.inputHumanFormat);
            return;
        }
        $('#drag-and-drop-selected').text("Selected " + file.name);
        selectedFile = file;
        $(submitSelector).attr('disabled', false);
    });

    // make convert button work
    //
    $(submitSelector).click(function () {
        var reader = new FileReader();
        reader.onload = function () {
            var img = new Image;
            img.onload = function () {
                var canvas = $('<canvas>')[0];
                canvas.width = img.width;
                canvas.height = img.height;
                var canvasCtx = canvas.getContext('2d');
                canvasCtx.drawImage(img, 0, 0);
                function blobHandler (blob) {
                    var lastDot = selectedFile.name.lastIndexOf('.');
                    if (lastDot != -1) {
                        var outputFileName = selectedFile.name.substring(0, lastDot) + '.' + outputOpts.outputExt;
                    }
                    else {
                        var outputFileName = selectedFile.name + '.' + optputOpts.outputExt;
                    }
                    saveAs(blob, outputFileName);
                }
                canvas.toBlob(blobHandler, outputOpts.outputMime);
            }
            img.src = reader.result;
        }
        reader.readAsDataURL(selectedFile);
    });
}

$(function () {
    // make copy to clipboard work
    //
    $('#copy-to-clipboard').click(function (ev) {
        ev.preventDefault();
        $('#tool-implementation textarea').select();
        document.execCommand('copy');
    });
});
