test1.js on `master @ 0b43c08`.

```
wrk -t12 -c400 -d30s http://192.168.2.15:4242/
```

```
Running 30s test @ http://192.168.2.15:4242/
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    54.63ms   53.57ms   1.36s    97.50%
    Req/Sec   385.57    180.87     0.86k    62.21%
  139143 requests in 30.01s, 13.14MB read
  Socket errors: connect 155, read 0, write 0, timeout 2170
Requests/sec:   4636.87
Transfer/sec:    448.29KB
```

Relevant `--prof` data:

```
Statistical profiling result from test1-2-master.log, (16514 ticks, 210 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
    922    5.6%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     33    0.2%          /lib/x86_64-linux-gnu/libc-2.21.so
      8    0.0%          [vdso]
      7    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
    113    0.7%    0.7%  Stub: LoadICStub
     60    0.4%    0.4%  LazyCompile: *parserOnHeadersComplete _http_common.js:42:33
     55    0.3%    0.4%  LazyCompile: ~resOnFinish _http_server.js:490:25
     51    0.3%    0.3%  LazyCompile: *parserOnIncoming _http_server.js:454:28

     50    0.3%    0.3%  LazyCompile: *nextTick node.js:491:22

     40    0.2%    0.3%  KeyedLoadIC: A keyed load IC from the snapshot
     37    0.2%    0.2%  LazyCompile: *OutgoingMessage _http_outgoing.js:46:25

     35    0.2%    0.2%  LazyCompile: *_tickCallback node.js:349:27
     34    0.2%    0.2%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32

     30    0.2%    0.2%  LazyCompile: *IncomingMessage _http_incoming.js:20:25
     28    0.2%    0.2%  Stub: StringCompareStub
     28    0.2%    0.2%  LazyCompile: *parserOnMessageComplete _http_common.js:115:33
     27    0.2%    0.2%  LazyCompile: *OutgoingMessage._storeHeader _http_outgoing.js:190:50
     25    0.2%    0.2%  Stub: GrowArrayElementsStub
     25    0.2%    0.2%  LazyCompile: *emit events.js:118:44

 [C++]:
   ticks  total  nonlib   name
  12299   74.5%   79.1%  syscall
    140    0.8%    0.9%  v8::internal::LookupIterator::Next()
     87    0.5%    0.6%  http_parser_execute
     54    0.3%    0.3%  void v8::internal::String::WriteToFlat<unsigned char>(v8::internal::String*, unsigned char*, int, int)
     33    0.2%    0.2%  v8::internal::(anonymous namespace)::EnsureJSArrayWithWritableFastElements(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Arguments*, int) [clone .constprop.122]

 [Summary]:
   ticks  total  nonlib   name
   1423    8.6%    9.2%  JavaScript
  13911   84.2%   89.5%  C++
     26    0.2%    0.2%  GC
    970    5.9%          Shared libraries
    210    1.3%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    168   19.0%    1.0%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
    137   15.5%    0.8%  v8::internal::Builtin_ArrayPush(int, v8::internal::Object**, v8::internal::Isolate*)
    121   13.7%    0.7%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     69    7.8%    0.4%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     54    6.1%    0.3%  void v8::internal::String::WriteToFlat<unsigned char>(v8::internal::String*, unsigned char*, int, int)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  12299   74.5%  syscall

    922    5.6%  /lib/x86_64-linux-gnu/libpthread-2.21.so
    623   67.6%    LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
    623  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:255:23
    623  100.0%        LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
    623  100.0%          LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43
    623  100.0%            LazyCompile: *OutgoingMessage.end _http_outgoing.js:526:41
     84    9.1%    LazyCompile: *createWriteReq net.js:697:24
     84  100.0%      LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
     84  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:255:23
     84  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
     84  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43

```
