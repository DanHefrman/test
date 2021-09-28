<span class="citation" data-cites="dojo/widgets/constrained-input"><span class="citation" data-cites="dojo/widgets/constrained-input"><span class="citation" data-cites="dojo/widgets/constrained-input">@dojo/widgets/constrained-input</span></span></span>
=============================================================================================================================================================================================================================================================

Dojo’s `ConstrainedInput` component creates a text input that follows certain pre-defined validation constraints. This can be used to quickly create an input that meets certain minimum standards like a username or password input.

Features
--------

-   Handles validation state / messaging internally so the consumer does not have to
-   Easily validates against a set of predefined rules

Validation Rules
----------------

A number of validation options exist for validating common username / password scenarios.

<table style="width:99%;"><colgroup><col style="width: 21%" /><col style="width: 78%" /></colgroup><thead><tr class="header"><th>Property</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>length.min</code></td><td>The input value must be at least <code>min</code> characters long.</td></tr><tr class="even"><td><code>length.max</code></td><td>The input value cannot be longer than <code>max</code> characters.</td></tr><tr class="odd"><td><code>contains.uppercase</code></td><td>The input value must contain at least <code>uppercase</code> number of uppercase characters.</td></tr><tr class="even"><td><code>contains.numbers</code></td><td>The input value must contain at least <code>numbers</code> number of numeric characters.</td></tr><tr class="odd"><td><code>contains.specialCharacters</code></td><td>The input value must contain at least <code>specialCharacters</code> number of special characters.</td></tr><tr class="even"><td><code>contains.atLeast</code></td><td>The input value must match <code>atLeast</code> number of the <code>uppercase</code>, <code>numbers</code>, and <code>specialCharacters</code> rules.</td></tr></tbody></table>
