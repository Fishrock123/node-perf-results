test1.js on `master @ 0b43c08`.

```
wrk -t12 -c10000 -d30s http://192.168.2.15:4242/
```

```
Running 30s test @ http://192.168.2.15:4242/
  12 threads and 10000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us     nan%
    Req/Sec     0.00      0.00     0.00       nan%
  0 requests in 30.14s, 0.00B read
  Socket errors: connect 1819, read 16048, write 0, timeout 126987
Requests/sec:      0.00
Transfer/sec:       0.00B
```

Relevant `--prof` data:

```
Statistical profiling result from test2-2-master.log, (21260 ticks, 100 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     91    0.4%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     44    0.2%          /lib/x86_64-linux-gnu/libc-2.21.so
      4    0.0%          [vdso]

 [JavaScript]:
   ticks  total  nonlib   name

   3286   15.5%   15.6%  LazyCompile: *unrefTimeout timers.js:532:22
   
     29    0.1%    0.1%  LazyCompile: *emit events.js:118:44
     27    0.1%    0.1%  Stub: LoadICStub
     20    0.1%    0.1%  KeyedLoadIC: A keyed load IC from the snapshot
     15    0.1%    0.1%  Builtin: JSConstructStubGeneric
     13    0.1%    0.1%  LazyCompile: *ReadableState _stream_readable.js:15:23

     12    0.1%    0.1%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32

     11    0.1%    0.1%  LazyCompile: ~parserOnIncoming _http_server.js:454:28
     11    0.1%    0.1%  LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._destroy net.js:436:37
     10    0.0%    0.0%  LazyCompile: ~serverSocketCloseListener _http_server.js:286:37
     10    0.0%    0.0%  LazyCompile: *connectionListener _http_server.js:261:28
     10    0.0%    0.0%  Builtin: ArgumentsAdaptorTrampoline
      9    0.0%    0.0%  LazyCompile: *IncomingMessage _http_incoming.js:20:25

      ...

      2    0.0%    0.0%  LazyCompile: ~remove internal/linkedlist.js:28:16
      ...
      1    0.0%    0.0%  LazyCompile: ~exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
      ...
      1    0.0%    0.0%  LazyCompile: *exports.unenroll timers.js:138:45

 [C++]:
   ticks  total  nonlib   name
  15825   74.4%   74.9%  syscall
    206    1.0%    1.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
     54    0.3%    0.3%  v8::internal::LookupIterator::Next()
     44    0.2%    0.2%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
     38    0.2%    0.2%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
     31    0.1%    0.1%  node::TCPWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
     28    0.1%    0.1%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
     28    0.1%    0.1%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)

 [Summary]:
   ticks  total  nonlib   name
   3847   18.1%   18.2%  JavaScript
  17174   80.8%   81.3%  C++
    226    1.1%    1.1%  GC
    139    0.7%          Shared libraries
    100    0.5%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    232   34.4%    1.1%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
    105   15.6%    0.5%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  15825   74.4%  syscall

   3286   15.5%  LazyCompile: *unrefTimeout timers.js:532:22

```
