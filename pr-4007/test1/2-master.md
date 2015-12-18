test1.js on `master @ 0b43c08`.

```
wrk -t12 -c400 -d30s http://192.168.2.15:4242/
```

```
Running 30s test @ http://192.168.2.15:4242/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    54.63ms   53.57ms   1.36s    97.50%
    Req/Sec   385.57    180.87     0.86k    62.21%
  139143 requests in 30.01s, 13.14MB read
  Socket errors: connect 155, read 0, write 0, timeout 2170
Requests/sec:   4636.87
Transfer/sec:    448.29KB
```

Relevant `--prof` data:

```
```
