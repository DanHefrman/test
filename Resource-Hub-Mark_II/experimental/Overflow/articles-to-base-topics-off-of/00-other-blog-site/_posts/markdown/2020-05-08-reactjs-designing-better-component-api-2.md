&lt;!–

Part 1 of this post is available at [designing better component api - UI](/2020/03/reactjs-designing-better-component-api.html)

Part 2 : For Functional / Large UI components
=============================================

In part 1 we discussed the API for primitive UI components. In this we will discuss about Functional (not stateless) components or some large UI components composed using primitive UI components.

<a href="#derive-value-from-existing-data" id="derive-value-from-existing-data" class="anchor"><em></em></a>Derive value from existing data
===========================================================================================================================================

Refrain yourself from passing unwanted props, where its values can be derived from the other props which we are already passing to the component. Consider the example below. We are passing an array of players and total count of them as props

    // bad
    const PlayerList = ({ players, totalPlayerCount }) => {
       if (totalPlayerCount === 0) {
           // render empty message
       }
       // render player list
    }

In this we can derive the `totalPlayerCount` from the array of players itself using the `.length` property. Thus we can reduce the number of props we are passing into.

    // better
    const PlayerList = ({ players }) => {
       if (players.length === 0) {
           // render empty message
       }
       // render player list
    }

<a href="#minimum-data" id="minimum-data" class="anchor"><em></em></a>Pass minimal data required for the component to render
============================================================================================================================

I have seen many beginners passing the whole object to the component and use only one or two properties inside the component. This will make the component difficult to optimize and test.

    // bad
    const Player = ({ player }) => {
     return (
       <div>
         <div>{player.name}</div>
         <div>{player.score}</div>
       </div>
     )
    }

In the above example player can have 20 or 30 properties which are not used in the `Player` component. So instead of passing the player object, if pass the only properties needed for this component like `name` & `score` will make this component simpler and easy to optimize.

    const Player = ({ name, score }) => {
     return (
       <div>
         <div>{name}</div>
         <div>{score}</div>
       </div>
     )
    }

<a href="#use-bind" id="use-bind" class="anchor"><em></em></a> function.bind instead of calling from inside.
============================================================================================================

Sometimes passing minimum data into components won’t work because we might need to pass the whole data into an action. Considering the code below, we can’t avoid passing the `player` object because it is required as the parameter for `onSelect` method.

    // bad
    const Player = ({ player, onSelect }) => {
     return (
       <div>
         <div>{player.name}</div>
         <div>{player.score}</div>
         <div><button onClick={() => onSelect(player)}>Select</button></div>
       </div>
     )
    }

In such a case, bind the `onSelect` method with the `player` object and pass it to the component.

    // better
    const Player = ({ name, score, onSelect }) => {
     return (
       <div>
         <div>{name}</div>
         <div>{score}</div>
         <div><button onSelect={onSelect}>Select</button></div>
       </div>
     )
    }
     
    // usage
     
    <Player
     name={player.name}
     score={player.score}
     onSelect={handleSelect.bind(this, player)}
    />

Now the `<Player />` component is no more depended on whole `player` object and we can pass only the `name` & `score` to it.

<a href="#remove-unwanted-arrow-functions" id="remove-unwanted-arrow-functions" class="anchor"><em></em></a> remove unwanted arrow functions wrapping
=====================================================================================================================================================

This is a common pattern I have seen in many codebase that instead of just passing the function to event listeners, they will be wrapped inside unnecessary arrow functions.

    // bad
    const Player = ({ player, onSelect }) => {
     return (
       <div>
         <div>{player.name}</div>
         <div>{player.score}</div>
         <div><button onClick={(evt) => onSelect(evt)}>Select</button></div>
       </div>
     )
    }

This mistake is mostly done by newbies who got confused between these two usages, `onClick={onSelect}` and `onClick={onSelect()}`. The later will cause function invocation on each re-render and to fix this they wrap in an arrow function.

    // better
    const Player = ({ name, score, onSelect }) => {
     return (
       <div>
         <div>{name}</div>
         <div>{score}</div>
         <div><button onclick={onSelect}>Select</button></div>
       </div>
     )
    }

Adding an arrow function does not necessarily add any performance overhead, but it can cause logical errors in case we decide to add a new param or remove a param later. In such cases we have to make changes in all the instances of this unnecessary wrapping along the way from top most to the child component.

In case of `onClick={onSelect}` the changes required are only in 2 places, in function definition and at where it invokes.
