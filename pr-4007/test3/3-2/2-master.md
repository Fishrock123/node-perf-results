test3.js on `master @ 0b43c08`.

```
node --prof test3.js
```

Relevant `--prof` data:

```
Statistical profiling result from test3-2-master.log, (83201 ticks, 97 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
    903    1.1%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     10    0.0%          /lib/x86_64-linux-gnu/libc-2.21.so
      9    0.0%          [vdso]

 [JavaScript]:
   ticks  total  nonlib   name
  65684   78.9%   79.8%  LazyCompile: *unrefTimeout timers.js:532:22
     29    0.0%    0.0%  LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:14:15
     27    0.0%    0.0%  Stub: LoadICStub
     24    0.0%    0.0%  LazyCompile: *nextTick node.js:491:22
     23    0.0%    0.0%  LazyCompile: nextTickCallbackWithManyArgs node.js:474:42
     22    0.0%    0.0%  Stub: GrowArrayElementsStub
     20    0.0%    0.0%  LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
     16    0.0%    0.0%  Stub: FastNewContextStub
     15    0.0%    0.0%  LazyCompile: *WriteStream.clearLine tty.js:92:43
     12    0.0%    0.0%  LazyCompile: *<anonymous> node.js:645:48
     12    0.0%    0.0%  Handler: An IC handler from the snapshot {5}
     12    0.0%    0.0%  Handler: An IC handler from the snapshot {3}
     11    0.0%    0.0%  Stub: InstanceOfStub
     11    0.0%    0.0%  LazyCompile: _runOnTimeout timers.js:522:23
     11    0.0%    0.0%  LazyCompile: *_tickCallback node.js:349:27
     11    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot {1}
     10    0.0%    0.0%  LazyCompile: APPLY_PREPARE native runtime.js:16:23
      9    0.0%    0.0%  Handler: An IC handler from the snapshot {2}
      8    0.0%    0.0%  Stub: RecordWriteStub {3}
      8    0.0%    0.0%  Stub: LoadConstantStub {2}
      8    0.0%    0.0%  LazyCompile: *writeOrBuffer _stream_writable.js:255:23
      8    0.0%    0.0%  Handler: write
      7    0.0%    0.0%  Stub: CEntryStub
      7    0.0%    0.0%  LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket.write net.js:615:34
      7    0.0%    0.0%  Builtin: FunctionApply
      6    0.0%    0.0%  Stub: CallFunctionStub_Args2
      6    0.0%    0.0%  LazyCompile: ~emitPendingUnhandledRejections node.js:509:44
      6    0.0%    0.0%  Handler: handle {1}
      6    0.0%    0.0%  Handler: callback
      6    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      6    0.0%    0.0%  Builtin: JSConstructStubApi
      5    0.0%    0.0%  LazyCompile: *onwrite _stream_writable.js:314:17
      5    0.0%    0.0%  Handler: process
      5    0.0%    0.0%  Builtin: CallFunction
      4    0.0%    0.0%  Stub: ToBooleanStub
      4    0.0%    0.0%  Stub: LoadConstantStub {3}
      4    0.0%    0.0%  Stub: JSEntryStub
      4    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot
      4    0.0%    0.0%  Handler: oncomplete
      3    0.0%    0.0%  Stub: StoreTransitionStub
      3    0.0%    0.0%  Stub: CallConstructStub {1}
      3    0.0%    0.0%  LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
      3    0.0%    0.0%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
      3    0.0%    0.0%  Handler: An IC handler from the snapshot {6}
      3    0.0%    0.0%  Builtin: JSEntryTrampoline
      3    0.0%    0.0%  Builtin: Call
      2    0.0%    0.0%  Stub: RecordWriteStub {1}
      2    0.0%    0.0%  Stub: LoadConstantStub {1}
      2    0.0%    0.0%  Stub: CompareICStub {2}
      2    0.0%    0.0%  LazyCompile: *Writable.write _stream_writable.js:186:36
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {7}
      1    0.0%    0.0%  Stub: StoreFieldStub
      1    0.0%    0.0%  Stub: RecordWriteStub {6}
      1    0.0%    0.0%  Stub: RecordWriteStub {5}
      1    0.0%    0.0%  Stub: RecordWriteStub {4}
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub
      1    0.0%    0.0%  Stub: LoadConstantStub
      1    0.0%    0.0%  Stub: FastNewClosureStub
      1    0.0%    0.0%  Stub: CompareICStub {1}
      1    0.0%    0.0%  Stub: CompareICStub
      1    0.0%    0.0%  Stub: CallFunctionStub_Args5
      1    0.0%    0.0%  Stub: CallConstructStub
      1    0.0%    0.0%  Stub: CallApiAccessorStub {1}
      1    0.0%    0.0%  Stub: CallApiAccessorStub
      1    0.0%    0.0%  LazyCompile: ~unrefTimer net.js:175:51
      1    0.0%    0.0%  LazyCompile: ~require internal/module.js:11:19
      1    0.0%    0.0%  LazyCompile: ~isFinite native v8natives.js:34:24
      1    0.0%    0.0%  LazyCompile: *WritableState.onwrite _stream_writable.js:88:26
      1    0.0%    0.0%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:1:11
      1    0.0%    0.0%  Handler: start
      1    0.0%    0.0%  Handler: push
      1    0.0%    0.0%  Handler: clearLine
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {4}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot
      1    0.0%    0.0%  Builtin: ArgumentsAdaptorTrampoline

 [C++]:
   ticks  total  nonlib   name
  15224   18.3%   18.5%  syscall
     52    0.1%    0.1%  void node::StreamBase::JSMethod<node::StreamWrap, &(int node::StreamBase::WriteString<(node::encoding)1>(v8::FunctionCallbackInfo<v8::Value> const&))>(v8::FunctionCallbackInfo<v8::Value> const&)
     42    0.1%    0.1%  v8::internal::LookupIterator::Next()
     23    0.0%    0.0%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     18    0.0%    0.0%  v8::internal::Runtime_GetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     18    0.0%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     17    0.0%    0.0%  v8::internal::Compiler::GetLazyCode(v8::internal::Handle<v8::internal::JSFunction>)
     15    0.0%    0.0%  node::TimerWrap::OnTimeout(uv_timer_s*)
     12    0.0%    0.0%  node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*)
     11    0.0%    0.0%  node::TimerWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&)

 [Summary]:
   ticks  total  nonlib   name
  66139   79.5%   80.4%  JavaScript
  16043   19.3%   19.5%  C++
     48    0.1%    0.1%  GC
    922    1.1%          Shared libraries
     97    0.1%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     79   14.2%    0.1%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
     49    8.8%    0.1%  v8::internal::Builtin_ArrayPush(int, v8::internal::Object**, v8::internal::Isolate*)
     48    8.6%    0.1%  v8::internal::Runtime_GetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     41    7.3%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     37    6.6%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     26    4.7%    0.0%  v8::internal::LookupIterator::Next()
     19    3.4%    0.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  65684   78.9%  LazyCompile: *unrefTimeout timers.js:532:22

  15224   18.3%  syscall

```
