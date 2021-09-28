<a href="#avoid-unnecessary-computation" id="avoid-unnecessary-computation" class="anchor"><em></em></a> Avoid unnecessary computation
======================================================================================================================================

The primitive UI components should not contain any kind of business logic. Including business logic makes it difficult to use them as generic components.

    // bad
    const Button = ({ children, name }) => {
     const disabled = name === "";
     return <button disabled={disabled}>{children}</button>;
    }

The above one has a condition to disable the button when the name is empty. But this won’t be the requirement always. `Button` component doesn’t need to know on what basis it should render `disabled`. The condition can be different for each requirement.

    // better
    const Button = ({ children, disabled, onClick }) => {
    return <button disabled={disabled} onClick={onClick}>{children}</button>;
    }

    <Button disabled={name === ""} />

We will cover the `Functional / Large UI components` in the next post.
