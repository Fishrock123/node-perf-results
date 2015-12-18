test3.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
node --prof test3.js
```

Relevant `--prof` data:

```
Statistical profiling result from test3-3-refactor-timers.log, (89345 ticks, 147 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     92    0.1%          /lib/x86_64-linux-gnu/libc-2.21.so
     50    0.1%          [vdso]
      2    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
    145    0.2%    0.2%  LazyCompile: *listOnTimeout timers.js:109:23
     54    0.1%    0.1%  Stub: JSEntryStub
     24    0.0%    0.0%  LazyCompile: ~insert timers.js:79:16
     18    0.0%    0.0%  Stub: CompareICStub {1}
     18    0.0%    0.0%  Builtin: JSEntryTrampoline
     10    0.0%    0.0%  Stub: RecordWriteStub {6}
      9    0.0%    0.0%  Builtin: CallFunction
      9    0.0%    0.0%  Builtin: Call
      8    0.0%    0.0%  Stub: CEntryStub
      7    0.0%    0.0%  Stub: ToBooleanStub
      7    0.0%    0.0%  LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:8:34
      5    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16
      4    0.0%    0.0%  Stub: CallApiAccessorStub
      4    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot {1}
      3    0.0%    0.0%  Stub: StoreTransitionStub
      3    0.0%    0.0%  Stub: RecordWriteStub {7}
      3    0.0%    0.0%  Stub: LoadConstantStub
      3    0.0%    0.0%  LazyCompile: ~Module._compile module.js:367:37
      3    0.0%    0.0%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:1:11
      3    0.0%    0.0%  Handler: _unrefed
      3    0.0%    0.0%  Handler: An IC handler from the snapshot
      2    0.0%    0.0%  Stub: FastNewClosureStub
      2    0.0%    0.0%  KeyedStoreIC: A keyed store IC from the snapshot
      2    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {4}
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      2    0.0%    0.0%  Builtin: JSConstructStubApi
      1    0.0%    0.0%  Stub: RecordWriteStub {5}
      1    0.0%    0.0%  Stub: RecordWriteStub {4}
      1    0.0%    0.0%  Stub: RecordWriteStub {3}
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub {1}
      1    0.0%    0.0%  Stub: RecordWriteStub
      1    0.0%    0.0%  Stub: CompareICStub
      1    0.0%    0.0%  LazyCompile: *isFinite native v8natives.js:34:24
      1    0.0%    0.0%  Handler: start
      1    0.0%    0.0%  Handler: _idleTimeout
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {3}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {2}
      1    0.0%    0.0%  Function: ~<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:1:11
      1    0.0%    0.0%  Builtin: CompileLazy
      1    0.0%    0.0%  Builtin: ArgumentsAdaptorTrampoline

 [C++]:
   ticks  total  nonlib   name
  81175   90.9%   91.0%  syscall
   5238    5.9%    5.9%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
    211    0.2%    0.2%  uv_timer_stop
    144    0.2%    0.2%  write

 [Summary]:
   ticks  total  nonlib   name
    370    0.4%    0.4%  JavaScript
  88684   99.3%   99.4%  C++
    146    0.2%    0.2%  GC
    144    0.2%          Shared libraries
    147    0.2%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
   5293   86.5%    5.9%  v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
    503    8.2%    0.6%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
     80    1.3%    0.1%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     49    0.8%    0.1%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     46    0.8%    0.1%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
     37    0.6%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  81175   90.9%  syscall

   5238    5.9%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
   5238  100.0%    v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
   5238  100.0%      LazyCompile: *listOnTimeout timers.js:109:23

```
