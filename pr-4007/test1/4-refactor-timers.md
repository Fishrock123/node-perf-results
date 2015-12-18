test1.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
wrk -t16 -c800 -d45s http://192.168.2.15:4242/
```

```
Running 45s test @ http://192.168.2.15:4242/
  16 threads and 800 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    90.05ms  767.61ms  32.38s    99.74%
    Req/Sec   301.21    112.41   603.00     61.45%
  210053 requests in 45.00s, 19.83MB read
  Socket errors: connect 0, read 0, write 0, timeout 10259
Requests/sec:   4667.63
Transfer/sec:    451.27KB
```

Relevant `--prof` data:

```
Statistical profiling result from test1-4-refactor-timers.log, (24384 ticks, 380 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
   1479    6.1%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     36    0.1%          /lib/x86_64-linux-gnu/libc-2.21.so
      8    0.0%          [vdso]
      7    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
    109    0.4%    0.5%  Stub: LoadICStub
     75    0.3%    0.3%  LazyCompile: *parserOnHeadersComplete _http_common.js:42:33

     73    0.3%    0.3%  LazyCompile: *nextTick node.js:491:22

     58    0.2%    0.3%  LazyCompile: ~resOnFinish _http_server.js:490:25

     57    0.2%    0.2%  LazyCompile: ~insert timers.js:79:16

     53    0.2%    0.2%  KeyedLoadIC: A keyed load IC from the snapshot
     52    0.2%    0.2%  LazyCompile: *_tickCallback node.js:349:27
     51    0.2%    0.2%  LazyCompile: *parserOnIncoming _http_server.js:454:28
     50    0.2%    0.2%  LazyCompile: *emit events.js:118:44

      ...

     10    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16
     10    0.0%    0.0%  LazyCompile: *insert timers.js:79:16
      ...
      7    0.0%    0.0%  LazyCompile: *remove internal/linkedlist.js:28:16
      ...
      3    0.0%    0.0%  LazyCompile: *append internal/linkedlist.js:44:16
      ...
      2    0.0%    0.0%  LazyCompile: ~unrefTimer net.js:175:51
      2    0.0%    0.0%  LazyCompile: ~remove internal/linkedlist.js:28:16

 [C++]:
   ticks  total  nonlib   name
  18005   73.8%   78.8%  syscall
    190    0.8%    0.8%  v8::internal::LookupIterator::Next()
    104    0.4%    0.5%  http_parser_execute
     88    0.4%    0.4%  void v8::internal::String::WriteToFlat<unsigned char>(v8::internal::String*, unsigned char*, int, int)
     38    0.2%    0.2%  v8::internal::LookupIterator::LookupIterator(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>, v8::internal::LookupIterator::Configuration)
     33    0.1%    0.1%  int v8::internal::BinarySearch<(v8::internal::SearchMode)0, v8::internal::TransitionArray>(v8::internal::TransitionArray*, v8::internal::Name*, int, int, int, int*)

 [Summary]:
   ticks  total  nonlib   name
   2086    8.6%    9.1%  JavaScript
  20388   83.6%   89.2%  C++
     34    0.1%    0.1%  GC
   1530    6.3%          Shared libraries
    380    1.6%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    223   16.6%    0.9%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
    190   14.1%    0.8%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
    177   13.2%    0.7%  v8::internal::Builtin_ArrayPush(int, v8::internal::Object**, v8::internal::Isolate*)
     92    6.8%    0.4%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  18005   73.8%  syscall

   1479    6.1%  /lib/x86_64-linux-gnu/libpthread-2.21.so
   1007   68.1%    LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
   1007  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:255:23
   1007  100.0%        LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
   1007  100.0%          LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43
   1007  100.0%            LazyCompile: *OutgoingMessage.end _http_outgoing.js:526:41
    119    8.0%    LazyCompile: *createWriteReq net.js:697:24
    119  100.0%      LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
    119  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:255:23
    119  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
    119  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43

```
