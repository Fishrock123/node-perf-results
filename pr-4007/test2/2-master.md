test1.js on `master @ 0b43c08`.

```
wrk -t12 -c10000 -d30s http://192.168.2.15:4242/
```

```
Running 30s test @ http://192.168.2.15:4242/
  12 threads and 10000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us     nan%
    Req/Sec     0.00      0.00     0.00       nan%
  0 requests in 30.14s, 0.00B read
  Socket errors: connect 1819, read 16048, write 0, timeout 126987
Requests/sec:      0.00
Transfer/sec:       0.00B
```

Relevant `--prof` data:

```
```