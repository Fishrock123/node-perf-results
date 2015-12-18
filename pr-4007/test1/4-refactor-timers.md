test1.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
wrk -t16 -c800 -d45s http://192.168.2.15:4242/
```

```
Running 45s test @ http://192.168.2.15:4242/
  16 threads and 800 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    90.05ms  767.61ms  32.38s    99.74%
    Req/Sec   301.21    112.41   603.00     61.45%
  210053 requests in 45.00s, 19.83MB read
  Socket errors: connect 0, read 0, write 0, timeout 10259
Requests/sec:   4667.63
Transfer/sec:    451.27KB
```

Relevant `--prof` data:

```
```
