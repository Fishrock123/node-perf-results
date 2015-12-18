test1.js on `master @ 0b43c08`.

```
wrk -t16 -c800 -d45s http://192.168.2.15:4242/
```

```
Running 45s test @ http://192.168.2.15:4242/
  16 threads and 800 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   110.75ms  781.86ms  35.55s    99.48%
    Req/Sec   281.47    130.87   649.00     61.06%
  205344 requests in 45.02s, 19.39MB read
  Socket errors: connect 0, read 0, write 0, timeout 10270
Requests/sec:   4561.55
Transfer/sec:    441.01KB
```

Relevant `--prof` data:

```
Statistical profiling result from test1-4-master.log, (24607 ticks, 312 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
   1427    5.8%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     48    0.2%          /lib/x86_64-linux-gnu/libc-2.21.so
     14    0.1%          [vdso]
      6    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
    128    0.5%    0.6%  Stub: LoadICStub
     80    0.3%    0.3%  LazyCompile: *parserOnIncoming _http_server.js:454:28

     69    0.3%    0.3%  LazyCompile: *nextTick node.js:491:22
     
     66    0.3%    0.3%  LazyCompile: ~resOnFinish _http_server.js:490:25
     55    0.2%    0.2%  LazyCompile: *parserOnHeadersComplete _http_common.js:42:33
     53    0.2%    0.2%  LazyCompile: *emit events.js:118:44

     45    0.2%    0.2%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
     45    0.2%    0.2%  LazyCompile: *_tickCallback node.js:349:27

      ...

      2    0.0%    0.0%  LazyCompile: *unrefTimeout timers.js:532:22
      ...
      1    0.0%    0.0%  LazyCompile: ~unrefTimeout timers.js:532:22
      1    0.0%    0.0%  LazyCompile: ~tickDone node.js:312:22
      1    0.0%    0.0%  LazyCompile: ~exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32

 [C++]:
   ticks  total  nonlib   name
  18556   75.4%   80.3%  syscall
    151    0.6%    0.7%  v8::internal::LookupIterator::Next()
    125    0.5%    0.5%  http_parser_execute
     85    0.3%    0.4%  void v8::internal::String::WriteToFlat<unsigned char>(v8::internal::String*, unsigned char*, int, int)
     41    0.2%    0.2%  v8::internal::LookupIterator::LookupIterator(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>, v8::internal::LookupIterator::Configuration)

 [Summary]:
   ticks  total  nonlib   name
   1942    7.9%    8.4%  JavaScript
  20858   84.8%   90.2%  C++
     37    0.2%    0.2%  GC
   1495    6.1%          Shared libraries
    312    1.3%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    224   17.7%    0.9%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
    188   14.9%    0.8%  v8::internal::Builtin_ArrayPush(int, v8::internal::Object**, v8::internal::Isolate*)
    153   12.1%    0.6%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     88    7.0%    0.4%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  18556   75.4%  syscall

   1427    5.8%  /lib/x86_64-linux-gnu/libpthread-2.21.so
   1012   70.9%    LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
   1012  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:255:23
   1012  100.0%        LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
   1012  100.0%          LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43
   1012  100.0%            LazyCompile: *OutgoingMessage.end _http_outgoing.js:526:41
    113    7.9%    LazyCompile: *createWriteReq net.js:697:24
    113  100.0%      LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
    113  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:255:23
    113  100.0%          LazyCompile: *OutgoingMessage._writeRaw _http_outgoing.js:145:47
    113  100.0%            LazyCompile: *OutgoingMessage._send _http_outgoing.js:122:43

```
