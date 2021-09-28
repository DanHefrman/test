# <span class="citation" data-cites="dojo/widgets/global-event"><span class="citation" data-cites="dojo/widgets/global-event"><span class="citation" data-cites="dojo/widgets/global-event"><span class="citation" data-cites="dojo/widgets/global-event">@dojo/widgets/global-event</span></span></span></span>

Dojo’s `GlobalEvent` enables events to be registered on `document` and `window` reactively.

## Features

-   Can be used as a wrapping widget and will return children on render or used within a widgets returned DNode structure and returns `null` from `render`.
-   Reactively adds and removes global events listeners based on the `window` and `document` properties.
