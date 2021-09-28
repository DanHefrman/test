&lt;

Resource
--------

### Online

-   [Official wsebsite](https://www.docker.com/)
-   [Official documentation](https://docs.docker.com/)
-   [Central images hub](https://www.docker.com/)

Daemon
------

### Lifecycle

-   service docker start
-   service docker stop

### Settings

-   /etc/default/docker
-   docker daemon settings file

Images
------

### Provisionning

-   docker pull image/name:label
-   pull image image/name with label label from registry
-   docker pull registryhost:registryport/image/name:label
-   pull image image/name with label label from given registry
-   docker push registryhost:registryport/image/name
-   push image image/name to registryhost. image must have been tagged before

### Control

-   docker images
-   list current available images
-   docker tag image/name registryhost:registryport/image/name
-   tag image/name to be pushed to new registry registryhost:registryport

### Import/Export

-   docker save -o image\_archive.docker image/name
-   save image to image\_archive.docker file
-   docker load image\_archive.docker
-   loads the images from the archive

Containers
----------

### Lifecycle

-   docker ps -a
-   list all containers
-   docker rm name
-   Remove container instance with given name or id
-   docker run --name ubuntu\_bash -it ubuntu bash
-   runs bash sheel in an ubuntu instance nammed ubuntu\_bash

### Run options

-   -d
-   runs as a daemon
-   -p HOSTPORT:CONTAINERPORT
-   port routing between host port and container port
-   -v host/path:/container/mount/point
-   mount the host path to the container at the given mount point

Registry
--------

### Local

-   docker run -d -p 5000:5000 --restart=always --name registry -v \`pwd\`/data:/var/lib/registry registry:2
-   [source](https://docs.docker.com/registry/deploying/)
