# rest-diag-svc
Minimalistic REST API server that just returns diagnostics data

Example:

```sh
$ docker build -t demo -e demo-server .
Sending build context to Docker daemon  57.86kB
...
Successfully built 52620cfc6f08
Successfully tagged demo:latest

$ docker run -e SERVICE_NAME=demo-server -p 8080:8080 --rm -d --name demo demo
c29c334ed81a441236676418b7d917077a8c6a84988a432adbe21635a8d1fe0e

$ curl "http://127.0.0.1:8080/test/me&id=today"
{
    "service": "demo-server",
    "host": "c29c334ed81a",
    "request": "/test/me&id=today",
    "method": "GET",
    "headers": {
        "host": "127.0.0.1:8080",
        "user-agent": "curl/7.52.1",
        "accept": "*/*"
    },
    "from": "::ffff:172.17.0.1"
}
```

In the reply, we got the name we passed as SERVICE_NAME on the first line. This is practical in order to verify that the service you hit (for example trough a load-balancer to a Docker Swarm or Kubernertes cluster), runs the container you expect it to run.

We also get the request url (nice when you debug nginx rewrite rules, or have problems with a REST client) and some other useful information.

I made this server to test a Proof Of Concept for [this](https://github.com/jgaa/nginx-swarm-proxy) project.

But it may be useful for other purposes as well.

