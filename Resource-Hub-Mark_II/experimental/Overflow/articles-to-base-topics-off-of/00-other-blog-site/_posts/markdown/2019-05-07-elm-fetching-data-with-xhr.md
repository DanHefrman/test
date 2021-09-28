&lt;!DOCTYPE html&gt;

This post will explain how to use `elm/http` package to fetch data using XHR requests in ELM applications. Since the reponse is from the outer world of ELM we need to [decode JSON response](/2018/06/elm-decoding-json.html) before ELM can consume it. For the purpose of demo we will fetch `posts` from [jsonplaceholder](https://jsonplaceholder.typicode.com/) and render the list of titles from its `/posts` resource.

![ELM fetch with XHR](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/elm-http-xhr/elm-http-xhr.png){: width=“100%”}

<a href="#setup" id="setup" class="anchor"><em></em></a>Setup Model
-------------------------------------------------------------------

Lets start with defining model for the application. Our `Post` model will have `id`,`title` & `body` fields and main `Model` will contain the list of `Post`s the `uiState` to show the state of request and `error` to store the error message.

    type UiState
        = Init
        | Loading
        | Success
        | Failure

    type alias Post =
        { id : Int, title : String, body : String }


    type alias Model =
        { posts : List Post, uiState : UiState, error : Maybe String }


    initialModel : Model
    initialModel =
        { posts = [], uiState = Init, error = Nothing }


    init : ( Model, Cmd Msg )
    init =
        ( initialModel, Cmd.none )

Once we have `Modal` and `Post` we can setup the decoders for these

<a href="#list-decoder" id="list-decoder" class="anchor"><em></em></a>List Decoder
----------------------------------------------------------------------------------

    postDecoder : Json.Decode.Decoder Post
    postDecoder =
        Json.Decode.map3 Post
            (Json.Decode.field "id" Json.Decode.int)
            (Json.Decode.field "title" Json.Decode.string)
            (Json.Decode.field "body" Json.Decode.string)


    postCollectionDecoder : Json.Decode.Decoder (List Post)
    postCollectionDecoder =
        Json.Decode.map identity
            (Json.Decode.list postDecoder)

if your api is namespaced the collection with keys like `data` then the `postCollectionDecoder` will become

    postCollectionDecoder : Json.Decode.Decoder (List Post)
    postCollectionDecoder =
        Json.Decode.map identity
            (Json.Decode.field "data" (Json.Decode.list repoDecoder))

<a href="#fetch-update" id="fetch-update" class="anchor"><em></em></a>fetch & update
------------------------------------------------------------------------------------

Next we need to setup the `Msg` and `update` function.

We will make use of two `Msg`s. `InitFetchPosts` will update the uiState to loading and initiate the fetch. Once the fetch result is available we will handle it with `FetchPosts` Msg.

    type Msg
        = InitFetchPosts
        | FetchPosts (Result Http.Error (List Post))

    update : Msg -> Model -> ( Model, Cmd Msg )
    update msg model =
        case msg of
            InitFetchPosts ->
                ( { model | uiState = Loading }, fetchPosts )

            FetchPosts result ->
                case result of
                    Ok posts ->
                        ( { model | uiState = Success, posts = posts }, Cmd.none )

                    Err _ ->
                        ( { model | uiState = Failure, error = Just "Error" }, Cmd.none )

then use `Http.get` to fetch the data

    fetchPosts : Cmd Msg
    fetchPosts =
        Http.get
            { url = "https://jsonplaceholder.typicode.com/posts"
            , expect = Http.expectJson FetchPosts postCollectionDecoder
            }

we can initiate `fetchPosts` either [on init using task](/2018/11/elm-send-command-on-init.html) or on a normal button click. For the purpose of this post let use a button to load the data we will be able to notice the `Loading` state switch to `Success` when data is received.

<a href="#view" id="view" class="anchor"><em></em></a>Rendering the view
------------------------------------------------------------------------

In view we will have a button which will initiate the xhr request and the render the data as per the xhr status. Once the xhr is initiated we will show the text `Loading...` as the loading indicator and later change it to either error message or the list of titles as per the status of xhr request.

    renderItem : Post -> Html Msg
    renderItem post =
        li [] [ text post.title ]


    renderData : Model -> Html Msg
    renderData model =
        case model.uiState of
            Init ->
                span [] []

            Loading ->
                span [] [ text "Loading..." ]

            Success ->
                ul [] (List.map (\post -> renderItem post) model.posts)

            Failure ->
                case model.error of
                    Just error ->
                        span [] [ text error ]

                    Nothing ->
                        span [] []


    view : Model -> Html Msg
    view model =
        div []
            [ button [ onClick InitFetchPosts ] [ text "Fetch Posts" ]
            , renderData model
            ]

The Running version is available on [ellie-app](https://ellie-app.com/5rmGSL6kbB4a1).

    Versions of Language/packages used in this post.

    | Library/Language | Version |
    | ---------------- |---------|
    |      ELM         |  0.19.0 |
    |   elm/http       |  2.0.0  |
