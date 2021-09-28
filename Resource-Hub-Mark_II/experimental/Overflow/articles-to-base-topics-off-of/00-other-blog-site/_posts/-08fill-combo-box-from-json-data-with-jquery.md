Javascript / jQuery

        jQuery(function($){
            var doc = document;
            $("#CustomerApplicantSelectionRegion").change(function(val,a){
                alert(a);
                $.ajax({
                    "url" : "fillcombo.php?id="+$(this).val(),
                    "type" : "GET",
                    "dataType" : "json",
                    "success" : function(data){
                        var opt = doc.createElement("option");
                        $(opt).attr({
                            value:""
                        });
                        $(opt).html("All Area");
                        area = $("#CustomerApplicantSelectionArea");
                        area.empty();
                        area.append(opt);
                        $.each(data, function(id,value){
                            var opt = doc.createElement("option");
                            $(opt).val(id).html(value);
                            area.append(opt);
                        });
                    },
                    "error" : function(xhr,status,error){
                        alert(error);
                    }
                });
            })
        });

PHP

    echo json_encode(array(0=>"a",1=>"b",2=>"c"));
    ?>

$
