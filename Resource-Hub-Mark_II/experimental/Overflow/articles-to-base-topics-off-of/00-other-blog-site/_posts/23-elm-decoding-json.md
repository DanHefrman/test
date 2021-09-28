In ELM understanding decoding JSON will take a bit of time. We can define a `Decoder` as a spec on how to perform the translation from JSON to ELM types.

In this post we will try to understand the how to decode a JSON string to ELM types. For limiting the scope we Will cover decoding `Simple Object` in this post and the others complex ones like decoding `List         of Objects`, decoding `Union Types`, decoding `JSON with optional keys` will cover in other posts.

We will use [Json.Decode](http://package.elm-lang.org/packages/elm-lang/core/5.1.1/Json-Decode) package from ELM core to do the decoding.

{:style=“text-align: center;”} ![json card](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/elm-json-decoder/3762360637_6b851c9478.jpg)

{:style=“text-align: center;”} photo credit: superfluity [JSON Card – Front](http://www.flickr.com/photos/44792728@N00/3762360637) via [photopin](http://photopin.com) [(license)](https://creativecommons.org/licenses/by-nc-sa/2.0/)

<a href="#simple-object" id="simple-object" class="anchor"><em></em></a>simple object
=====================================================================================

Lets get started with defining a simple json string for easy decoding. We will also define an `ELM` type to which this json should decode into.

    import Json.Decode

    type alias Obj =
        { a: Int, b: String }

    json =
        """
        {"a": 10, "b": "abc"}
        """

Next lets define a custom decoder function called `decodeObjValue`, which is composed from the different methods available in `Json.Decode` library. This will defined as per the structure of our `json` and `Obj`.

    decodeObjValue : Json.Decode.Decoder Obj
    decodeObjValue =
        Json.Decode.map2 Obj
            (Json.Decode.field "a" Json.Decode.int)
            (Json.Decode.field "b" Json.Decode.string)

Since we have only 2 fields in the JSON string we can use `Json.Decode.map2` and pass `Obj` and functions to decode each field. Our first field `a` is of type `Int`. So we can use `(Json.Decode.field "a" Json.Decode.int)` and for `b` we use `(Json.Decode.field "b"         Json.Decode.string)` since we are expecing `b` to be of type `String`

**Note:** It is extremely important to keep the order of the fields. The decoding will fail if we try to decode the field `b` first.

In Elm, all type alias’s are shorthand functions In our case `Obj` is `(\a b -> Obj a         b)` This is the reason why we should keep the order of field. If we try to decode `b` first the `Obj` will receive a String as first param and it can’t accept it.

Now we defined or agreed on how to decode the incoming json. Next we need to run this decoder. Since our input is `String` we will use [Json.Decode.decodeString](http://package.elm-lang.org/packages/elm-lang/core/5.1.1/Json-Decode#decodeString) to parse the given string and run our custom decoder.

    decodeObj : String -> Obj
    decodeObj json =
        case Json.Decode.decodeString decodeObjValue json of
            Ok obj ->
                obj
            Err _ ->
                {a = -1, b = "Error"}

`Json.Decode.decodeString` will accept the `Decoder` as first argument and json string which need to decoded as second. It returns the type `Result` which we need use it with `case` statement to get the exact result.

You can see the decode in action on [ellie-app](https://ellie-app.com/yghR44wmJda1)

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      ELM         |  0.18.0 |
    |      core        |  5.1.1  |
