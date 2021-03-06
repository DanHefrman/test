This is planned as part 2 of [What I learned after building first web app with react]() post because I believe one of the biggest mistake I did was not investing much time in redux and went for states in components. Component states are difficult to manage and refactor.

Even though I heard of flux architecture and uni-directional data flow long back I didn’t really understand the concept and why we need it. But recently I got my hands on the redux and now I know why we shouldn’t be using component level states in react application.

Redux help you to have a centralized store for data. So all the data related to you app will be holding in a object instead of holding in different components.

If you getting started with redux I highly recommend to watch the [Getting started with Redux](https://egghead.io/series/getting-started-with-redux) by [Dan Abramov](https://twitter.com/dan_abramov) creator of redux itself. This post is just my notes on my learning from this series.

Action
------

Actions are simple JavaScript object which used to send data to application store. All action object should have a `type` key to define the action along with data to be changed in store if any.

    {
      type: 'INCREMENT'
    }

Reducer
-------

Reducers are the pure function which will change state and return new state. The only way to change state is to emit an action.

    function counter(state=0, action) {
      switch(action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    }

Store
-----

Store is the place where application state is holding. We can use the `createStore` from redux to create a new store using the reducer. The object returned from `createStore` will have 3 methods

-   getState() : Get the current application state
-   dispatch() : To dispatch an action to change the state
-   subscribe() : To listen to the state change

    import {createStore} from ‘redux’;

    const store = createStore(counter);

    console.log(store.getState()) // logs 0

    store.dispatch({ type: ‘INCREMENT’ });

    console.log(store.getState()) // logs 1

Using it with React
-------------------

    import React, {Component} from 'react';
    import {createStore} from 'redux';

    // reducer 
    function counter(state=0, action) {
      switch(action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    }

    //create store
    const store = createStore(counter);

    // React Component
    class Counter extends React.Component {
      increment() {
        this.props.store.dispatch({
          type: 'INCREMENT'
        });
      }
      decrement() {
        this.props.store.dispatch({
          type: 'DECREMENT'
        });
      }
      render() {
        return (<div>
          {this.props.store.getState()}
          <div>
            <button onClick={this.increment.bind(this)}>+</button>
            <button onClick={this.decrement.bind(this)}>-</button>
          </div>
        </div>
                )
      }
    }
      
    const render = () => {
      ReactDOM.render(<Counter store={store} />, document.getElementById('mount'));
    };

    store.subscribe(render);
    render();

The above example can’t be used in real world applications since it’s not maintainable or testable. So we need better way to use redux with react. That’s where `react-redux` comes into picture.

Using `react-redux` bindings.
-----------------------------

The `react-redux` bindings provide you `Provider` a Higher order component and a curried function called `connect`.

We need to wrap our top component using `Provider` and pass store to it. `connect` method helps to subscribe to store changes pass the state to our component as props. This will return a new connect component after subscribing to Redux store.

    import React, {Component} from 'react';
    import { createStore } from 'redux';
    import {Provider, connect} from 'react-redux';

    // reducer 
    function counter(state=0, action) {
      console.log('counter', action)
      switch(action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    }

    //create store
    const store = createStore(counter);

    // React Component

    class Counter extends React.Component {
      increment() {
        this.props.dispatch({
          type: 'INCREMENT'
        });
      }
      decrement() {
        this.props.dispatch({
          type: 'DECREMENT'
        });
      }
      render() {
        return (<div>
          {this.props.state}
          <div>
            <button onClick={this.increment.bind(this)}>+</button>
            <button onClick={this.decrement.bind(this)}>-</button>
          </div>
        </div>
                )
      }
    }

    const mapStateToProps = function (state) {
      return {state};
    }

    const CounterApp = connect(mapStateToProps)(Counter);

    class App extends React.Component {
      render() {
        return (
          <Provider store={store}>
            <CounterApp />
          </Provider>
        )
      }
    } 

    ReactDOM.render(<App />, document.getElementById('mount'));

Extract actions for maintainability
-----------------------------------

In the above example dispatch actions from the component itself. This will reduce the re-usability and testability. So for better maintainability we can extract the actions separately.

    import React, {Component} from 'react';
    import {createStore} from 'redux';
    import {Provider, connect} from 'react-redux';

    // reducer 
    function counter(state=0, action) {
      console.log('counter', action)
      switch(action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    }


    //actions
    const increment = () => {
      return {
        type: 'INCREMENT'
      };
    };

    const decrement = () => {
      return {
        type: 'DECREMENT'
      };
    };

    //create store
    const store = createStore(counter);

    // React Component
    let Counter;
    class Counter extends React.Component {
      render() {
        return (
          <div>
            {this.props.state}
            <div>
              <button onClick={this.props.increment}>+</button>
              <button onClick={this.props.decrement}>-</button>
            </div>
          </div>
        )
      }
    }

    const mapStateToProps = (state) {
      return {state};
    };

    const mapDispatchToProps = (dispatch) {
      return {
        decrement() {
          dispatch(decrement());
        },
        increment() {
          dispatch(increment());
        }
      }
    };

    let Counter = connect(mapStateToProps)(Counter);

    class App extends React.Component {
      render() {
        return (
          <Provider store={store}>
            <Counter />
          </Provider>
        )
      }
    } 

    ReactDOM.render(<App />, document.getElementById('mount'));

Now after extracting the actions separately I can use the same action in the tests as well.
