While I was working with PHP, I used to setup *.dev* domain with [Apache VirtualHost](http://www.phprepo.in/2011/09/adding-virtual-host-in-apache-on-ubuntu/) for my development. But after I moved to Ruby on Rails, I never used it since Rails were not using apache server and port 80.

In the begining I tried to set domain with `/etc/hosts`, but I came to know that hosts file won’t accept PORT. They only map IP address. But now I managed to find a way to setup *.dev* domain for rails development.

You can either setup this manually or [use invoker](#invoker) gem.

1. Manual Setup
---------------

To setup *.dev* domain, the prerequisites are [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html) and [rinetd](http://www.boutell.com/rinetd/). **dnsmasq** is a DNS subsystem provides a local DNS server for the network, with forwarding of all query types to upstream recursive DNS servers and cacheing of common record types. **rinetd** is a internet redirection server rinetd redirects TCP connections from one IP address and port to another

### Installation

On ubuntu use `apt-get` to install both dnsmasq & rinetd

    sudo apt-get install dnsmasq rinetd

### Configure dnsmasq

create `/etc/dnsmasq.d/dev-tld` and add the below configuration into it.

    local=/dev/
    address=/dev/127.0.0.1

### Configure rinetd

The configuration file for rinetd resides at `/etc/rinetd.conf`. The syntax to add redirection rule is

    <to ip> <to port> <from ip> <from port>

in order to redirect your rails app running on port 4000 to default http port 80, append the below config to /etc/rinetd.conf

    0.0.0.0 80 0.0.0.0 4000
    0.0.0.0 443 0.0.0.0 3003

The second line in above config is needed only if you use SSL. After saving the config restart the rinetd, dnsmasq & network.

    sudo service rinetd restart
    sudo service dnsmasq restart
    sudo /etc/init.d/networking restart

If you think these steps are hassle, you can set things with invoker gem.

2. Setup with invoker
---------------------

You can automate all these **dnsmasq** & **rinetd** setup using [invoker](http://invoker.codemancers.com/) gem.

{% highlight sh %} gem install invoker {% endhighlight %}

and run its setup command

{% highlight sh %} rvmsudo invoker setup {% endhighlight %}

More details about invoker configuration is available on [invoker.codemancers.com](http://invoker.codemancers.com/#tld)

You are done, Now you can type **&lt;you app&gt;.dev** in the browser instead of `localhost:4000`.
