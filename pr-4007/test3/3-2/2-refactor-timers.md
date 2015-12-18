test3.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
node --prof test3.js
```

Relevant `--prof` data:

```
Statistical profiling result from test3-2-refactor-timers.log, (82057 ticks, 285 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
   1840    2.2%          /lib/x86_64-linux-gnu/libpthread-2.21.so
     90    0.1%          /lib/x86_64-linux-gnu/libc-2.21.so
     10    0.0%          [vdso]
      2    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
     73    0.1%    0.1%  LazyCompile: *listOnTimeout timers.js:109:23
     64    0.1%    0.1%  LazyCompile: *nextTick node.js:491:22
     46    0.1%    0.1%  LazyCompile: ~insert timers.js:79:16
     45    0.1%    0.1%  LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:14:15
     38    0.0%    0.0%  Stub: FastNewContextStub
     36    0.0%    0.0%  LazyCompile: _runOnTimeout timers.js:176:23
     36    0.0%    0.0%  LazyCompile: *WriteStream.clearLine tty.js:92:43
     31    0.0%    0.0%  Stub: GrowArrayElementsStub
     31    0.0%    0.0%  LazyCompile: *writeOrBuffer _stream_writable.js:255:23
     26    0.0%    0.0%  LazyCompile: *_tickCallback node.js:349:27
     25    0.0%    0.0%  LazyCompile: nextTickCallbackWithManyArgs node.js:474:42
     25    0.0%    0.0%  Function: ~<anonymous> events.js:1:11
     23    0.0%    0.0%  LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
     23    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot {2}
     22    0.0%    0.0%  Stub: JSEntryStub
     22    0.0%    0.0%  LazyCompile: APPLY_PREPARE native runtime.js:16:23
     22    0.0%    0.0%  LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket.write net.js:615:34
     19    0.0%    0.0%  Handler: An IC handler from the snapshot {3}
     16    0.0%    0.0%  Handler: handle {4}
     15    0.0%    0.0%  LazyCompile: *Writable.write _stream_writable.js:186:36
     13    0.0%    0.0%  Stub: InstanceOfStub
     13    0.0%    0.0%  LazyCompile: ~emitPendingUnhandledRejections node.js:509:44
     13    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot
     13    0.0%    0.0%  Handler: An IC handler from the snapshot {7}
     13    0.0%    0.0%  Builtin: JSConstructStubApi
     13    0.0%    0.0%  Builtin: ArgumentsAdaptorTrampoline
     12    0.0%    0.0%  Stub: CallApiAccessorStub {1}
     12    0.0%    0.0%  Stub: CEntryStub
     12    0.0%    0.0%  Handler: An IC handler from the snapshot {4}
     10    0.0%    0.0%  Stub: LoadConstantStub {2}
     10    0.0%    0.0%  Handler: process
     10    0.0%    0.0%  Builtin: JSEntryTrampoline
      9    0.0%    0.0%  Stub: CallFunctionStub_Args5
      9    0.0%    0.0%  Handler: callback
      8    0.0%    0.0%  LazyCompile: *<anonymous> node.js:645:48
      7    0.0%    0.0%  Stub: CallConstructStub
      7    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16
      7    0.0%    0.0%  LazyCompile: *onwrite _stream_writable.js:314:17
      7    0.0%    0.0%  Handler: write
      7    0.0%    0.0%  Handler: oncomplete {2}
      6    0.0%    0.0%  Stub: RecordWriteStub
      6    0.0%    0.0%  Stub: LoadICStub
      6    0.0%    0.0%  LazyCompile: *afterWrite _stream_writable.js:342:20
      6    0.0%    0.0%  Handler: An IC handler from the snapshot {5}
      6    0.0%    0.0%  Builtin: FunctionApply
      6    0.0%    0.0%  Builtin: CallFunction
      6    0.0%    0.0%  Builtin: Call
      5    0.0%    0.0%  Stub: LoadConstantStub {3}
      5    0.0%    0.0%  Stub: FastNewClosureStub
      5    0.0%    0.0%  Stub: CompareICStub {2}
      5    0.0%    0.0%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:1:11
      5    0.0%    0.0%  Handler: An IC handler from the snapshot {8}
      4    0.0%    0.0%  Stub: ToBooleanStub {1}
      4    0.0%    0.0%  Stub: StoreFieldStub {1}
      4    0.0%    0.0%  LazyCompile: ~Module._compile module.js:367:37
      4    0.0%    0.0%  LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
      4    0.0%    0.0%  Handler: handle {3}
      4    0.0%    0.0%  Handler: handle
      4    0.0%    0.0%  Handler: clearLine
      4    0.0%    0.0%  Handler: An IC handler from the snapshot
      3    0.0%    0.0%  Stub: RecordWriteStub {6}
      3    0.0%    0.0%  Stub: CompareICStub {3}
      3    0.0%    0.0%  Stub: CompareICStub {1}
      3    0.0%    0.0%  Stub: CallApiAccessorStub
      3    0.0%    0.0%  Handler: symbol("nonexistent_symbol" hash 3f0b4476)
      3    0.0%    0.0%  Handler: apply
      3    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      3    0.0%    0.0%  Builtin: ArrayPush
      2    0.0%    0.0%  Stub: ToBooleanStub
      2    0.0%    0.0%  Stub: RecordWriteStub {7}
      2    0.0%    0.0%  Stub: RecordWriteStub {4}
      2    0.0%    0.0%  Stub: RecordWriteStub {3}
      2    0.0%    0.0%  Stub: LoadConstantStub
      2    0.0%    0.0%  Stub: CompareICStub
      2    0.0%    0.0%  LazyCompile: ~nextTick node.js:491:22
      2    0.0%    0.0%  LazyCompile: ~listOnTimeout timers.js:109:23
      2    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot {1}
      2    0.0%    0.0%  Handler: handle {2}
      2    0.0%    0.0%  Handler: _unrefTimer
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {6}
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {11}
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {10}
      1    0.0%    0.0%  Stub: ToBooleanStub(Null,SpecObject)
      1    0.0%    0.0%  Stub: StoreTransitionStub {1}
      1    0.0%    0.0%  Stub: StoreFieldStub {2}
      1    0.0%    0.0%  Stub: StoreFieldStub
      1    0.0%    0.0%  Stub: RecordWriteStub {5}
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub {1}
      1    0.0%    0.0%  Stub: LoadFastElementStub
      1    0.0%    0.0%  Stub: LoadConstantStub {1}
      1    0.0%    0.0%  Stub: BinaryOpICStub
      1    0.0%    0.0%  Stub: ArgumentsAccessStub
      1    0.0%    0.0%  LazyCompile: ~unrefTimer net.js:175:51
      1    0.0%    0.0%  LazyCompile: ~onwrite _stream_writable.js:314:17
      1    0.0%    0.0%  LazyCompile: ~DefineObjectProperty native v8natives.js:462:30
      1    0.0%    0.0%  LazyCompile: *isFinite native v8natives.js:34:24
      1    0.0%    0.0%  LazyCompile: *init internal/linkedlist.js:3:14
      1    0.0%    0.0%  LazyCompile: *createWriteReq net.js:697:24
      1    0.0%    0.0%  LazyCompile: *WritableState.onwrite _stream_writable.js:88:26
      1    0.0%    0.0%  KeyedStoreIC: A keyed store IC from the snapshot
      1    0.0%    0.0%  Handler: start
      1    0.0%    0.0%  Handler: oncomplete {1}
      1    0.0%    0.0%  Handler: oncomplete
      1    0.0%    0.0%  Handler: async
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {9}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {2}
      1    0.0%    0.0%  Function: ~<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:1:11
      1    0.0%    0.0%  Builtin: HandleApiCall

 [C++]:
   ticks  total  nonlib   name
  71381   87.0%   89.1%  syscall
   4985    6.1%    6.2%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
    176    0.2%    0.2%  uv_timer_stop
    135    0.2%    0.2%  write
    133    0.2%    0.2%  void node::StreamBase::JSMethod<node::StreamWrap, &(int node::StreamBase::WriteString<(node::encoding)1>(v8::FunctionCallbackInfo<v8::Value> const&))>(v8::FunctionCallbackInfo<v8::Value> const&)
     77    0.1%    0.1%  v8::internal::LookupIterator::Next()
     70    0.1%    0.1%  __lll_lock_elision
     43    0.1%    0.1%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)

 [Summary]:
   ticks  total  nonlib   name
   1021    1.2%    1.3%  JavaScript
  78809   96.0%   98.4%  C++
    114    0.1%    0.1%  GC
   1942    2.4%          Shared libraries
    285    0.3%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
   5030   76.0%    6.1%  v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
    494    7.5%    0.6%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
    169    2.6%    0.2%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
    110    1.7%    0.1%  v8::internal::Builtin_ArrayPush(int, v8::internal::Object**, v8::internal::Isolate*)
     98    1.5%    0.1%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     96    1.4%    0.1%  v8::internal::Runtime_GetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     57    0.9%    0.1%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     51    0.8%    0.1%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     40    0.6%    0.0%  v8::internal::LookupIterator::Next()
     28    0.4%    0.0%  v8::internal::Runtime_Compare(int, v8::internal::Object**, v8::internal::Isolate*)
     20    0.3%    0.0%  void node::StreamBase::JSMethod<node::StreamWrap, &(int node::StreamBase::WriteString<(node::encoding)1>(v8::FunctionCallbackInfo<v8::Value> const&))>(v8::FunctionCallbackInfo<v8::Value> const&)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  71381   87.0%  syscall

   4985    6.1%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
   4984  100.0%    v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
   4948   99.3%      LazyCompile: *listOnTimeout timers.js:109:23

   1840    2.2%  /lib/x86_64-linux-gnu/libpthread-2.21.so
   1443   78.4%    Function: ~<anonymous> events.js:1:11
   1443  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:255:23
    950   65.8%        LazyCompile: *WriteStream.clearLine tty.js:92:43
    950  100.0%          LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:14:15
    950  100.0%            LazyCompile: _runOnTimeout timers.js:176:23
    493   34.2%        LazyCompile: *Writable.write _stream_writable.js:186:36
    493  100.0%          LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket.write net.js:615:34
    493  100.0%            LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:14:15
    256   13.9%    LazyCompile: *createWriteReq net.js:697:24
    256  100.0%      LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
    256  100.0%        LazyCompile: *writeOrBuffer _stream_writable.js:255:23
    165   64.5%          LazyCompile: *WriteStream.clearLine tty.js:92:43
    165  100.0%            LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:14:15
     91   35.5%          LazyCompile: *Writable.write _stream_writable.js:186:36
     91  100.0%            LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket.write net.js:615:34
    141    7.7%    LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket._writeGeneric net.js:622:42
    141  100.0%      LazyCompile: *writeOrBuffer _stream_writable.js:255:23
     97   68.8%        LazyCompile: *WriteStream.clearLine tty.js:92:43
     97  100.0%          LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:14:15
     97  100.0%            LazyCompile: _runOnTimeout timers.js:176:23
     44   31.2%        LazyCompile: *Writable.write _stream_writable.js:186:36
     44  100.0%          LazyCompile: *Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket.write net.js:615:34
     44  100.0%            LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:14:15

```
