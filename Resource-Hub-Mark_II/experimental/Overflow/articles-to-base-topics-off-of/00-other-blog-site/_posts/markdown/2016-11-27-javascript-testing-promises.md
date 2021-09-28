&lt;!DOCTYPE html&gt;

While testing asyncronous code, especially `Promises`, I seen that many people are using `done()` method in wrong way. This post tries to guide you how to do it in proper way.

Conside we are going to test a piece of code which fetches data asynchronously.

    // api.js
    require('whatwg-fetch');

    module.exports = class ApiClient {
      static get(url) {
        return fetch(url)
          .then(res => {
            return res.json();
          })
          .catch(err => {
            throw err;
          });
      }
    }

    // index.js
    const ApiClient = require('./api');

    module.exports = function getUsers() {
      return ApiClient.get('http://jsonplaceholder.typicode.com/users')
    };

Now when we try to write a simple test for `getUsers` it will look like

    // test.js
    const getUsers = require('./index');
    const ApiClient = require('./api');
    const sinon = require('sinon');
    const expect = require('chai').expect;

    describe('getUsers', () => {
      context('on success', () => {
        it('returns user data', (done) => {
          const getSpy = sinon.stub(ApiClient, 'get').returns(Promise.resolve([
            {id: 1, name: 'Leanne Graham'},
            {id: 2, name: 'Ervin Howell'}
          ]));

          getUsers().
            then((res) => {
              expect(res).to.eql([
                {id: 1, name: 'Leanne Graham'},
                {id: 2, name: 'Ervin Howell'}
              ]); 
              done();
            })  
        }); 
      }); 
    });

The above test will work fine and show the test passing, But calling `done()` in the same `then` callback is a bad idea.

**Why?**

The above code works well until your expectation fails, consider the above code with wrong expectation

    // test.js
    const getUsers = require('./index');
    const ApiClient = require('./api');
    const sinon = require('sinon');
    const expect = require('chai').expect;

    describe('getUsers', () => {
      context('on success', () => {
        it('returns user data', (done) => {
          const getSpy = sinon.stub(ApiClient, 'get').returns(Promise.resolve([
            {id: 1, name: 'Leanne Graham'},
            {id: 2, name: 'Ervin Howell'}
          ]));

          getUsers().
            then((res) => {
              expect(res).to.eql([
                {id: 1, name: 'Leanne Graham'},
    -            {id: 2, name: 'Ervin Howell'}
    +            {id: 2, name: 'Ervin Howel'}
              ]); 
              done();
            })  
        }); 
      }); 
    });

This will throw some error like below.

![Error 1](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2016/11/Screenshot%20from%202016-11-27%2022-22-36_zpsxvu1kuqh.png)

The above failure is not very useful for programmers, Mocha is well equiped to show better error than this. If we want to utilize the mocha’s error we shouldn’t call `done()` from the same `then()` callback. See the below test

    // test.js
    const getUsers = require('./index');
    const ApiClient = require('./api');
    const sinon = require('sinon');
    const expect = require('chai').expect;

    describe('getUsers', () => {
      context('on success', () => {
        it('returns user data', (done) => {
          const getSpy = sinon.stub(ApiClient, 'get').returns(Promise.resolve([
            {id: 1, name: 'Leanne Graham'},
            {id: 2, name: 'Ervin Howell'}
          ]));

          getUsers().
            then((res) => {
              expect(res).to.eql([
                {id: 1, name: 'Leanne Graham'},
                {id: 2, name: 'Ervin Howel'}
              ]); 
            })
    +       .then(() => done(), done);
        }); 
      }); 
    });

Now see the difference in the mocha’s failure message with actual and expected diff.

Better Error

Isn’t this error message better for programmers to debug the failure.

### UPDATE : 2017-01-22

There is even better way, Thanks to <span class="citation" data-cites="blakeembrey">\[@blakeembrey\]</span>(https://twitter.com/blakeembrey).

> [<span class="citation" data-cites="revathskumar">@revathskumar</span>](https://twitter.com/revathskumar) FWIW, you shouldn't use `done` at all with mocha (<https://t.co/ijOcbpydV3>) - you should just return the promise directly
>
> — Blake Embrey (<span class="citation" data-cites="blakeembrey">@blakeembrey</span>) [November 28, 2016](https://twitter.com/blakeembrey/status/803386495180472320)

We don’t need to use `done` at all, instead we can just [return the promise](http://mochajs.org/#working-with-promises) from `it` block.

    // test.js
    const getUsers = require('./index');
    const ApiClient = require('./api');
    const sinon = require('sinon');
    const expect = require('chai').expect;

    describe('getUsers', () => {
      context('on success', () => {
        it('returns user data', () => {
          const getSpy = sinon.stub(ApiClient, 'get').returns(Promise.resolve([
            {id: 1, name: 'Leanne Graham'},
            {id: 2, name: 'Ervin Howell'}
          ]));

    +      return getUsers().
            then((res) => {
              expect(res).to.eql([
                {id: 1, name: 'Leanne Graham'},
                {id: 2, name: 'Ervin Howel'}
              ]);
            });
        });
      });
    });
