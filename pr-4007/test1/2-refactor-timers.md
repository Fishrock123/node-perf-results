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
Statistical profiling result from test1-2-refactor-timers.log, (15732 ticks, 233 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
    922    5.9%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     35    0.2%          /lib/x86_64-linux-gnu/libc-2.21.so
      5    0.0%          [vdso]
      1    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
     66    0.4%    0.4%  Stub: LoadICStub

     44    0.3%    0.3%  LazyCompile: *nextTick node.js:491:22
     37    0.2%    0.3%  LazyCompile: ~insert timers.js:79:16

     37    0.2%    0.3%  LazyCompile: *parserOnIncoming _http_server.js:454:28
     35    0.2%    0.2%  LazyCompile: ~resOnFinish _http_server.js:490:25
     35    0.2%    0.2%  LazyCompile: *parserOnHeadersComplete _http_common.js:42:33
     35    0.2%    0.2%  KeyedLoadIC: A keyed load IC from the snapshot
     31    0.2%    0.2%  LazyCompile: *emit events.js:118:44

      ...

      4    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16
      ...
      2    0.0%    0.0%  LazyCompile: ~remove internal/linkedlist.js:28:16
      ...
      1    0.0%    0.0%  LazyCompile: *unrefTimer net.js:175:51
      1    0.0%    0.0%  LazyCompile: *isEmpty internal/linkedlist.js:54:17

 [C++]:
   ticks  total  nonlib   name
  11654   74.1%   78.9%  syscall
    103    0.7%    0.7%  v8::internal::LookupIterator::Next()
     74    0.5%    0.5%  http_parser_execute
     68    0.4%    0.5%  void v8::internal::String::WriteToFlat<unsigned char>(v8::internal::String*, unsigned char*, int, int)
     27    0.2%    0.2%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     26    0.2%    0.2%  v8::internal::Context::native_context()

 [Summary]:
   ticks  total  nonlib   name
   1378    8.8%    9.3%  JavaScript
  13158   83.6%   89.1%  C++
     24    0.2%    0.2%  GC
    963    6.1%          Shared libraries
    233    1.5%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    148   17.1%    0.9%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
    112   12.9%    0.7%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
    107   12.4%    0.7%  v8::internal::Builtin_ArrayPush(int, v8::internal::Object**, v8::internal::Isolate*)
     68    7.9%    0.4%  void v8::internal::String::WriteToFlat<unsigned char>(v8::internal::String*, unsigned char*, int, int)
     51    5.9%    0.3%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
     46    5.3%    0.3%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  11654   74.1%  syscall

    922    5.9%  /lib/x86_64-linux-gnu/libpthread-2.21.so
    616   66.8%    LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
    616  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:255:23
    616  100.0%        LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
    616  100.0%          LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43
    616  100.0%            LazyCompile: *OutgoingMessage.end _http_outgoing.js:526:41
     87    9.4%    LazyCompile: *createWriteReq net.js:697:24
     87  100.0%      LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
     87  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:255:23
     87  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
     87  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43

```
