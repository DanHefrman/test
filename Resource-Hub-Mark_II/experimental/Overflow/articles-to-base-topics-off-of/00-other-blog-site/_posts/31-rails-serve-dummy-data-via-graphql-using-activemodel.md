`Graphql` is a alternative to REST architecure which allows client to request the data in particular stucture and it returs data in thbe same structure.

When you work as a `Frontend` and `Backend` team, you might need to setup a server to serve dummy data so that `Frontend` team can work in parallel.

This post assumes that we already have a bootstrapped project with rails and `graphql-ruby`. Consider we have some data of users

    [
        {
            "id":1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv"
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net"
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org"
        }
    ]

To serve this through the graphql query first we need to setup the `UserType`.

    # app/graphql/types/user_type.rb
    module Types
      class UserType < Types::BaseObject
        graphql_name 'User'

        field :id, ID, null: false
        field :name, String, null: false
        field :username, String, null: false
        field :email, String, null: false
      end
    end

Then lets setup the `User` model using `ActiveModel`

    # app/model/user.rb
    class User
      include ActiveModel::Serializers::JSON

      attr_accessor :name, :id, :username, :email
      
      def attributes=(hash)
        hash.each do |key, value|
          send("#{key}=", value)
        end
      end
      
      def attributes
        instance_values
      end
    end

<a href="#setup-for-collection" id="setup-for-collection" class="anchor"><em></em></a>Setup collection query type
-----------------------------------------------------------------------------------------------------------------

Next, the crucial part on setting the `QueryType` with custom resolver.

    # app/graphql/types/query_type.rb

    require 'json'

    module Types
      class QueryType < Types::BaseObject

        field :users, [UserType], null: false, resolve: -> (obj, args, ctx) {
            file = File.read File.join(File.dirname(__FILE__), "../data/users.json")
            data = JSON.parse(file)
        
            data.map do |user|
              g = User.new
              g.from_json(user.to_json)
            end
          }
      end
    end

Now in your `/graphiql` interface when you query for

    {
      users {
        id,
        name
      }
    }

you will receive the response

![collection response](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/graphql-ruby/graphql-1.png)

<a href="#setup-for-record" id="setup-for-record" class="anchor"><em></em></a>Setup single record query type
------------------------------------------------------------------------------------------------------------

Since we already have the `UserType` and `User` model we need to add only query type to respond for single record requests.

    # app/graphql/types/query_type.rb

    require 'json'

    module Types
      class QueryType < Types::BaseObject

        field :user, UserType,
            null: false,
            resolve: -> (obj, args, ctx) {
              file = File.read File.join(File.dirname(__FILE__), "../data/users.json")
              data = JSON.parse(file)
              selectedUser = data.select do |user|
                user['id'].to_i == args[:id]
              end.first
              user = User.new
              user.from_json(selectedUser.to_json)
              
            } do
              argument :id, Int, required: true
        end
    end

The record response will be

![record response](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/graphql-ruby/graphql-2.png)

The code is available on [revathskumar/rails-graphql-activemodel-json](https://github.com/revathskumar/rails-graphql-activemodel-json)

    Versions of Language/packages used in this post.

    | Library/Language | Version         |
    | ---------------- |-----------------|
    |      rails       |  5.2.1          |
    |      ruby        |  2.6.0-preview2 |
    |  graphql (gem)   |  1.8.11         |
    |  graphql-rails   |  1.4.11         |
