&lt;!DOCTYPE html&gt;

Handling client side validation using the HTML5 validation api is getting easier due to the wide support on modern browsers. With HTML validation api you don’t have install any new package and learn its api.

Remember this might not be apt for your application and use case. Read the detailed incompatibility issues [here](https://www.quirksmode.org/blog/archives/2017/12/native_form_val.html).

This post doesn’t intent to cover all the use cases and corner cases, but to give intro to using HTML5 apis in a `Vue` app.

<a href="#basic" id="basic" class="anchor"><em></em></a>Basic implementation
============================================================================

For the basic version we don’t have to do anything specific to vue. Just need to bind `@submit` to `handleSubmit` action will trigger the validation and show error message in native way.

    // SimpleForm.vue

    <template>
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-5 is-offset-3">
              <form @submit.prevent="handleSubmit">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Text input" required>
                  </div>
                </div>
                <div class="field is-grouped">
                  <div class="control">
                    <button type="submit" class="button is-link">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: "SimpleForm",
      methods: {
        handleSubmit() {

        }
      }
    }
    </script>

<a href="#programmatically" id="programmatically" class="anchor"><em></em></a>Form submit programmatically
==========================================================================================================

When we use `form.submit()`, it wont trigger the native validations. This requirement usually arise when we want to do some task (like update state) before the form submission. In such cases we have to trigger the validation and report it manually using `checkValidity` and `reportVaidity` methods.

    <template>
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-5 is-offset-3">
              <form ref="form" @submit.prevent="handleSubmit">
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Text input"
                      required
                    />
                  </div>
                </div>
                <div class="field is-grouped">
                  <div class="control">
                    <button type="submit" class="button is-link">Submit</button>
                  </div>
                  <div class="control">
                    <button
                      type="button"
                      class="button is-link"
                      @click="handleSignup"
                    >
                      Signup
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: "MultipleButton",
      methods: {
        handleSubmit(e) {
          console.log("submit");
        },
        handleSignup() {
          console.log("do task before submit");
          if (this.$refs.form.checkValidity()) {
            this.handleSubmit();
          } else {
            this.$refs.form.reportValidity();
          }
        }
      }
    };
    </script>

In this case when `checkValidity` is true we have to call `handleSubmit` directly since the `submit` event [wont be raised](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit).

<a href="#custom-design" id="custom-design" class="anchor"><em></em></a>Custom design for Error messages
========================================================================================================

It now we didn’t controlled how the error message are shown to the user. Consider we need to show the error message in a uniform way across the browsers and don’t want to hide those automatically.

In such case we have to bind callback to [form invalid](https://developer.mozilla.org/en-US/docs/Web/Events/invalid) event, to collect error message from all the child inputs. We will use `validationMessage` property on the input element to get the localized message for the validation failure.

    <template>
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-5 is-offset-3">
              <div className="container">
                <form
                  @submit="handleSubmit"
                  @change="handleChange"
                  @invalid.capture.prevent="handleInvalid"
                >
                  <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        class="input" 
                        :class="errorClass('username')"
                        type="text"
                        placeholder="Name"
                        required
                        name="username"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user" />
                      </span>
                      <span v-if="fieldErrors.username" class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle" />
                      </span>
                    </div>
                    <p v-if="fieldErrors.username" class="help is-danger">{{fieldErrors.username}}</p>
                  </div>
                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                      <input
                        class="input"
                        :class="errorClass('email')"
                        type="email"
                        placeholder="Email input"
                        required
                        name="email"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope" />
                      </span>
                      <span v-if="fieldErrors.email" class="icon is-small is-right">
                        <i class="fas fa-exclamation-triangle" />
                      </span>
                    </div>
                    <p v-if="fieldErrors.email" class="help is-danger">{{fieldErrors.email}}</p>
                  </div>
                  <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        :class="errorClass('message')"
                        placeholder="Textarea"
                        required
                        name="message"
                      />
                    </div>
                    <p v-if="fieldErrors.message" class="help is-danger">{{fieldErrors.message}}</p>
                  </div>
                  <div class="field">
                    <div class="control">
                      <label class="checkbox">
                        <input type="checkbox" required name="toc" />
                        I agree to the <a href="#">terms and conditions</a>
                      </label>
                      <p v-if="fieldErrors.toc" class="help is-danger">{{fieldErrors.toc}}</p>
                    </div>
                  </div>
                  <div class="field is-grouped">
                    <div class="control">
                      <button class="button is-link">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: "CustomDesign",
      data() {
        return {
          fieldErrors: {}
        }
      },
      methods: {
        handleSubmit() {
          
        },
        handleChange(evt) {
          console.log('handleChange :: ', evt.target.name);
          this.fieldErrors = {
            ...this.fieldErrors,
            [evt.target.name]: ""
          };
        },
        handleInvalid(evt) {
          console.log('handleInvalid :: ', evt.target.name);
          this.fieldErrors = {
            ...this.fieldErrors,
            [evt.target.name]: evt.target.validationMessage
          };
        },
        errorClass(field) {
          return this.fieldErrors[field] ? "is-danger" : ""
        }
      },
    }
    </script>

In this make sure to use `capture` [modifier](https://vuejs.org/v2/guide/render-function.html#Event-amp-Key-Modifiers) like `@invalid.capture.prevent` since the invalid event [won’t bubble](https://github.com/vuejs/vue/issues/8647#issuecomment-412499477).

The working sample is available on [codesandbox](https://codesandbox.io/s/5zmz9q9m0p)

{: style=“text-align: center”} ![Vue HTML5 validation](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/vue-html5-validation/Screenshot+from+2018-12-05+00-42-47.png)

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      Vue         |  2.5.2 |

if you have any feedback, please drop a comment below.
