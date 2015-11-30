test1.js on `master`


```
wrk -t12 -c400 -d30s http://45.55.209.17:4242/
```

```
Running 30s test @ http://45.55.209.17:4242/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    86.55ms  181.57ms   5.04s    96.54%
    Req/Sec   402.71    107.60   693.00     72.36%
  141047 requests in 30.00s, 13.32MB read
  Socket errors: connect 0, read 0, write 0, timeout 264
Requests/sec:   4701.17
Transfer/sec:    454.51KB
```

Relevant `--prof` data:

```
Statistical profiling result from test1-1-master.log, (26719 ticks, 0 unaccounted, 0 excluded).

 [JavaScript]:
   ticks  total  nonlib   name
    529    2.0%    2.7%  Stub: LoadICStub
    329    1.2%    1.7%  LazyCompile: *nextTick node.js:488:22
    298    1.1%    1.5%  LazyCompile: *parserOnIncoming _http_server.js:454:28
    193    0.7%    1.0%  KeyedLoadIC: A keyed load IC from the snapshot
    182    0.7%    0.9%  Stub: GrowArrayElementsStub
    180    0.7%    0.9%  LazyCompile: ~resOnFinish _http_server.js:490:25
    180    0.7%    0.9%  LazyCompile: *parserOnHeadersComplete _http_common.js:43:33
    174    0.7%    0.9%  LazyCompile: *emit events.js:118:44
    172    0.6%    0.9%  LazyCompile: *_tickCallback node.js:346:27
    147    0.6%    0.7%  Stub: StringAddStub_CheckNone_NotTenured
    146    0.5%    0.7%  LazyCompile: *OutgoingMessage.end _http_outgoing.js:527:41
    130    0.5%    0.7%  LazyCompile: *IncomingMessage _http_incoming.js:21:25

    119    0.4%    0.6%  LazyCompile: *exports._unrefActive timers.js:601:32

    118    0.4%    0.6%  LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
    116    0.4%    0.6%  LazyCompile: *OutgoingMessage _http_outgoing.js:47:25
    112    0.4%    0.6%  LazyCompile: doNTCallbackMany node.js:471:30
    112    0.4%    0.6%  LazyCompile: *OutgoingMessage._storeHeader _http_outgoing.js:191:50

 [Summary]:
   ticks  total  nonlib   name
   8343   31.2%   42.1%  JavaScript
  11496   43.0%   57.9%  C++
    150    0.6%    0.8%  GC
   6880   25.7%          Shared libraries

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
   5723   21.4%  /lib/x86_64-linux-gnu/libpthread-2.21.so
   3633   63.5%    LazyCompile: *Socket._writeGeneric net.js:623:42
   3633  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:256:23
   3633  100.0%        LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
   3633  100.0%          LazyCompile: *OutgoingMessage._send _http_outgoing.js:123:43
   3633  100.0%            LazyCompile: *OutgoingMessage.end _http_outgoing.js:527:41
    617   10.8%    LazyCompile: *createWriteReq net.js:698:24
    617  100.0%      LazyCompile: ~Socket._writeGeneric net.js:623:42
    612   99.2%        LazyCompile: *writeOrBuffer _stream_writable.js:256:23
    612  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
    612  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:123:43

   2467    9.2%  syscall

    885    3.3%  [vdso]

    704   79.5%    LazyCompile: *exports._unrefActive timers.js:601:32
    z
    610   86.6%      LazyCompile: *Socket._writeGeneric net.js:623:42
    610  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:256:23
    610  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
    610  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:123:43
     79   11.2%      LazyCompile: *unrefTimer net.js:176:51
     79  100.0%        LazyCompile: ~Socket._writeGeneric net.js:623:42
     79  100.0%          LazyCompile: *writeOrBuffer _stream_writable.js:256:23
     79  100.0%            LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:146:47
```
