InsertSnippet for Xinha
=======================

Insert HTML fragments in your document.

Usage
-----

In order to use your own snippets you have to add at least one parameter to your xinha\_config:

    xinha_config.InsertSnippet.snippets = Xinha.getPluginDir('InsertSnippet') + "/snippets.php";

The path above indicates the use of the provided backend. This parses a file that contains the snippets and should have the following format:

    <!--Snippet ID-->
    Snippet content
    <!--/Snippet ID-->
    ...and so on

You can use the snippets.html in the plugin folder or tell the backend where to find the file like this

    with (xinha_config.InsertSnippet)
    {
        <?php

        // define backend configuration for the plugin
        $backend_data['snippets_file'] = '/file/containing/snippets.html';
        require_once '../contrib/php-xinha.php';
        xinha_pass_to_php_backend($backend_data);
        
        ?>
    }

Raimund Meyer (xinha@raimundmeyer.de)
