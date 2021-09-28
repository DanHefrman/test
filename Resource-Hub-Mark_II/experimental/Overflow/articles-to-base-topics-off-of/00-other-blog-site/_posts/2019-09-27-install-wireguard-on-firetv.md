[WireGuard](https://www.wireguard.com/) is a moden next gen VPN which utilizes cryptography. Since Wireguard is not available on FireTV’s app store, we have to sideload the app using adb.

Enable ADB on FireTV.
---------------------

First step to side load the app to FireTv is to enable `ADB debugging` and `Apps from unknown         sources`.

To do this Goto `Settings -> My FireTV -> Developer Options`

-   Choose Option **My FireTV** from Settings

![Choose Option My FireTV from Settings](/assets/images/firetv/settings-my-fire-tv.png){:width=“100%”}

-   Choose **Developer Options**

![Choose Developer Options](/assets/images/firetv/settings-dev-options.png){:width=“100%”}

-   Turn on **ADB debugging** and **Apps from unknown sources**

{:width=“100%”}

Download Wireguard apk from F-Droid
-----------------------------------

Next we can download the [wireguard apk](https://f-droid.org/en/packages/com.wireguard.android/) from F-droid to your system. Once the download is finished let’s connect the system to our FireTV.

    adb connect <firetv ip>:5555

Once the connection is success, we can install the apk.

    adb install </path/to/wireguard.apk>

Done. once the installtion is success you can see wireguard among the other app on fireTV. Open the wireguard app on fireTV to configure the VPN.
