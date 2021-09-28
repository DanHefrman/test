&lt;!DOCTYPE html&gt;

[Telegram bots](https://core.telegram.org/bots) helps to add you own custom functionality to telegram by running your own third party applications. It can help to [communicate](https://t.me/gif) or share information, do some fun/informative tasks with in the telegram, can help groups to avoid spam messages or may be take a poll in the group.

In this tutorial we will look into [inline mode](https://core.telegram.org/bots#inline-mode) bots which users can use them in the text field itself.

### <a href="#register-bot" id="register-bot" class="anchor"><em></em></a>Register bot

Writing an telegram bot starts with the simple task of registering your bot with <span class="citation" data-cites="BotFather">\[@BotFather\]</span>[bot\_father](https://telegram.me/botfather) and get the bot token. You can create a new bot by sending the command `/newbot` to BotFather.Then BotFather will take you though a interactive chat to set the username, description etc and give back the bot token. Once you have the bot token keep it confidential and don’t share it with anyone. In this blog post we are creating an `Inline mode` bot. For this we have to enable inline mode by sending `/setinline` command to BotFather and provide a placeholder text.

### <a href="#setup-project" id="setup-project" class="anchor"><em></em></a>Setup project

Lets setup up a nodejs project using command [npm init -y](/2018/03/nodejs-npm-init-with-custom-values.html) and install the first and main package [telegram-node-bot](https://npmjs.org/package/telegram-node-bot) using

    npm i telegram-node-bot

This package uses MVC kind of architecture with router, controller etc.

Then setup your main controller and router. For inline mode bot the contoller should extend from `Telegram.TelegramBaseInlineQueryController`.

    'use strict'

    const Telegram = require('telegram-node-bot')

    const TelegramBaseInlineQueryController = Telegram.TelegramBaseInlineQueryController
    const tg = new Telegram.Telegram(process.env.TELEGRAM_BOT_TOKEN, {
        workers: 1
    })

    class DuckController extends TelegramBaseInlineQueryController {
        handle($) {
            // handle the query
        }
    }

    tg.router
        .inlineQuery(new DuckController())

By default `telegram-node-bot` uses long-polling to get the updates. If you want to setup the webhook, you can use the option `webhook` along with `workers` option.

    const tg = new Telegram.Telegram(process.env.TELEGRAM_BOT_TOKEN, {
        workers: 1,
        webhook: {
            url: process.env.WEBHOOK_URL,
            port: process.env.PORT || 3000,
            host: process.env.WEBHOOK_HOST || 'localhost'
        }
    })

In my opinion, `webhook` is needed only on `production`. If you want to use `webhook` in development, then you need to expose the local webserver to internet via [ngrok](https://ngrok.com/) or some other similar services.

### <a href="#handling-query" id="handling-query" class="anchor"><em></em></a>Handling query

Handling query is the part where we want our bot to do the main task which they are intended to do. like search for images, search for google results etc. For this demo we will convert the user query into [duckduckgo.com](https://duckduckgo.com/) search url.

    class DuckController extends TelegramBaseInlineQueryController {
        handle($) {
            const query = $._inlineQuery.query;
            let results = [];
            if (query) {
                results = [{
                    id: Math.random().toString(36).substring(7),
                    type:'article',
                    message_text: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
                    title: 'Duck It',
                    description: `${query}`
                }];
            }
            $.answer(results, {}, function(result) {
            });
        }
    }

The `handle` method will be called with first argument (`$`) which has the context of message like, what’s the user query, who is the user and other details. In our case we need only the query send by the user which we can get from `$._inlineQuery.query`.

Next, constuct the results array using appropriate [inline query result type](https://core.telegram.org/bots/api#inlinequeryresult), In this case [article](https://core.telegram.org/bots/api#inlinequeryresultarticle). Once we have the results constructed, pass it to `$.answer` method and the result will be shown to the users in telegram.

To see our inline bot in action,

    TELEGRAM_BOT_TOKEN=<bot token> node index.js

You can optionally add start command (`node index.js`) to npm scripts.

![lmdtf\_bot](https://raw.githubusercontent.com/revathskumar/lmdtfy_bot/master/images/lmdtfy.gif)

### <a href="#hosting-your-bot" id="hosting-your-bot" class="anchor"><em></em></a>Hosting your bot

You can use any hosting provider to host our bot. For me the easiest to host node project is [heroku](http://heroku.com/). You can setup a new project there and get the public url. like `https://yourbot.herokuapp.com` and then setup the `ENV` variable in the project settings.

In this make sure you provide

-   `WEBHOOK_HOST` as `0.0.0.0` and
-   `WEBHOOK_URL` as `https://yourbot.herokuapp.com`

![heroku env vars](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/telegram-bot/heroku-vars-updated.png)

After this go to **BotFather** and set webhookurl using the command `/setwebhookurl` or use the api url

    https://api.telegram.org/bot<bot token>/setwebhook?url=https://yourbot.herokuapp.com

This bot is available as <span class="citation" data-cites="lmdtfy_bot">\[@lmdtfy\_bot\]</span>[lmdtfy\_bot](https://t.me/lmdtfy_bot) for telegram users and code on [github](https://github.com/revathskumar/lmdtfy_bot)

Hope it helped.

    Versions of Language/packages used in this post.

    | Library/Language  | Version |
    | ----------------- |---------|
    |      Node         |  10.0.0 |
    |      NPM          |  6.0.1  |
    | telegram-node-bot |  4.0.5  |
