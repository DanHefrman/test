HTMLArea Spell Checker
======================

The HTMLArea Spell Checker subsystem consists of the following files:

-   spell-checker.js — the spell checker plugin interface for HTMLArea
-   spell-checker-ui.html — the HTML code for the user interface
-   spell-checker-ui.js — functionality of the user interface
-   spell-checker-logic.cgi — Perl CGI script that checks a text given through POST for spelling errors
-   spell-checker-style.css — style for mispelled words
-   lang/en.js — main language file (English).

Process overview
----------------

When an end-user clicks the "spell-check" button in the HTMLArea editor, a new window is opened with the URL of "spell-check-ui.html". This window initializes itself with the text found in the editor (uses `window.opener.SpellChecker.editor` global variable) and it submits the text to the server-side script "spell-check-logic.cgi". The target of the FORM is an inline frame which is used both to display the text and correcting.

Further, spell-check-logic.cgi calls Aspell for each portion of plain text found in the given HTML. It rebuilds an HTML file that contains clear marks of which words are incorrect, along with suggestions for each of them. This file is then loaded in the inline frame. Upon loading, a JavaScript function from "spell-check-ui.js" is called. This function will retrieve all mispelled words from the HTML of the iframe and will setup the user interface so that it allows correction.

The server-side script (spell-check-logic.cgi)
----------------------------------------------

**Unicode safety** — the program *is* Unicode safe. HTML entities are expanded into their corresponding Unicode characters. These characters will be matched as part of the word passed to Aspell. All texts passed to Aspell are in Unicode (when appropriate). <s>However, Aspell seems to not support Unicode yet ([thread concerning Aspell and Unicode](http://mail.gnu.org/archive/html/aspell-user/2000-11/msg00007.html)). This mean that words containing Unicode characters that are not in 0..255 are likely to be reported as "mispelled" by Aspell.</s>

**Update:** though I've never seen it mentioned anywhere, it looks that Aspell *does*, in fact, speak Unicode. Or else, maybe `Text::Aspell` does transparent conversion; anyway, this new version of our SpellChecker plugin is, as tests show so far, fully Unicode-safe... well, probably the *only* freeware Web-based spell-checker which happens to have Unicode support.

The Perl Unicode manual (man perluniintro) states:

> *Starting from Perl 5.6.0, Perl has had the capacity to handle Unicode natively. Perl 5.8.0, however, is the first recommended release for serious Unicode work. The maintenance release 5.6.1 fixed many of the problems of the initial Unicode implementation, but for example regular expressions still do not work with Unicode in 5.6.1.*

In other words, do *not* assume that this script is Unicode-safe on Perl interpreters older than 5.8.0.

The following Perl modules are required:

-   [Text::Aspell](http://search.cpan.org/search?query=Text%3A%3AAspell&mode=all)
-   [XML::DOM](http://search.cpan.org/search?query=XML%3A%3ADOM&mode=all)
-   [CGI](http://search.cpan.org/search?query=CGI&mode=all)

Of these, only Text::Aspell might need to be installed manually. The others are likely to be available by default in most Perl distributions.

------------------------------------------------------------------------

[Mihai Bazon](http://dynarch.com/mishoo/)

Last modified: Fri Jan 30 19:14:11 EET 2004
