test1.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
wrk -t12 -c10000 -d30s http://192.168.2.15:4242/
```

```
Running 30s test @ http://192.168.2.15:4242/
  12 threads and 10000 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us     nan%
    Req/Sec     0.00      0.00     0.00       nan%
  0 requests in 30.13s, 0.00B read
  Socket errors: connect 1819, read 15428, write 0, timeout 127931
Requests/sec:      0.00
Transfer/sec:       0.00B
```

Relevant `--prof` data:

```
Statistical profiling result from test2-2-refactor-timers.log, (26133 ticks, 162 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
    132    0.5%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     82    0.3%          /lib/x86_64-linux-gnu/libc-2.21.so
      8    0.0%          [vdso]
      2    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
     36    0.1%    0.1%  LazyCompile: *listOnTimeout timers.js:109:23

     30    0.1%    0.1%  Stub: LoadICStub
     27    0.1%    0.1%  LazyCompile: *emit events.js:118:44
     26    0.1%    0.1%  KeyedLoadIC: A keyed load IC from the snapshot

     24    0.1%    0.1%  LazyCompile: ~insert timers.js:79:16

     18    0.1%    0.1%  Stub: JSEntryStub
     18    0.1%    0.1%  LazyCompile: *Socket net.js:109:16
     17    0.1%    0.1%  Builtin: JSEntryTrampoline
     12    0.0%    0.0%  LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._destroy net.js:436:37
     12    0.0%    0.0%  LazyCompile: *ReadableState _stream_readable.js:15:23
     11    0.0%    0.0%  Stub: ToBooleanStub
     11    0.0%    0.0%  LazyCompile: ~parserOnIncoming _http_server.js:454:28

     11    0.0%    0.0%  LazyCompile: *remove internal/linkedlist.js:28:16

      ...

      5    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16

      ...

      1    0.0%    0.0%  LazyCompile: ~nextTick node.js:491:22
      1    0.0%    0.0%  LazyCompile: ~listOnTimeout timers.js:109:23
      ...
      1    0.0%    0.0%  LazyCompile: *isEmpty internal/linkedlist.js:54:17
      1    0.0%    0.0%  LazyCompile: *init internal/linkedlist.js:3:14
      1    0.0%    0.0%  LazyCompile: *exports.unenroll timers.js:224:45

 [C++]:
   ticks  total  nonlib   name
  23121   88.5%   89.2%  syscall
    172    0.7%    0.7%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
     91    0.3%    0.4%  v8::internal::LookupIterator::Next()
     67    0.3%    0.3%  write
     59    0.2%    0.2%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
     46    0.2%    0.2%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)

 [Summary]:
   ticks  total  nonlib   name
    713    2.7%    2.8%  JavaScript
  25034   95.8%   96.6%  C++
    231    0.9%    0.9%  GC
    224    0.9%          Shared libraries
    162    0.6%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    261   24.8%    1.0%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
    210   19.9%    0.8%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
    115   10.9%    0.4%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  23121   88.5%  syscall

```
