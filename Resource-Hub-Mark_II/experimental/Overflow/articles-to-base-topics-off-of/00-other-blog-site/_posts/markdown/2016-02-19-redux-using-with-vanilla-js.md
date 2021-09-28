&lt;!DOCTYPE html&gt;

When I [introduced redux](/2016/02/redux.html) we discussed how we can use it with ReactJS. But redux can be used along with vanilla js as well. In this post I like to discuss how we can use redux with vanilla js using the same counter example from [getting started with redux](/2016/02/redux.html).

Here we reuse the same reducer, actions and store from the earlier post except the react and react bindings part.

    import {createStore} from 'redux';

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

Now we need a module for counter and add the functionalities to dispatch the actions. Our HTML for counter will looks like

    <div id="counter">
      <button id="inc">+</button>
      <span id="text"></span>
      <button id="dec">-</button>
    </div>

we are writing the counter modules using the constructor pattern using ES6 class syntax. In the `constructor` we will subscribe to store for changes and add event bindings.

    class Counter {
      constructor(options) {
        this.$el = options.el;
        this.store = options.store;
        store.subscribe(this.update.bind(this));
        this.$el.querySelector('#inc')
          .addEventListener('click', this.inc.bind(this));
        this.$el.querySelector('#dec')
          .addEventListener('click', this.dec.bind(this));
      }

      inc() {
        this.store.dispatch(increment())
      }

      dec() {
        this.store.dispatch(decrement())
      }


      update() { 
        console.log(store.getState());
        this.$el
          .querySelector('#text')
          .innerHTML = store.getState();
      }

      render() {
        this.update();
      }
    }

Now we need to initiate the counter on `DOMContentLoaded` event.

    const d = document;

    d.addEventListener("DOMContentLoaded", () => {
      const counter = new Counter({
        el: d.getElementById('counter'),
        store
      });
      counter.render();
    });

We call the `render` method soon after initiating is to render the initial state. Now when you click the increment button we dispatch the action for increment and on decrement button we dispatch action to decrement. Since in `constructor` we already subscribed to store for changes, when a change in store happens `this.update` method will be called and update the content in span.

Here is the working example of [redux with vanilla js](https://jsbin.com/juqoce/1/edit?js,output) in jsbin.

<a href="http://jsbin.com/juqoce/embed?js,output" class="jsbin-embed">JS Bin on jsbin.com</a>
