test2.js on `master`

```
wrk -t12 -c10000 -d30s http://45.55.209.17:4242/
```

```
Running 30s test @ http://45.55.209.17:4242/
  12 threads and 10000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us     nan%
    Req/Sec     0.00      0.00     0.00       nan%
  0 requests in 30.07s, 0.00B read
  Socket errors: connect 7451, read 5689, write 0, timeout 146714
Requests/sec:      0.00
Transfer/sec:       0.00B
```

Relevant `--prof` data:

```
Statistical profiling result from test2-1-master.log, (11068 ticks, 0 unaccounted, 0 excluded).

 [JavaScript]:
   ticks  total  nonlib   name

    138    1.2%    1.3%  LazyCompile: *unrefTimeout timers.js:533:22

     46    0.4%    0.4%  Stub: LoadICStub
     32    0.3%    0.3%  KeyedLoadIC: A keyed load IC from the snapshot
     31    0.3%    0.3%  LazyCompile: *emit events.js:118:44
     20    0.2%    0.2%  LazyCompile: ~Socket._destroy net.js:437:37
     17    0.2%    0.2%  Stub: InstanceofStub
     15    0.1%    0.1%  KeyedStoreIC: A keyed store IC from the snapshot
     13    0.1%    0.1%  LazyCompile: ~parserOnIncoming _http_server.js:454:28
     13    0.1%    0.1%  LazyCompile: *addListener events.js:192:58
     12    0.1%    0.1%  LazyCompile: *connectionListener _http_server.js:262:28
     12    0.1%    0.1%  LazyCompile: *Socket net.js:110:16
     12    0.1%    0.1%  LazyCompile: *EventEmitter events.js:6:22

 [Summary]:
   ticks  total  nonlib   name
   1008    9.1%    9.3%  JavaScript
   9824   88.8%   90.7%  C++
    125    1.1%    1.2%  GC
    236    2.1%          Shared libraries

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
   8292   74.9%  syscall

    311    2.8%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
    311  100.0%    v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
    311  100.0%      LazyCompile: ~Socket._destroy net.js:437:37
    294   94.5%        LazyCompile: *Socket.destroy net.js:494:36
    278   94.6%          LazyCompile: ~<anonymous> _http_server.js:306:32
    211   75.9%            LazyCompile: *emit events.js:118:44
     67   24.1%            LazyCompile: ~emitNone events.js:66:18
     16    5.4%          LazyCompile: ~onSocketFinish net.js:187:24
     16  100.0%            LazyCompile: *emit events.js:118:44
     17    5.5%        LazyCompile: ~Socket.destroy net.js:494:36
     11   64.7%          LazyCompile: ~onSocketFinish net.js:187:24
     10   90.9%            LazyCompile: *emit events.js:118:44
      1    9.1%            LazyCompile: ~emitNone events.js:66:18
      6   35.3%          LazyCompile: ~<anonymous> _http_server.js:306:32
      6  100.0%            LazyCompile: *emit events.js:118:44
```
