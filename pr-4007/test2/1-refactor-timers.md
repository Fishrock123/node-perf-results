test2.js on `master` with [`2ccde01...1362205`](https://github.com/Fishrock123/node/compare/2ccde01...1362205) applied.

```
wrk -t12 -c10000 -d30s http://45.55.209.17:4242/
```

```
Running 30s test @ http://45.55.209.17:4242/
  12 threads and 10000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us     nan%
    Req/Sec     0.00      0.00     0.00       nan%
  0 requests in 30.05s, 0.00B read
  Socket errors: connect 7451, read 5777, write 0, timeout 146576
Requests/sec:      0.00
Transfer/sec:       0.00B
```

Relevant `--prof` data:

```
Statistical profiling result from test2-1-refactor-timers.log, (12029 ticks, 1 unaccounted, 0 excluded).

 [JavaScript]:
   ticks  total  nonlib   name
     32    0.3%    0.3%  Stub: LoadICStub
     27    0.2%    0.2%  KeyedLoadIC: A keyed load IC from the snapshot {1}
     25    0.2%    0.2%  LazyCompile: *Socket net.js:110:16

     22    0.2%    0.2%  LazyCompile: ~insert timers.js:73:16

     18    0.1%    0.2%  LazyCompile: ~Socket._destroy net.js:437:37
     17    0.1%    0.1%  Stub: InstanceofStub
     17    0.1%    0.1%  LazyCompile: ~parserOnIncoming _http_server.js:454:28
     17    0.1%    0.1%  LazyCompile: *emit events.js:118:44
     17    0.1%    0.1%  LazyCompile: *connectionListener _http_server.js:262:28
     14    0.1%    0.1%  LazyCompile: ~emit events.js:118:44
     14    0.1%    0.1%  LazyCompile: *addListener events.js:192:58
     14    0.1%    0.1%  LazyCompile: *Readable.on _stream_readable.js:665:33

     ...

      7    0.1%    0.1%  LazyCompile: *remove internal/linkedlist.js:29:16
      6    0.0%    0.1%  LazyCompile: ~append internal/linkedlist.js:45:16

 [Summary]:
   ticks  total  nonlib   name
    954    7.9%    8.1%  JavaScript
  10850   90.2%   91.9%  C++
    118    1.0%    1.0%  GC
    224    1.9%          Shared libraries
      1    0.0%          Unaccounted

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
   8696   72.3%  syscall

    332    2.8%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
    331   99.7%    v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
    331  100.0%      LazyCompile: ~Socket._destroy net.js:437:37
    309   93.4%        LazyCompile: *Socket.destroy net.js:494:36
    297   96.1%          LazyCompile: ~<anonymous> _http_server.js:306:32
    191   64.3%            LazyCompile: *emit events.js:118:44
    106   35.7%            LazyCompile: *emitNone events.js:66:18
     12    3.9%          LazyCompile: ~onSocketFinish net.js:187:24
     12  100.0%            LazyCompile: *emit events.js:118:44
     22    6.6%        LazyCompile: ~Socket.destroy net.js:494:36
     14   63.6%          LazyCompile: ~<anonymous> _http_server.js:306:32
      6   42.9%            LazyCompile: ~emitNone events.js:66:18
      5   35.7%            LazyCompile: *emit events.js:118:44
      3   21.4%            LazyCompile: *emitNone events.js:66:18
      8   36.4%          LazyCompile: ~onSocketFinish net.js:187:24
      8  100.0%            LazyCompile: *emit events.js:118:44
```
