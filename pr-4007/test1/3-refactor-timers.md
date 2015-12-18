test1.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
wrk -t16 -c5000 -d60s http://192.168.2.15:4242/
```

```
Running 1m test @ http://192.168.2.15:4242/
  16 threads and 5000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.49s     4.95s    0.88m    96.14%
    Req/Sec   247.13     46.46   503.00     72.32%
  236211 requests in 1.00m, 22.30MB read
  Socket errors: connect 0, read 0, write 0, timeout 69918
Requests/sec:   3935.96
Transfer/sec:    380.53KB
```

Relevant `--prof` data:

```
Statistical profiling result from test1-3-refactor-timers.log, (31318 ticks, 392 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
   1902    6.1%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     81    0.3%          /lib/x86_64-linux-gnu/libc-2.21.so
     20    0.1%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21
      4    0.0%          [vdso]

 [JavaScript]:
   ticks  total  nonlib   name
    119    0.4%    0.4%  Stub: LoadICStub
    110    0.4%    0.4%  LazyCompile: *parserOnIncoming _http_server.js:454:28

    105    0.3%    0.4%  LazyCompile: *nextTick node.js:491:22

     99    0.3%    0.3%  LazyCompile: *parserOnHeadersComplete _http_common.js:42:33
     79    0.3%    0.3%  KeyedLoadIC: A keyed load IC from the snapshot
     74    0.2%    0.3%  LazyCompile: ~resOnFinish _http_server.js:490:25

     70    0.2%    0.2%  LazyCompile: ~insert timers.js:79:16

     69    0.2%    0.2%  LazyCompile: *IncomingMessage _http_incoming.js:20:25
     65    0.2%    0.2%  LazyCompile: *emit events.js:118:44

      ...

     34    0.1%    0.1%  LazyCompile: *remove internal/linkedlist.js:28:16
      ...
     10    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16
      ...
      4    0.0%    0.0%  LazyCompile: *insert timers.js:79:16
      ...
      2    0.0%    0.0%  LazyCompile: *isEmpty internal/linkedlist.js:54:17
      ...
      2    0.0%    0.0%  LazyCompile: *append internal/linkedlist.js:44:16

 [C++]:
   ticks  total  nonlib   name
  22483   71.8%   76.7%  syscall
    213    0.7%    0.7%  v8::internal::LookupIterator::Next()
    151    0.5%    0.5%  http_parser_execute
    104    0.3%    0.4%  void v8::internal::String::WriteToFlat<unsigned char>(v8::internal::String*, unsigned char*, int, int)
     63    0.2%    0.2%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
     61    0.2%    0.2%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
     52    0.2%    0.2%  v8::internal::(anonymous namespace)::EnsureJSArrayWithWritableFastElements(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Arguments*, int) [clone .constprop.122]
     49    0.2%    0.2%  int v8::internal::BinarySearch<(v8::internal::SearchMode)0, v8::internal::TransitionArray>(v8::internal::TransitionArray*, v8::internal::Name*, int, int, int, int*)

 [Summary]:
   ticks  total  nonlib   name
   2956    9.4%   10.1%  JavaScript
  25962   82.9%   88.6%  C++
    220    0.7%    0.8%  GC
   2007    6.4%          Shared libraries
    392    1.3%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    264   14.3%    0.8%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
    257   13.9%    0.8%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
    226   12.2%    0.7%  v8::internal::Builtin_ArrayPush(int, v8::internal::Object**, v8::internal::Isolate*)
    122    6.6%    0.4%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
    122    6.6%    0.4%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
    109    5.9%    0.3%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  22483   71.8%  syscall

   1902    6.1%  /lib/x86_64-linux-gnu/libpthread-2.21.so
   1278   67.2%    LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
   1278  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:255:23
   1278  100.0%        LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
   1278  100.0%          LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43
   1278  100.0%            LazyCompile: *OutgoingMessage.end _http_outgoing.js:526:41
    134    7.0%    LazyCompile: *createWriteReq net.js:697:24
    134  100.0%      LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
    134  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:255:23
    134  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
    134  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43

```
