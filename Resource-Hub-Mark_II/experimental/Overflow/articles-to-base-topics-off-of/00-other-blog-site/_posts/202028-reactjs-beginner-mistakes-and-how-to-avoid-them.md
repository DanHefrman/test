id=“not-splitting-into-components”&gt;<a href="#not-splitting" id="not-splitting" class="anchor"><em></em></a> 1. Not splitting into components

Most people start writing the component and forget to split. So team will endup with very huge render method. Some try to abstract it into instance methods.

My rule of thump here is, If you are adding instance method for partial render, mostly it can be splitted into smaller components.

<a href="#name-in-smallcase" id="name-in-smallcase" class="anchor"><em></em></a> 2. component name starts with small letter.
============================================================================================================================

React has a rule that component name should be capitalized. Since we can write component as functions

    const abc = () => { return <div>Hello</div> }

since react can’t render this as component people will call `abc()` from render if the component name started with lowercase, react will consider it as webcomponents.

<a href="#input-using-ref" id="input-using-ref" class="anchor"><em></em></a> 3. Get input value using ref
=========================================================================================================

Instead of updating the state people tend to use the ref and get the `.value` from the inputs. just like how we do in jQuery world.

<a href="#monolith" id="monolith" class="anchor"><em></em></a> 4. Monolith component does eveything
===================================================================================================

Instead of passing the component/children people design the component such a way they can pass different props for all the customization. The component will accept a large obejct with all the details and try to render everything.

This makes difficult to maintain the component + adding more surface area for breakage. Things will be worse if you don’t have test cases.

I have seen this is preferred even by experienced devs thinking the making the change is easier.

<a href="#too-much-details-in-prop" id="too-much-details-in-prop" class="anchor"><em></em></a> 5. Passing too much details in props
===================================================================================================================================

Passing unnecessary and irrelevant info into the component will make it difficult to optimize. If the component need only 3 simple props pass only those 3 instead of object with 3 attrs.

if the props are simple string/number, it can optimized easily with PureComponent/ React.memo.

<a href="#duplicate-props" id="duplicate-props" class="anchor"><em></em></a> 6. Passing duplicate info into props
=================================================================================================================

When people start passing complex objects as props, there is high chance that duplicate info is getting passed as different props.

This will confuse the dev and cause bugs

<a href="#redux-data-according-to-ui" id="redux-data-according-to-ui" class="anchor"><em></em></a> 7. Redux : storing data according to UI.
===========================================================================================================================================

Usually when I mentor, I ask the devs to consider the redux store as database. Store the raw data not the processed according to the UI.

if we have a first\_name and last\_name, but UI need full name, Don’t store only full\_name in redux

This will make difficult to reuse the redux store. If you want to combine either do it on component or add a selector.

<a href="#redux-duplicate" id="redux-duplicate" class="anchor"><em></em></a> 8. Redux : Store the duplicate & derived values
============================================================================================================================

similar to previous one, If you can derive the value for the UI from the exising data in redux. always derive. Not need to store those again in redux.

If you have uses array and need to show the users count, use `users.length` in render or in selector. No need to store in another key in redux.

<a href="#redux-data-ui" id="redux-data-ui" class="anchor"><em></em></a> 9. Designing the redux store according to the UI
=========================================================================================================================

As already told consider redux store as a DB. each reducer should be each entity (like tables). Don’t combine 2 entities into same reducer just because you have to show both in same UI

<a href="#impure-reducers" id="impure-reducers" class="anchor"><em></em></a> 10. impure reducers.
=================================================================================================

people tend update the existing object ( mutate) and return or they miss `...state` while they return.

Some tend to access window/localStorage in reducer to save some duplicate but end up with duplicate the whole store.

<a href="#too-much-dry" id="too-much-dry" class="anchor"><em></em></a> 11. Too much DRY
=======================================================================================

People for maximum code reuse and end up with complex and difficult to maintain component.

<a href="#copy-state-to-local" id="copy-state-to-local" class="anchor"><em></em></a> 12. Copying redux state to local state.
============================================================================================================================

To avoid extra dispatch and state changes, people tend to copy the state to local and update there which eventually lead to complex component. Will be adding more code to lifecycle methods to handle syncing the redux and local state

<a href="#premature-optimization" id="premature-optimization" class="anchor"><em></em></a> 13. premature optimization
=====================================================================================================================

using too much PureComponent or custom `shouldComponentUpdate` for the components which accept complex props like object or array.

Most issues can be solved/optmized with properly splitting the components.

Trying to optimize the component only with `shouldComponentUpdate` without splitting & reducing the props will lead to complex component and lots and lots of issues with not rerendering and endup forceUpdate.

<a href="#dependency-on-globals" id="dependency-on-globals" class="anchor"><em></em></a> 14. Too much dependency on globals
===========================================================================================================================

Component directly depend on globals like window and localStorage will be difficult to test and maintain.

<a href="#defaultprops" id="defaultprops" class="anchor"><em></em></a> 15. Not using the defaultProps
=====================================================================================================

People tend to miss the usage of defaultProps and tend to add more conditional rendering which make the component complex to difficult to maintain.

<a href="#react-wrong-way" id="react-wrong-way" class="anchor"><em></em></a> 16. Using the react wrong way.
===========================================================================================================

React has a Philosophy of doing things functional and declarative way. But beginners coming from imperative apis like DOM apis tend to use the react the only way they know and not ready to learn new paradigm
