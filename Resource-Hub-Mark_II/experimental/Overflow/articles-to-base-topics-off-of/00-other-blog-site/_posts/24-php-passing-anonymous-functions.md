Recently when I was writing a PHP API wrapper for a external service, I thought of writing it as independent module which can be plugged into any PHP application. Everything went nice but when I need to do some logging I was forced to depended on application.

So I thought of plug in a logger. Then I came to know about [PHP Anonymous functions (Closures)](http://www.php.net/manual/en/functions.anonymous.php) which can be used to pass a function as a callback to another function like in JavaScript.

So I modified my Api wrapper like

    <?php
    Class Api {
        private static $log;

        public static function setLogger($func) {
            self::$log = &$func;
        }

        public static function errorLog($st) {
            $func = &self::$log;
            $func($st);
        }

        public function doSth() {
            self::errorLog('In doSth');
        }
    }

    ?>

Now when we use it, I can set my logger to application logger without any issues and still my wrapper is totally independent of my application.

    <?php
    Class Logger {
        public static function log($statement) {
            printf("%s \r\n", $statement);
        }
    }

    Api::setLogger(function($statement){
        Logger::log($statement);
    });

    $api = new Api;
    $api->doSth();

    ?>

So now in my Api wrapper, when I call `self::errorLog` the error will be logged into the application log itself.

If you have a better suggestion, please drop a comment. Thank You.
