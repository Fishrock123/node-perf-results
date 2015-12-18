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
Statistical profiling result from test1-3-master.log, (30016 ticks, 348 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
   1753    5.8%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     82    0.3%          /lib/x86_64-linux-gnu/libc-2.21.so
     15    0.0%          [vdso]
      5    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
    174    0.6%    0.6%  Stub: LoadICStub
     93    0.3%    0.3%  LazyCompile: *parserOnIncoming _http_server.js:454:28

     88    0.3%    0.3%  LazyCompile: *nextTick node.js:491:22

     85    0.3%    0.3%  KeyedLoadIC: A keyed load IC from the snapshot
     80    0.3%    0.3%  LazyCompile: *parserOnHeadersComplete _http_common.js:42:33
     73    0.2%    0.3%  LazyCompile: *parserOnMessageComplete _http_common.js:115:33
     71    0.2%    0.3%  LazyCompile: ~resOnFinish _http_server.js:490:25
     67    0.2%    0.2%  LazyCompile: *_tickCallback node.js:349:27
     66    0.2%    0.2%  LazyCompile: *addListener events.js:192:58
     55    0.2%    0.2%  LazyCompile: *ReadableState _stream_readable.js:15:23
     54    0.2%    0.2%  LazyCompile: *emit events.js:118:44

     51    0.2%    0.2%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32

      ...

     34    0.1%    0.1%  LazyCompile: nextTickCallbackWith2Args node.js:452:39
     34    0.1%    0.1%  LazyCompile: *unrefTimeout timers.js:532:22

      ...

     23    0.1%    0.1%  LazyCompile: nextTickCallbackWithManyArgs node.js:474:42
      ...
      1    0.0%    0.0%  LazyCompile: ~remove internal/linkedlist.js:28:16

 [C++]:
   ticks  total  nonlib   name
  21831   72.7%   77.5%  syscall
    218    0.7%    0.8%  v8::internal::LookupIterator::Next()
    144    0.5%    0.5%  http_parser_execute
    104    0.3%    0.4%  void v8::internal::String::WriteToFlat<unsigned char>(v8::internal::String*, unsigned char*, int, int)
     61    0.2%    0.2%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
     59    0.2%    0.2%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
     51    0.2%    0.2%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     49    0.2%    0.2%  int v8::internal::BinarySearch<(v8::internal::SearchMode)0, v8::internal::TransitionArray>(v8::internal::TransitionArray*, v8::internal::Name*, int, int, int, int*)
     45    0.1%    0.2%  uv__io_poll

 [Summary]:
   ticks  total  nonlib   name
   2784    9.3%    9.9%  JavaScript
  25029   83.4%   88.9%  C++
    217    0.7%    0.8%  GC
   1855    6.2%          Shared libraries
    348    1.2%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    257   15.0%    0.9%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
    237   13.9%    0.8%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
    210   12.3%    0.7%  v8::internal::Builtin_ArrayPush(int, v8::internal::Object**, v8::internal::Isolate*)
    112    6.5%    0.4%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
    108    6.3%    0.4%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  21831   72.7%  syscall

   1753    5.8%  /lib/x86_64-linux-gnu/libpthread-2.21.so
   1238   70.6%    LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
   1238  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:255:23
   1238  100.0%        LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
   1238  100.0%          LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43
   1238  100.0%            LazyCompile: *OutgoingMessage.end _http_outgoing.js:526:41
    127    7.2%    LazyCompile: *createWriteReq net.js:697:24
    127  100.0%      LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
    127  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:255:23
    127  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
    127  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43

```
