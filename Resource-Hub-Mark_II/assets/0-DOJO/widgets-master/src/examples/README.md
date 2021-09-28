<span class="citation" data-cites="dojo/widgets"><span class="citation" data-cites="dojo/widgets"><span class="citation" data-cites="dojo/widgets"><span class="citation" data-cites="dojo/widgets">@dojo/widgets</span></span></span></span>
=============================================================================================================================================================================================================================================

A suite of pre-built Dojo widgets, ready to use in your web application. These widgets are built using Dojo’s widget authoring system <span class="citation" data-cites="dojo/framework/core">\[(<span class="citation" data-cites="dojo/framework/core"><span class="citation" data-cites="dojo/framework/core"><span class="citation" data-cites="dojo/framework/core">@dojo/framework/core</span></span></span>)\]</span>(https://github.com/dojo/framework/blob/master/src/core/README.md).

-   [Usage](#usage)
-   [Features](#features)

Usage
-----

To use `@dojo/widgets` in your project, you will need to install the package:

    npm install @dojo/widgets

This package contains *all* of the widgets in this repo.

All of the widgets are on the same release schedule, that is to say, that we release all widgets at the same time. Minor releases may include new widgets and/or features, whereas patch releases may contain fixes to more than 1 widget.

To use a widget in your application, you will need to import each widget individually:

    import Button from '@dojo/widgets/button';

Each widget module has a default export of the widget itself, as well as named exports for things such as properties specific to the widget:

    import Button, { ButtonProperties } from '@dojo/widgets/button';

Because each widget is a separate module, when you create a release build of your application, you will only include the widgets that you have explicitly imported. This allows our [`dojo cli`](https://github.com/dojo/cli) build tooling to make sure that the production build of your application only includes the widgets you use and is as small as possible.

Features
--------

-   All widgets are supported in all evergreen browsers (Chrome, Edge, Firefox, IE11+, and Safari) as well as popular mobile browsers (Mobile Safari, Chrome on Android).

-   All widgets are designed to be accessible. If custom ARIA semantics are required, widgets have an `aria` property that may be passed an object with custom `aria-*` attributes.

-   All widgets are fully themeable. Example themes are available in the <span class="citation" data-cites="dojo/themes">\[<span class="citation" data-cites="dojo/themes"><span class="citation" data-cites="dojo/themes"><span class="citation" data-cites="dojo/themes">@dojo/themes</span></span></span>\]</span>(https://github.com/dojo/themes) repository.

-   All widgets support internationalization (`i18n`)
