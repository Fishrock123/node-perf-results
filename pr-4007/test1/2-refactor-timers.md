test1.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
wrk -t12 -c400 -d30s http://192.168.2.15:4242/
```

```
Running 30s test @ http://192.168.2.15:4242/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    87.09ms  382.82ms  16.74s    97.70%
    Req/Sec   378.67     73.94   600.00     71.29%
  135596 requests in 30.01s, 12.80MB read
  Socket errors: connect 0, read 0, write 0, timeout 607
Requests/sec:   4518.42
Transfer/sec:    436.84KB
```

Relevant `--prof` data:

```
```
