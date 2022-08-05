# Load Balancer

Create two HTTP servers. First server should display the content "Desktop Version". Second server should display the content "Mobile Version". Now have two containers running the first server's code. Have two more containers running second server's code. Create two load balancers - one placed before the two desktop servers and the other placed before the two mobile servers. Any request coming to `desktop.loadbalance.local` should be proxied to the desktop load balancer and any request coming to `mobile.loadbalance.local` should be proxied to the mobile load balancer.

## Superuser mode

Accept requests to `loadbalance.local`. Figure out the type of device used by the user from the request and redirect the request to the appropriate load balancer (desktop/mobile).

![Network diagram](https://i.imgur.com/5HsuQC0.png)