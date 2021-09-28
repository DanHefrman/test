Environment variables are really handy to pass value to a process. It really helps you to easily set the environment like development or production or pass a port number to use, so you don’t want change the code to set a temporarily value.

You can read the environment variables in nodejs using

    process.env.VARIABLE_NAME;

For example if you want to pass the port number, you can use

    var port = process.env.PORT || 9000;

so it will take `9000` as the default port and if you want change the port temporarily, you can run like

    PORT=9002 node app.js

Hope that helped you.
