&lt;!–

Last couple of months in my free time I was working on a small Android app by learning react native. This is my first experience of developing apps for mobiles.

When I started one thing I wanted to set up in the initial stage itself was the different application id for `debug` and `production` apks. This will help me have both builds installed at the same time. Also, it will make sure the even while development or testing, I can still use the production version on my phone.

Along with `application id`, I want different titles for apps to differentiate those apps on `Home`. The debug version will have title **Reminder β** and production will have **Reminder** (without β).

<a href="#application-id" id="application-id" class="anchor"><em></em></a>Setting application id
------------------------------------------------------------------------------------------------

First, we can look into setting `application id`. The application id for debug will include `<app name>-debug`.

In the `android/app/build.gradle` there will be `release` config inside the `buildTypes`

    /** android/app/build.gradle **/
    android {
      /** other configs **/

      buildTypes {
        release {
          externalNativeBuild {
            cmake {
              arguments "-DANDROID_PACKAGE_NAME=${android.defaultConfig.applicationId}"
            }
          }
          minifyEnabled enableProguardInReleaseBuilds
          proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
      }
    }

We need to add `debug` config along with release with custom `applicationIdSuffix` & `versionNameSuffix`. Then append the `versionNameSuffix` to the package name argument.

The sample updated config is given below.

    /** android/app/build.gradle **/
    android {
      /** other configs **/

      buildTypes {
        release {
          externalNativeBuild {
            cmake {
              arguments "-DANDROID_PACKAGE_NAME=${android.defaultConfig.applicationId}"
            }
          }
          minifyEnabled enableProguardInReleaseBuilds
          proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    +   debug {
    +     applicationIdSuffix '.debug'
    +     versionNameSuffix "-debug"
    +     externalNativeBuild {
    +       cmake {
    +         arguments "-DANDROID_PACKAGE_NAME=${android.defaultConfig.applicationId}${applicationIdSuffix}"
    +       }
    +     }
    +   }
      }
    }

<a href="#application-title" id="application-title" class="anchor"><em></em></a>Setting title
---------------------------------------------------------------------------------------------

To set the different titles for `debug` and `production`, we need to update the values in `string.xml`. For production, the title will be picked from `main/res/values/string.xml`

    <resources>
        <string name="app_name">Reminder</string>
    </resources>

and for debug the title will be picked from `debug/res/values/string.xml`

    <resources>
        <string name="app_name">Reminder β</string>
    </resources>
