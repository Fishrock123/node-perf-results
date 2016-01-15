test4.js on `master @ 0b43c08` with [`2ccde01...9b08688`](https://github.com/Fishrock123/node/compare/2ccde01...9b08688) and the following applied:

```diff
diff --git a/lib/timers.js b/lib/timers.js
index 715cd47..54970ea 100644
--- a/lib/timers.js
+++ b/lib/timers.js
@@ -50,8 +50,8 @@ const TIMEOUT_MAX = 2147483647; // 2^31-1
 // duration in milliseconds.
 // - key = time in milliseconds
 // - value = linked list
-const refedLists = {};
-const unrefedLists = {};
+const refedLists = new Map();
+const unrefedLists = new Map();
 // The difference between these two objects is that the former contains timers
 // that will keep the process open if they are the only thing left, while the
 // latter will not.
@@ -85,7 +85,7 @@ function insert(item, unrefed) {
   const lists = unrefed === true ? unrefedLists : refedLists;

   // Use an existing list if there is one, otherwise we need to make a new one.
-  var list = lists[msecs];
+  var list = lists.get(msecs);
   if (!list) {
     debug('no %d list was found in insert, creating a new one', msecs);
     // Make a new linked list of timers.
@@ -104,7 +104,7 @@ function insert(item, unrefed) {
     if (unrefed === true) list._timer.unref();
     list._timer.start(msecs, 0);

-    lists[msecs] = list;
+    lists.set(msecs, list);
     list._timer[kOnTimeout] = listOnTimeout;
   }

@@ -169,9 +169,9 @@ function listOnTimeout() {
   assert(L.isEmpty(list));
   this.close();
   if (list._unrefed === true) {
-    delete unrefedLists[msecs];
+    unrefedLists.delete(msecs);
   } else {
-    delete refedLists[msecs];
+    refedLists.delete(msecs);
   }
 }

@@ -213,12 +213,12 @@ function listOnTimeoutNT(list) {
 function reuse(item) {
   L.remove(item);

-  var list = refedLists[item._idleTimeout];
+  var list = refedLists.get(item._idleTimeout);
   // if empty - reuse the watcher
   if (list && L.isEmpty(list)) {
     debug('reuse hit');
     list._timer.stop();
-    delete refedLists[item._idleTimeout];
+    refedLists.delete(item._idleTimeout);
     return list._timer;
   }
```

---

```
/usr/bin/time node --prof test4.js
```
`time` output:
```
5.70user 6.60system 1:50.87elapsed 11%CPU (0avgtext+0avgdata 124596maxresident)k
0inputs+6808outputs (0major+23607minor)pagefaults 0swaps
```

Relevant `--prof` data:

```
Statistical profiling result from test4-3-improve-timers.log, (89075 ticks, 40 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     76    0.1%          /lib/x86_64-linux-gnu/libc-2.21.so
     29    0.0%          [vdso]

 [JavaScript]:
   ticks  total  nonlib   name
     34    0.0%    0.0%  LazyCompile: *delete native collection.js:300:19
     27    0.0%    0.0%  LazyCompile: *listOnTimeout timers.js:115:23
     14    0.0%    0.0%  Stub: JSEntryStub
     13    0.0%    0.0%  LazyCompile: *get native collection.js:239:16
     10    0.0%    0.0%  Builtin: JSEntryTrampoline
      7    0.0%    0.0%  Builtin: Call
      2    0.0%    0.0%  Stub: StoreTransitionStub
      2    0.0%    0.0%  Stub: CallApiAccessorStub {1}
      2    0.0%    0.0%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1    0.0%    0.0%  Stub: RecordWriteStub {1}
      1    0.0%    0.0%  Stub: RecordWriteStub
      1    0.0%    0.0%  Stub: LoadFieldStub
      1    0.0%    0.0%  Stub: CallApiAccessorStub
      1    0.0%    0.0%  Stub: CEntryStub
      1    0.0%    0.0%  LazyCompile: ~listOnTimeout timers.js:115:23
      1    0.0%    0.0%  LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1    0.0%    0.0%  LazyCompile: *set native collection.js:252:16
      1    0.0%    0.0%  LazyCompile: *isFinite native v8natives.js:34:24
      1    0.0%    0.0%  LazyCompile: *insert timers.js:79:16
      1    0.0%    0.0%  LazyCompile: *exports.unenroll timers.js:230:45
      1    0.0%    0.0%  LazyCompile: *exports._unrefActive timers.js:69:32
      1    0.0%    0.0%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1    0.0%    0.0%  Handler: An IC handler from the snapshot
      1    0.0%    0.0%  Function: ~<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1    0.0%    0.0%  Builtin: JSConstructStubApi
      1    0.0%    0.0%  Builtin: CallFunction

 [C++]:
   ticks  total  nonlib   name
  87552   98.3%   98.4%  syscall
    171    0.2%    0.2%  uv_timer_stop
     46    0.1%    0.1%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
     38    0.0%    0.0%  uv__run_check
     35    0.0%    0.0%  v8::internal::LookupIterator::Next()
     34    0.0%    0.0%  v8::internal::LookupIterator::GetRoot(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int)
     32    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
     30    0.0%    0.0%  __lll_lock_elision
     29    0.0%    0.0%  v8::internal::Context::native_context()
     27    0.0%    0.0%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
     27    0.0%    0.0%  uv_run
     24    0.0%    0.0%  node::ClearIdle(uv_check_s*)
     23    0.0%    0.0%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     23    0.0%    0.0%  v8::Context::Enter()
     23    0.0%    0.0%  __libc_malloc
     21    0.0%    0.0%  uv__run_timers
     19    0.0%    0.0%  uv__io_poll
     17    0.0%    0.0%  node::TimerWrap::OnTimeout(uv_timer_s*)
     17    0.0%    0.0%  node::TimerWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
     17    0.0%    0.0%  node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*)
     16    0.0%    0.0%  v8::Value::IsFunction() const
     16    0.0%    0.0%  v8::Object::Get(unsigned int)
     16    0.0%    0.0%  uv__hrtime
     14    0.0%    0.0%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
     14    0.0%    0.0%  uv_timer_start
     13    0.0%    0.0%  __GI___pthread_mutex_lock
     11    0.0%    0.0%  v8::internal::Object::GetProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
     11    0.0%    0.0%  v8::Isolate::GetCpuProfiler()
     10    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
     10    0.0%    0.0%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
     10    0.0%    0.0%  __clock_gettime
      9    0.0%    0.0%  v8::internal::JSObject::GetElementsAccessor()
      9    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Get(v8::internal::Handle<v8::internal::FixedArrayBase>, unsigned int)
      9    0.0%    0.0%  v8::Object::Get(v8::Local<v8::Context>, unsigned int)
      9    0.0%    0.0%  v8::HandleScope::HandleScope(v8::Isolate*)
      8    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      8    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<64>(v8::internal::Map*, v8::internal::HeapObject*)
      8    0.0%    0.0%  v8::HandleScope::Initialize(v8::Isolate*)
      8    0.0%    0.0%  __GI___pthread_getspecific
      7    0.0%    0.0%  v8::platform::DefaultPlatform::PumpMessageLoop(v8::Isolate*)
      7    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      7    0.0%    0.0%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      7    0.0%    0.0%  v8::internal::InnerPointerToCodeCache::GcSafeFindCodeForInnerPointer(unsigned char*)
      7    0.0%    0.0%  v8::internal::IncrementalMarking::WhiteToGreyAndPush(v8::internal::HeapObject*, v8::internal::MarkBit) [clone .isra.70]
      7    0.0%    0.0%  v8::Isolate::GetCurrentContext()
      7    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
      7    0.0%    0.0%  v8::Context::Exit()
      7    0.0%    0.0%  v8::(anonymous namespace)::CallDepthScope::~CallDepthScope()
      6    0.0%    0.0%  v8::internal::TranslatedState::Init(unsigned char*, v8::internal::JSFunction*, v8::internal::TranslationIterator*, v8::internal::FixedArray*, v8::internal::RegisterValues*, _IO_FILE*)
      6    0.0%    0.0%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      6    0.0%    0.0%  v8::internal::LookupIterator::IsIntegerIndexedExotic(v8::internal::JSReceiver*)
      6    0.0%    0.0%  v8::External::Value() const
      6    0.0%    0.0%  v8::CpuProfiler::SetIdle(bool)
      6    0.0%    0.0%  uv_now
      6    0.0%    0.0%  uv__run_prepare
      6    0.0%    0.0%  uv__run_idle
      6    0.0%    0.0%  node::Start(int, char**)
      5    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, true>::IsAllowed(v8::internal::Isolate*)
      5    0.0%    0.0%  v8::internal::Logger::ApiEntryCall(char const*)
      5    0.0%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      5    0.0%    0.0%  v8::TryCatch::TryCatch(v8::Isolate*)
      5    0.0%    0.0%  v8::Isolate::RunMicrotasks()
      5    0.0%    0.0%  uv_close
      4    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventExecute>::LogTimerEvent(v8::internal::Logger::StartEnd)
      4    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      4    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      4    0.0%    0.0%  v8::internal::LookupIterator::GetDataValue() const
      4    0.0%    0.0%  v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, PropertyAttributes)
      4    0.0%    0.0%  v8::internal::Heap::AllocateFixedArray(int, v8::internal::PretenureFlag)
      4    0.0%    0.0%  v8::HandleScope::~HandleScope()
      4    0.0%    0.0%  sigemptyset
      4    0.0%    0.0%  cfree
      3    0.0%    0.0%  write
      3    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      3    0.0%    0.0%  v8::internal::TranslatedState::CreateNextTranslatedValue(int, int, v8::internal::TranslationIterator*, v8::internal::FixedArray*, unsigned char*, v8::internal::RegisterValues*, _IO_FILE*)
      3    0.0%    0.0%  v8::internal::ThreadId::GetCurrentThreadId()
      3    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      3    0.0%    0.0%  v8::internal::Scavenger::ScavengeObjectSlow(v8::internal::HeapObject**, v8::internal::HeapObject*)
      3    0.0%    0.0%  v8::internal::SaveContext::~SaveContext()
      3    0.0%    0.0%  v8::internal::RelocIterator::next()
      3    0.0%    0.0%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      3    0.0%    0.0%  v8::internal::LookupIterator::LookupIterator(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int, v8::internal::LookupIterator::Configuration)
      3    0.0%    0.0%  v8::internal::JSObject::GetElementsTransitionMap(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      3    0.0%    0.0%  v8::internal::Isolate::UnregisterTryCatchHandler(v8::TryCatch*)
      3    0.0%    0.0%  v8::internal::Isolate::FireCallCompletedCallback()
      3    0.0%    0.0%  v8::internal::Heap::IterateAndMarkPointersToFromSpace(v8::internal::HeapObject*, unsigned char*, unsigned char*, bool, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      3    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::FixedArray::BodyDescriptor, int>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      3    0.0%    0.0%  v8::internal::FixedArray::set(int, v8::internal::Object*)
      3    0.0%    0.0%  v8::internal::Deoptimizer::DoComputeCompiledStubFrame(v8::internal::TranslationIterator*, int)
      3    0.0%    0.0%  v8::internal::CodeStub::FindCodeInCache(v8::internal::Code**)
      3    0.0%    0.0%  v8::base::Mutex::Lock()
      3    0.0%    0.0%  v8::Value::IsExternal() const
      3    0.0%    0.0%  v8::TryCatch::SetVerbose(bool)
      3    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
      3    0.0%    0.0%  v8::EscapableHandleScope::EscapableHandleScope(v8::Isolate*)
      3    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      2    0.0%    0.0%  v8::internal::UpdatePointer(v8::internal::HeapObject**, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::TranslationIterator::Next()
      2    0.0%    0.0%  v8::internal::StoreBuffer::ProcessOldToNewSlot(unsigned char*, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      2    0.0%    0.0%  v8::internal::StoreBuffer::IteratePointersToNewSpace(void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      2    0.0%    0.0%  v8::internal::StoreBuffer::ClearInvalidStoreBufferEntries()
      2    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::MarkMapContents(v8::internal::Heap*, v8::internal::Map*)
      2    0.0%    0.0%  v8::internal::SemiSpace::GrowTo(int)
      2    0.0%    0.0%  v8::internal::ScavengeVisitor::VisitPointer(v8::internal::Object**)
      2    0.0%    0.0%  v8::internal::SaveContext::SaveContext(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::JSObjectWalkVisitor<v8::internal::AllocationSiteUsageContext>::StructureWalk(v8::internal::Handle<v8::internal::JSObject>)
      2    0.0%    0.0%  v8::internal::Isolate::RegisterTryCatchHandler(v8::TryCatch*)
      2    0.0%    0.0%  v8::internal::IncrementalMarkingRootMarkingVisitor::VisitPointer(v8::internal::Object**)
      2    0.0%    0.0%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
      2    0.0%    0.0%  v8::internal::HandleScope::Extend(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::HandleScope::DeleteExtensions(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::GlobalHandles::IterateStrongRoots(v8::internal::ObjectVisitor*)
      2    0.0%    0.0%  v8::internal::GlobalHandles::IterateAllRoots(v8::internal::ObjectVisitor*)
      2    0.0%    0.0%  v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, bool, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, v8::internal::Handle<v8::internal::Object>) [clone .constprop.24]
      2    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleyObjectElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)3> >::GrowCapacityAndConvertImpl(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
      2    0.0%    0.0%  v8::internal::(anonymous namespace)::CopyObjectToObjectElements(v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, int)
      2    0.0%    0.0%  v8::EscapableHandleScope::Escape(v8::internal::Object**)
      2    0.0%    0.0%  std::vector<v8::internal::TranslatedFrame, std::allocator<v8::internal::TranslatedFrame> >::reserve(unsigned long)
      2    0.0%    0.0%  sigaddset
      2    0.0%    0.0%  operator new(unsigned long)
      2    0.0%    0.0%  node::SetIdle(uv_prepare_s*)
      2    0.0%    0.0%  mmap
      1    0.0%    0.0%  void v8::internal::Code::CodeIterateBody<v8::internal::IncrementalMarkingMarkingVisitor>(v8::internal::Heap*)
      1    0.0%    0.0%  v8::platform::PumpMessageLoop(v8::Platform*, v8::Isolate*)
      1    0.0%    0.0%  v8::internal::WeakFixedArray::Add(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::HeapObject>, int*)
      1    0.0%    0.0%  v8::internal::TranslatedValue::GetRawValue() const [clone .part.120]
      1    0.0%    0.0%  v8::internal::TranslatedFrame::AdvanceIterator(std::_Deque_iterator<v8::internal::TranslatedValue, v8::internal::TranslatedValue&, v8::internal::TranslatedValue*>*)
      1    0.0%    0.0%  v8::internal::StubFailureTrampolineStub::MajorKey() const
      1    0.0%    0.0%  v8::internal::String::ToCString(v8::internal::AllowNullsFlag, v8::internal::RobustnessFlag, int, int, int*)
      1    0.0%    0.0%  v8::internal::StoreBuffer::Compact()
      1    0.0%    0.0%  v8::internal::SerializerDeserializer::Iterate(v8::internal::Isolate*, v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::Scanner::ScanIdentifierOrKeyword()
      1    0.0%    0.0%  v8::internal::Scanner::Scan()
      1    0.0%    0.0%  v8::internal::Runtime_NotifyStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_ElementsTransitionAndStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime::SetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      1    0.0%    0.0%  v8::internal::RootMarkingVisitor::VisitPointer(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::RelocIterator::RelocIterator(v8::internal::Code*, int)
      1    0.0%    0.0%  v8::internal::PatchIncrementalMarkingRecordWriteStubs(v8::internal::Heap*, v8::internal::RecordWriteStub::Mode) [clone .constprop.117]
      1    0.0%    0.0%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseConditionalExpression(bool, v8::internal::ExpressionClassifier*, bool*)
      1    0.0%    0.0%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseBinaryExpression(int, bool, v8::internal::ExpressionClassifier*, bool*)
      1    0.0%    0.0%  v8::internal::OrderedHashTable<v8::internal::OrderedHashMap, v8::internal::JSMapIterator, 2>::Rehash(v8::internal::Handle<v8::internal::OrderedHashMap>, int)
      1    0.0%    0.0%  v8::internal::Object::SetProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode, v8::internal::Object::StoreFromKeyed)
      1    0.0%    0.0%  v8::internal::Object::GetHash()
      1    0.0%    0.0%  v8::internal::Object::AddDataProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, PropertyAttributes, v8::internal::LanguageMode, v8::internal::Object::StoreFromKeyed)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::SweepSpaces()
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordRelocSlot(v8::internal::RelocInfo*, v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordCodeEntrySlot(v8::internal::HeapObject*, unsigned char*, v8::internal::Code*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::IsSlotInLiveObject(unsigned char*)
      1    0.0%    0.0%  v8::internal::Map::WeakCellForMap(v8::internal::Handle<v8::internal::Map>)
      1    0.0%    0.0%  v8::internal::LookupIterator::PrepareTransitionToDataProperty(v8::internal::Handle<v8::internal::Object>, PropertyAttributes, v8::internal::Object::StoreFromKeyed)
      1    0.0%    0.0%  v8::internal::List<int, v8::internal::ZoneAllocationPolicy>::Add(int const&, v8::internal::ZoneAllocationPolicy)
      1    0.0%    0.0%  v8::internal::LGapResolver::PerformMove(int)
      1    0.0%    0.0%  v8::internal::LCodeGenBase::LCodeGenBase(v8::internal::LChunk*, v8::internal::MacroAssembler*, v8::internal::CompilationInfo*)
      1    0.0%    0.0%  v8::internal::LCodeGen::GenerateBodyInstructionPre(v8::internal::LInstruction*)
      1    0.0%    0.0%  v8::internal::LChunkBuilder::DoConstant(v8::internal::HConstant*)
      1    0.0%    0.0%  v8::internal::LChunkBuilder::DoBasicBlock(v8::internal::HBasicBlock*, v8::internal::HBasicBlock*)
      1    0.0%    0.0%  v8::internal::LAllocator::ProcessInstructions(v8::internal::HBasicBlock*, v8::internal::BitVector*)
      1    0.0%    0.0%  v8::internal::JSObject::MigrateToMap(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Map>, int)
      1    0.0%    0.0%  v8::internal::Isolate::RunMicrotasks()
      1    0.0%    0.0%  v8::internal::InnerPointerToCodeCache::GetCacheEntry(unsigned char*)
      1    0.0%    0.0%  v8::internal::IncrementalMarking::UpdateMarkingDequeAfterScavenge()
      1    0.0%    0.0%  v8::internal::IncrementalMarking::OldSpaceStep(long)
      1    0.0%    0.0%  v8::internal::HeapObject::IterateBody(v8::internal::InstanceType, int, v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::Heap::DoScavenge(v8::internal::ObjectVisitor*, unsigned char*)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindEntry(v8::internal::Isolate*, unsigned int)
      1    0.0%    0.0%  v8::internal::HUseIterator::Advance()
      1    0.0%    0.0%  v8::internal::HSimulate::OperandAt(int) const
      1    0.0%    0.0%  v8::internal::HInferRepresentationPhase::Run()
      1    0.0%    0.0%  v8::internal::HDeadCodeEliminationPhase::MarkLive(v8::internal::HValue*, v8::internal::ZoneList<v8::internal::HValue*>*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::UpdateListOfNewSpaceNodes()
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateNewSpaceWeakIndependentRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::FunctionTemplateInfo::IsTemplateFor(v8::internal::Map*) [clone .part.239]
      1    0.0%    0.0%  v8::internal::FunctionCallbackArguments::Call(void (*)(v8::FunctionCallbackInfo<v8::Value> const&))
      1    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedArray::BodyDescriptor, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::Factory::NewUninitializedFixedArray(int)
      1    0.0%    0.0%  v8::internal::Factory::NewFunctionFromSharedFunctionInfo(v8::internal::Handle<v8::internal::SharedFunctionInfo>, v8::internal::Handle<v8::internal::Context>, v8::internal::PretenureFlag)
      1    0.0%    0.0%  v8::internal::Deserializer::ReadData(v8::internal::Object**, v8::internal::Object**, int, unsigned char*)
      1    0.0%    0.0%  v8::internal::Deoptimizer::Grab(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Deoptimizer::FindDeoptimizingCode(unsigned char*)
      1    0.0%    0.0%  v8::internal::Deoptimizer::CopyDoubleRegisters(v8::internal::FrameDescription*)
      1    0.0%    0.0%  v8::internal::CodeStub::Dispatch(v8::internal::Isolate*, unsigned int, void**, void (*)(v8::internal::CodeStub*, void**)) [clone .constprop.111]
      1    0.0%    0.0%  v8::internal::BodyVisitorBase<v8::internal::IncrementalMarkingMarkingVisitor>::IterateBodyUsingLayoutDescriptor(v8::internal::Heap*, v8::internal::HeapObject*, int, int)
      1    0.0%    0.0%  v8::internal::AstValueFactory::Internalize(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::AstValueFactory::GetString(unsigned int, bool, v8::internal::Vector<unsigned char const>)
      1    0.0%    0.0%  v8::internal::AstValueFactory::GetOneByteStringInternal(v8::internal::Vector<unsigned char const>)
      1    0.0%    0.0%  v8::internal::AstNumberingVisitor::VisitBlock(v8::internal::Block*)
      1    0.0%    0.0%  v8::internal::Assembler::jmp(v8::internal::Register)
      1    0.0%    0.0%  v8::internal::Accessors::FunctionPrototypeGetter(v8::Local<v8::Name>, v8::PropertyCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetDetails(v8::internal::FixedArrayBase*, unsigned int)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleyObjectElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)3> >::Add(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, PropertyAttributes, unsigned int)
      1    0.0%    0.0%  v8::base::Thread::GetThreadLocal(int)
      1    0.0%    0.0%  v8::TryCatch::~TryCatch()
      1    0.0%    0.0%  v8::TryCatch::HasCaught() const
      1    0.0%    0.0%  v8::Object::InternalFieldCount()
      1    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::~SuppressMicrotaskExecutionScope()
      1    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::SuppressMicrotaskExecutionScope(v8::Isolate*)
      1    0.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  node::HandleWrap::Unref(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  munmap
      1    0.0%    0.0%  _init

 [Summary]:
   ticks  total  nonlib   name
    128    0.1%    0.1%  JavaScript
  88802   99.7%   99.8%  C++
     91    0.1%    0.1%  GC
    105    0.1%          Shared libraries
     40    0.0%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     34   15.2%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     26   11.7%    0.0%  v8::internal::Runtime_ElementsTransitionAndStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
     21    9.4%    0.0%  v8::internal::Runtime_NotifyStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
     17    7.6%    0.0%  __libc_malloc
     14    6.3%    0.0%  uv_timer_start
     13    5.8%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      8    3.6%    0.0%  v8::internal::Runtime_MapGrow(int, v8::internal::Object**, v8::internal::Isolate*)
      7    3.1%    0.0%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      6    2.7%    0.0%  v8::internal::TranslatedState::Init(unsigned char*, v8::internal::JSFunction*, v8::internal::TranslationIterator*, v8::internal::FixedArray*, v8::internal::RegisterValues*, _IO_FILE*)
      6    2.7%    0.0%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      6    2.7%    0.0%  v8::External::Value() const
      6    2.7%    0.0%  uv_now
      5    2.2%    0.0%  v8::internal::Runtime_MapShrink(int, v8::internal::Object**, v8::internal::Isolate*)
      5    2.2%    0.0%  uv_close
      3    1.3%    0.0%  v8::internal::TranslatedState::CreateNextTranslatedValue(int, int, v8::internal::TranslationIterator*, v8::internal::FixedArray*, unsigned char*, v8::internal::RegisterValues*, _IO_FILE*)
      3    1.3%    0.0%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      3    1.3%    0.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      3    1.3%    0.0%  v8::internal::Deoptimizer::DoComputeCompiledStubFrame(v8::internal::TranslationIterator*, int)
      3    1.3%    0.0%  v8::internal::CodeStub::FindCodeInCache(v8::internal::Code**)
      3    1.3%    0.0%  v8::Value::IsExternal() const
      2    0.9%    0.0%  v8::internal::Runtime_TryInstallOptimizedCode(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  v8::internal::Runtime_NewObject(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  v8::Value::IsFunction() const
      1    0.4%    0.0%  v8::internal::TranslationIterator::Next()
      1    0.4%    0.0%  v8::internal::TranslatedValue::GetRawValue() const [clone .part.120]
      1    0.4%    0.0%  v8::internal::TranslatedFrame::AdvanceIterator(std::_Deque_iterator<v8::internal::TranslatedValue, v8::internal::TranslatedValue&, v8::internal::TranslatedValue*>*)
      1    0.4%    0.0%  v8::internal::StubFailureTrampolineStub::MajorKey() const
      1    0.4%    0.0%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.4%    0.0%  v8::internal::Runtime_RegExpExec(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.4%    0.0%  v8::internal::Runtime_NewClosure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.4%    0.0%  v8::internal::Runtime_KeyedStoreIC_Slow(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.4%    0.0%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.4%    0.0%  v8::internal::Deoptimizer::CopyDoubleRegisters(v8::internal::FrameDescription*)
      1    0.4%    0.0%  v8::internal::CodeStub::Dispatch(v8::internal::Isolate*, unsigned int, void**, void (*)(v8::internal::CodeStub*, void**)) [clone .constprop.111]
      1    0.4%    0.0%  v8::Object::InternalFieldCount()
      1    0.4%    0.0%  std::vector<v8::internal::TranslatedFrame, std::allocator<v8::internal::TranslatedFrame> >::reserve(unsigned long)
      1    0.4%    0.0%  operator new(unsigned long)
      1    0.4%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.4%    0.0%  node::HandleWrap::Unref(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.4%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.4%    0.0%  cfree
      1    0.4%    0.0%  __clock_gettime

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  87552   98.3%  syscall
```
