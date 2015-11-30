test1.js on `master` with [`2ccde01...1362205`](https://github.com/Fishrock123/node/compare/2ccde01...1362205) applied.

```
wrk -t12 -c400 -d30s http://45.55.209.17:4242/
```

```
Running 30s test @ http://45.55.209.17:4242/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    82.85ms   94.24ms   1.04s    96.58%
    Req/Sec   397.22    103.15   783.00     72.96%
  139481 requests in 30.00s, 13.17MB read
  Socket errors: connect 0, read 0, write 0, timeout 273
Requests/sec:   4648.92
Transfer/sec:    449.46KB
```

Relevant `--prof` data:

```
Statistical profiling result from test1-2-master.log, (26881 ticks, 1 unaccounted, 0 excluded).

 [JavaScript]:
   ticks  total  nonlib   name
    514    1.9%    2.5%  Stub: LoadICStub
    331    1.2%    1.6%  LazyCompile: *nextTick node.js:488:22
    286    1.1%    1.4%  LazyCompile: *parserOnIncoming _http_server.js:454:28
    263    1.0%    1.3%  LazyCompile: *emit events.js:118:44
    212    0.8%    1.0%  KeyedLoadIC: A keyed load IC from the snapshot
    193    0.7%    0.9%  LazyCompile: ~resOnFinish _http_server.js:490:25
    165    0.6%    0.8%  LazyCompile: *_tickCallback node.js:346:27

    157    0.6%    0.8%  LazyCompile: ~insert timers.js:73:16

    149    0.6%    0.7%  LazyCompile: *parserOnHeadersComplete _http_common.js:43:33
    146    0.5%    0.7%  LazyCompile: *Socket._writeGeneric net.js:623:42
    131    0.5%    0.6%  Stub: GrowArrayElementsStub
    123    0.5%    0.6%  LazyCompile: INSTANCE_OF native runtime.js:289:21
    123    0.5%    0.6%  LazyCompile: *OutgoingMessage.end _http_outgoing.js:527:41
    123    0.5%    0.6%  LazyCompile: *OutgoingMessage _http_outgoing.js:47:25
    119    0.4%    0.6%  Stub: StringAddStub_CheckNone_NotTenured
    118    0.4%    0.6%  LazyCompile: *IncomingMessage _http_incoming.js:21:25
    111    0.4%    0.5%  LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
    110    0.4%    0.5%  LazyCompile: *Readable.read _stream_readable.js:251:35
    109    0.4%    0.5%  LazyCompile: *OutgoingMessage._storeHeader _http_outgoing.js:191:50
    108    0.4%    0.5%  LazyCompile: *Stream stream.js:23:16

 [Summary]:
   ticks  total  nonlib   name
   8556   31.8%   41.4%  JavaScript
  12103   45.0%   58.6%  C++
    129    0.5%    0.6%  GC
   6221   23.1%          Shared libraries
      1    0.0%          Unaccounted

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
   5637   21.0%  /lib/x86_64-linux-gnu/libpthread-2.21.so
   3620   64.2%    LazyCompile: *Socket._writeGeneric net.js:623:42
   3620  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:256:23
   3620  100.0%        LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
   3620  100.0%          LazyCompile: *OutgoingMessage._send _http_outgoing.js:123:43
   3620  100.0%            LazyCompile: *OutgoingMessage.end _http_outgoing.js:527:41
    483    8.6%    LazyCompile: *createWriteReq net.js:698:24
    483  100.0%      LazyCompile: ~Socket._writeGeneric net.js:623:42
    483  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:256:23
    483  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
    483  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:123:43

   2176    8.1%  syscall

    560    2.1%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
    557   99.5%    v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)

    557  100.0%      LazyCompile: ~insert timers.js:73:16
    
    548   98.4%        LazyCompile: *Socket._writeGeneric net.js:623:42
    548  100.0%          LazyCompile: *writeOrBuffer _stream_writable.js:256:23
    548  100.0%            LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
```
