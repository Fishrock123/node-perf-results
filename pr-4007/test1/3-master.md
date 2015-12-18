test1.js on `master @ 0b43c08`.

```
wrk -t16 -c5000 -d60s http://192.168.2.15:4242/
```

```
Running 1m test @ http://192.168.2.15:4242/
  16 threads and 5000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.91s    13.11s    0.96m    91.35%
    Req/Sec   239.70     57.22   430.00     72.74%
  228812 requests in 1.00m, 21.60MB read
  Socket errors: connect 0, read 634, write 0, timeout 73944
Requests/sec:   3812.01
Transfer/sec:    368.54KB
```

Relevant `--prof` data:

```
```
