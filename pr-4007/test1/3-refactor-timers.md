test1.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
wrk -t16 -c5000 -d60s http://192.168.2.15:4242/
```

```
Running 1m test @ http://192.168.2.15:4242/
  16 threads and 5000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.49s     4.95s    0.88m    96.14%
    Req/Sec   247.13     46.46   503.00     72.32%
  236211 requests in 1.00m, 22.30MB read
  Socket errors: connect 0, read 0, write 0, timeout 69918
Requests/sec:   3935.96
Transfer/sec:    380.53KB
```

Relevant `--prof` data:

```
```
