test1.js on `master @ 0b43c08`.

```
wrk -t16 -c800 -d45s http://192.168.2.15:4242/
```

```
Running 45s test @ http://192.168.2.15:4242/
  16 threads and 800 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   110.75ms  781.86ms  35.55s    99.48%
    Req/Sec   281.47    130.87   649.00     61.06%
  205344 requests in 45.02s, 19.39MB read
  Socket errors: connect 0, read 0, write 0, timeout 10270
Requests/sec:   4561.55
Transfer/sec:    441.01KB
```

Relevant `--prof` data:

```
```
