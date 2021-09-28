# <span class="citation" data-cites="dojo/widgets/text-area"><span class="citation" data-cites="dojo/widgets/text-area">@dojo/widgets/text-area</span></span>

Dojo’s `TextArea` widget provides a wrapped native `textarea` input with an optional label.

## Features

-   Provides an API for valid `<textarea>` attributes
-   Correctly handles a11y attributes

### Accessibility Features

`TextArea` ensures that the proper attributes (ARIA or otherwise) are set along with classes when properties such as `disabled`, `readOnly`, `valid`, etc. are used. It also provides an API for custom ARIA implementations of `aria-describedby` and `aria-controls`. It also sets `aria-invalid` when validation fails.
