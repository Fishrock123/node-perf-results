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
      111.34 real         7.06 user         7.91 sys
```

Relevant `--prof` data:

```
Statistical profiling result from v8-logs/test4-4-improve-timers.log, (81006 ticks, 204 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
   2741    3.4%          /usr/local/bin/node
     98    0.1%          /usr/lib/system/libsystem_pthread.dylib
     88    0.1%          /usr/lib/system/libsystem_kernel.dylib
      2    0.0%          /usr/lib/system/libsystem_c.dylib

 [JavaScript]:
   ticks  total  nonlib   name
    115    0.1%    0.1%  LazyCompile: *delete native collection.js:300:19
     55    0.1%    0.1%  LazyCompile: *listOnTimeout timers.js:115:23
     27    0.0%    0.0%  Stub: JSEntryStub
     27    0.0%    0.0%  LazyCompile: *get native collection.js:239:16
     15    0.0%    0.0%  Stub: CallApiAccessorStub
     10    0.0%    0.0%  LazyCompile: *insert timers.js:79:16
      8    0.0%    0.0%  LazyCompile: *<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      8    0.0%    0.0%  Builtin: JSEntryTrampoline
      7    0.0%    0.0%  Stub: FastNewClosureStub
      6    0.0%    0.0%  LazyCompile: *set native collection.js:252:16
      4    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      3    0.0%    0.0%  Stub: CEntryStub
      3    0.0%    0.0%  KeyedStoreIC: A keyed store IC from the snapshot
      3    0.0%    0.0%  Builtin: JSConstructStubApi
      3    0.0%    0.0%  Builtin: Call
      2    0.0%    0.0%  Stub: RecordWriteStub
      2    0.0%    0.0%  Stub: ElementsTransitionAndStoreStub
      2    0.0%    0.0%  Stub: CallApiAccessorStub {1}
      2    0.0%    0.0%  LazyCompile: ~listOnTimeout timers.js:115:23
      2    0.0%    0.0%  Handler: An IC handler from the snapshot
      2    0.0%    0.0%  Function: ~<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      2    0.0%    0.0%  Builtin: CallFunction
      1    0.0%    0.0%  Stub: StoreTransitionStub
      1    0.0%    0.0%  Stub: StoreFieldStub
      1    0.0%    0.0%  Stub: RecordWriteStub {4}
      1    0.0%    0.0%  Stub: RecordWriteStub {3}
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub {1}
      1    0.0%    0.0%  Stub: LoadFieldStub
      1    0.0%    0.0%  Stub: CompareICStub
      1    0.0%    0.0%  LazyCompile: ~cancelTimers /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1    0.0%    0.0%  LazyCompile: *cancelTimers /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1    0.0%    0.0%  KeyedStorePolymorphicIC: args_count: 0
      1    0.0%    0.0%  Handler: _idleTimeout
      1    0.0%    0.0%  Function: ~<anonymous> util.js:1:11

 [C++]:
   ticks  total  nonlib   name
  73556   90.8%   94.2%  ___bsdthread_ctl
    461    0.6%    0.6%  _vm_region_recurse_64
    363    0.4%    0.5%  v8::Context::Enter()
    357    0.4%    0.5%  _uv__run_check
    275    0.3%    0.4%  _uv_get_process_title
    229    0.3%    0.3%  _uv__timer_close
    185    0.2%    0.2%  _uv_run
    157    0.2%    0.2%  node::ClearIdle(uv_check_s*)
    153    0.2%    0.2%  v8::HandleScope::Initialize(v8::Isolate*)
    133    0.2%    0.2%  v8::Isolate::GetCpuProfiler()
    127    0.2%    0.2%  v8::Locker::IsLocked(v8::Isolate*)
    109    0.1%    0.1%  v8::internal::Context::script_context()
    107    0.1%    0.1%  _malloc_zone_malloc
     99    0.1%    0.1%  node::TimerWrap::~TimerWrap()
     93    0.1%    0.1%  v8::Object::Get(unsigned int)
     55    0.1%    0.1%  v8::internal::LookupIterator::Next()
     50    0.1%    0.1%  v8::internal::IncrementalMarking::UpdateMarkingDequeAfterScavenge()
     49    0.1%    0.1%  v8::base::Thread::GetThreadLocal(int)
     47    0.1%    0.1%  _malloc_default_zone
     39    0.0%    0.0%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     39    0.0%    0.0%  node::TimerWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
     37    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     34    0.0%    0.0%  v8::internal::HandleScope::NumberOfHandles(v8::internal::Isolate*)
     33    0.0%    0.0%  v8::internal::Logger::ApiObjectAccess(char const*, v8::internal::JSObject*)
     31    0.0%    0.0%  v8::Value::IsFunction() const
     30    0.0%    0.0%  v8::Object::Get(v8::Local<v8::Context>, unsigned int)
     27    0.0%    0.0%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
     26    0.0%    0.0%  v8::HandleScope::HandleScope(v8::Isolate*)
     21    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, true>::~PerIsolateAssertScope()
     21    0.0%    0.0%  node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*)
     20    0.0%    0.0%  v8::internal::KeyAccumulator::PrepareForComparisons(int)
     19    0.0%    0.0%  v8::platform::DefaultPlatform::PumpMessageLoop(v8::Isolate*)
     19    0.0%    0.0%  _platform_task_update_threads
     17    0.0%    0.0%  v8::internal::TranslatedState::Init(unsigned char*, v8::internal::JSFunction*, v8::internal::TranslationIterator*, v8::internal::FixedArray*, v8::internal::RegisterValues*, __sFILE*)
     16    0.0%    0.0%  v8::internal::JSObject::HasRealNamedProperty(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Name>)
     15    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::CheckLayoutDescriptorAndDie(v8::internal::Heap*, v8::internal::Object**)
     15    0.0%    0.0%  _uv_timer_start
     14    0.0%    0.0%  void node::Wrap<node::ContextifyContext>(v8::Local<v8::Object>, node::ContextifyContext*)
     14    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
     14    0.0%    0.0%  v8::internal::MarkCompactCollector::EvacuateNewSpaceAndCandidates()
     14    0.0%    0.0%  _malloc
     13    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventExecute>::LogTimerEvent(v8::internal::Logger::StartEnd)
     13    0.0%    0.0%  v8::internal::OptimizedFrame::StackSlotAt(int) const
     13    0.0%    0.0%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
     13    0.0%    0.0%  v8::internal::Isolate::RemoveCallCompletedCallback(void (*)())
     12    0.0%    0.0%  v8::internal::LookupIterator::GetFieldIndex() const
     12    0.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
     10    0.0%    0.0%  v8::TryCatch::HasCaught() const
     10    0.0%    0.0%  node::CreateEnvironment(v8::Isolate*, uv_loop_s*, v8::Local<v8::Context>, int, char const* const*, int, char const* const*)
      9    0.0%    0.0%  v8::Number::Value() const
      9    0.0%    0.0%  v8::Isolate::GetCurrentContext()
      8    0.0%    0.0%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      8    0.0%    0.0%  v8::internal::MarkCompactCollector::DiscoverGreyObjectsOnPage(v8::internal::MemoryChunk*)
      8    0.0%    0.0%  v8::internal::Execution::ToObject(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>)
      8    0.0%    0.0%  v8::internal::Deoptimizer::MessageFor(v8::internal::Deoptimizer::BailoutType)
      8    0.0%    0.0%  v8::internal::Deoptimizer::DoComputeCompiledStubFrame(v8::internal::TranslationIterator*, int)
      8    0.0%    0.0%  node::StartProfilerIdleNotifier(v8::FunctionCallbackInfo<v8::Value> const&)
      8    0.0%    0.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::PromoteObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)0, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      7    0.0%    0.0%  _uv_close
      7    0.0%    0.0%  _create_scalable_zone
      7    0.0%    0.0%  __simple_asl_msg_set
      6    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::FixedArray::BodyDescriptor, int>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      6    0.0%    0.0%  v8::internal::ApiNatives::ConfigureInstance(v8::internal::Isolate*, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::JSObject>)
      6    0.0%    0.0%  __simple_getenv
      6    0.0%    0.0%  ___mkfifo_extended
      5    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      5    0.0%    0.0%  v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, PropertyAttributes)
      5    0.0%    0.0%  v8::Value::IsBoolean() const
      5    0.0%    0.0%  v8::TryCatch::TryCatch(v8::Isolate*)
      5    0.0%    0.0%  _uv_timer_again
      5    0.0%    0.0%  __pthread_workqueue_init
      5    0.0%    0.0%  ___cxa_free_exception
      4    0.0%    0.0%  v8::internal::TranslatedState::CreateNextTranslatedValue(int, int, v8::internal::TranslationIterator*, v8::internal::FixedArray*, unsigned char*, v8::internal::RegisterValues*, __sFILE*)
      4    0.0%    0.0%  v8::internal::TranslatedState::CreateNextTranslatedFrame(v8::internal::TranslationIterator*, v8::internal::FixedArray*, unsigned char*, v8::internal::JSFunction*, __sFILE*)
      4    0.0%    0.0%  v8::internal::Isolate::RegisterTryCatchHandler(v8::TryCatch*)
      4    0.0%    0.0%  v8::internal::Heap::CopyFixedArrayWithMap(v8::internal::FixedArray*, v8::internal::Map*)
      4    0.0%    0.0%  v8::internal::CodeStub::FindCodeInCache(v8::internal::Code**)
      4    0.0%    0.0%  v8::internal::Builtins::~Builtins()
      4    0.0%    0.0%  node::HandleWrap::~HandleWrap()
      4    0.0%    0.0%  node::HandleWrap* node::Unwrap<node::HandleWrap>(v8::Local<v8::Object>)
      3    0.0%    0.0%  v8::internal::TranslatedValue::GetRawValue() const
      3    0.0%    0.0%  v8::internal::StoreBuffer::ClearFilteringHashSets()
      3    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      3    0.0%    0.0%  v8::internal::ScavengeVisitor::ScavengePointer(v8::internal::Object**)
      3    0.0%    0.0%  v8::internal::SaveContext::SaveContext(v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::Runtime::GetCallerArguments(v8::internal::Isolate*, int, int*)
      3    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)1, false>::~PerIsolateAssertScope()
      3    0.0%    0.0%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseAssignmentExpression(bool, v8::internal::ExpressionClassifier*, bool*)
      3    0.0%    0.0%  v8::internal::OrderedHashTable<v8::internal::OrderedHashMap, v8::internal::JSMapIterator, 2>::Rehash(v8::internal::Handle<v8::internal::OrderedHashMap>, int)
      3    0.0%    0.0%  v8::internal::MarkCompactCollector::ClearMapTransitions(v8::internal::Map*, v8::internal::Map*)
      3    0.0%    0.0%  v8::internal::JSObjectWalkVisitor<v8::internal::AllocationSiteCreationContext>::StructureWalk(v8::internal::Handle<v8::internal::JSObject>)
      3    0.0%    0.0%  v8::HandleScope::~HandleScope()
      3    0.0%    0.0%  std::deque<int, std::allocator<int> >::deque(std::deque<int, std::allocator<int> > const&)
      3    0.0%    0.0%  node::HandleWrap::Unref(v8::FunctionCallbackInfo<v8::Value> const&)
      3    0.0%    0.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::PromoteObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)0, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      3    0.0%    0.0%  __simple_asl_send
      3    0.0%    0.0%  ___libplatform_init
      2    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<64>(v8::internal::Map*, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::StringCharLoadGenerator::Generate(v8::internal::MacroAssembler*, v8::internal::Register, v8::internal::Register, v8::internal::Register, v8::internal::Label*)
      2    0.0%    0.0%  v8::internal::StoreBuffer::IteratePointersInStoreBuffer(void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      2    0.0%    0.0%  v8::internal::Scavenger::ScavengeObjectSlow(v8::internal::HeapObject**, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::Runtime_ElementsTransitionAndStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::Object::SetDataProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>)
      2    0.0%    0.0%  v8::internal::MarkCompactCollector::TryPromoteObject(v8::internal::HeapObject*, int)
      2    0.0%    0.0%  v8::internal::Map::TransitionElementsTo(v8::internal::Handle<v8::internal::Map>, v8::internal::ElementsKind)
      2    0.0%    0.0%  v8::internal::Map::CopyAsElementsKind(v8::internal::Handle<v8::internal::Map>, v8::internal::ElementsKind, v8::internal::TransitionFlag)
      2    0.0%    0.0%  v8::internal::IC::IC(v8::internal::IC::FrameDepth, v8::internal::Isolate*, v8::internal::FeedbackNexus*)
      2    0.0%    0.0%  v8::internal::Heap::AllocateRaw(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment)
      2    0.0%    0.0%  v8::internal::HandleScope::DeleteExtensions(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::GlobalHandles::IterateStrongRoots(v8::internal::ObjectVisitor*)
      2    0.0%    0.0%  v8::internal::GlobalHandles::Destroy(v8::internal::Object**)
      2    0.0%    0.0%  v8::internal::Factory::NewUninitializedFixedArray(int)
      2    0.0%    0.0%  v8::internal::Deserializer::DeserializePartial(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSGlobalProxy>, v8::internal::Handle<v8::internal::FixedArray>*)
      2    0.0%    0.0%  v8::TryCatch::~TryCatch()
      2    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::SuppressMicrotaskExecutionScope(v8::Isolate*)
      2    0.0%    0.0%  node::TTYWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
      2    0.0%    0.0%  node::SetIdle(uv_prepare_s*)
      2    0.0%    0.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::SemiSpaceCopyObject<(v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      2    0.0%    0.0%  _uv_backend_timeout
      2    0.0%    0.0%  _uv__run_prepare
      1    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectEvacuationStrategy<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1>::VisitSpecialized<144>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectEvacuationStrategy<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1>::VisitSpecialized<40>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.0%    0.0%  void v8::internal::Scanner::Advance<false, true>()
      1    0.0%    0.0%  void v8::internal::RelocInfo::Visit<v8::internal::IncrementalMarkingMarkingVisitor>(v8::internal::Heap*)
      1    0.0%    0.0%  v8::platform::DefaultPlatform::SetThreadPoolSize(int)
      1    0.0%    0.0%  v8::internal::String::CalculateLineEnds(v8::internal::Handle<v8::internal::String>, bool)
      1    0.0%    0.0%  v8::internal::StoreIC::UpdateCaches(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::Object::StoreFromKeyed)
      1    0.0%    0.0%  v8::internal::Scope::SetDefaults(v8::internal::ScopeType, v8::internal::Scope*, v8::internal::Handle<v8::internal::ScopeInfo>, v8::internal::FunctionKind)
      1    0.0%    0.0%  v8::internal::Scope::Scope(v8::internal::Zone*, v8::internal::Scope*, v8::internal::ScopeType, v8::internal::AstValueFactory*, v8::internal::FunctionKind)
      1    0.0%    0.0%  v8::internal::Scope::Initialize()
      1    0.0%    0.0%  v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateFixedArray(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::SaveContext::~SaveContext()
      1    0.0%    0.0%  v8::internal::Runtime_NotifyStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::RelocIterator::next()
      1    0.0%    0.0%  v8::internal::RelocInfoWriter::Write(v8::internal::RelocInfo const*)
      1    0.0%    0.0%  v8::internal::Parser::ParseSubStatement(v8::internal::ZoneList<v8::internal::AstRawString const*>*, bool*)
      1    0.0%    0.0%  v8::internal::Parser::ParseStatementListItem(bool*)
      1    0.0%    0.0%  v8::internal::Parser::ParseStatementList(v8::internal::ZoneList<v8::internal::Statement*>*, int, bool*)
      1    0.0%    0.0%  v8::internal::Parser::ParseFunctionDeclaration(v8::internal::ZoneList<v8::internal::AstRawString const*>*, bool*)
      1    0.0%    0.0%  v8::internal::ParseInfo::ParseInfo(v8::internal::Zone*, v8::internal::Handle<v8::internal::Script>)
      1    0.0%    0.0%  v8::internal::MemoryChunk::Initialize(v8::internal::Heap*, unsigned char*, unsigned long, unsigned char*, unsigned char*, v8::internal::Executability, v8::internal::Space*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::ProcessAndClearWeakCells()
      1    0.0%    0.0%  v8::internal::Map::RawCopy(v8::internal::Handle<v8::internal::Map>, int)
      1    0.0%    0.0%  v8::internal::Malloced::New(unsigned long)
      1    0.0%    0.0%  v8::internal::LCodeGen::GenerateDeferredCode()
      1    0.0%    0.0%  v8::internal::LAllocator::Use(v8::internal::LifetimePosition, v8::internal::LifetimePosition, v8::internal::LOperand*, v8::internal::LOperand*)
      1    0.0%    0.0%  v8::internal::LAllocator::IsBlockBoundary(v8::internal::LifetimePosition)
      1    0.0%    0.0%  v8::internal::JSObject::TransitionElementsKind(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      1    0.0%    0.0%  v8::internal::HRedundantPhiEliminationPhase::Run()
      1    0.0%    0.0%  v8::internal::HGraph::SourcePositionToScriptPosition(v8::internal::SourcePosition)
      1    0.0%    0.0%  v8::internal::HBoundsCheckEliminationPhase::EliminateRedundantBoundsChecks(v8::internal::HBasicBlock*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IdentifyWeakHandles(bool (*)(v8::internal::Object**))
      1    0.0%    0.0%  v8::internal::GlobalHandles::DispatchPendingPhantomCallbacks(bool)
      1    0.0%    0.0%  v8::internal::FrameDescription::FrameDescription(unsigned int, v8::internal::JSFunction*)
      1    0.0%    0.0%  v8::internal::Deoptimizer::GetMaxDeoptTableSize()
      1    0.0%    0.0%  v8::internal::Deoptimizer::FindDeoptimizingCode(unsigned char*)
      1    0.0%    0.0%  v8::internal::Deoptimizer::DeoptimizeFunction(v8::internal::JSFunction*)
      1    0.0%    0.0%  v8::internal::CodeStub::PrintName(std::ostream&) const
      1    0.0%    0.0%  v8::internal::Code::Relocate(long)
      1    0.0%    0.0%  v8::internal::Builtins::InvokeApiFunction(v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
      1    0.0%    0.0%  v8::internal::AstNumberingVisitor::VisitUnaryOperation(v8::internal::UnaryOperation*)
      1    0.0%    0.0%  v8::internal::AstNumberingVisitor::VisitReference(v8::internal::Expression*)
      1    0.0%    0.0%  v8::V8::DisposeGlobal(v8::internal::Object**)
      1    0.0%    0.0%  v8::Isolate::RunMicrotasks()
      1    0.0%    0.0%  node::TimerWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  node::HandleWrap::OnClose(uv_handle_s*)
      1    0.0%    0.0%  int v8::internal::LinearSearch<(v8::internal::SearchMode)1, v8::internal::DescriptorArray>(v8::internal::DescriptorArray*, v8::internal::Name*, int, int, int*)
      1    0.0%    0.0%  int v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::JSObject::BodyDescriptor, int>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::SemiSpaceCopyObject<(v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      1    0.0%    0.0%  _mach_msg_send
      1    0.0%    0.0%  ___bsdthread_register

 [Summary]:
   ticks  total  nonlib   name
    321    0.4%    0.4%  JavaScript
  77552   95.7%   99.3%  C++
    149    0.2%    0.2%  GC
   2929    3.6%          Shared libraries
    204    0.3%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     78   19.6%    0.1%  v8::internal::Builtins::~Builtins()
     57   14.3%    0.1%  v8::internal::Runtime_NotifyStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
     40   10.1%    0.0%  _malloc_zone_malloc
     34    8.5%    0.0%  v8::internal::Runtime_ElementsTransitionAndStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
     16    4.0%    0.0%  v8::internal::TranslatedState::Init(unsigned char*, v8::internal::JSFunction*, v8::internal::TranslationIterator*, v8::internal::FixedArray*, v8::internal::RegisterValues*, __sFILE*)
     15    3.8%    0.0%  _uv_timer_start
     12    3.0%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     12    3.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
     11    2.8%    0.0%  _platform_task_update_threads
     10    2.5%    0.0%  v8::internal::Runtime_MapGrow(int, v8::internal::Object**, v8::internal::Isolate*)
      7    1.8%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      7    1.8%    0.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      7    1.8%    0.0%  _uv_close
      7    1.8%    0.0%  _malloc
      6    1.5%    0.0%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      6    1.5%    0.0%  v8::internal::Deoptimizer::DoComputeCompiledStubFrame(v8::internal::TranslationIterator*, int)
      5    1.3%    0.0%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      5    1.3%    0.0%  v8::internal::Runtime_NewObject(int, v8::internal::Object**, v8::internal::Isolate*)
      5    1.3%    0.0%  v8::Value::IsBoolean() const
      5    1.3%    0.0%  _malloc_default_zone
      4    1.0%    0.0%  v8::internal::TranslatedState::CreateNextTranslatedValue(int, int, v8::internal::TranslationIterator*, v8::internal::FixedArray*, unsigned char*, v8::internal::RegisterValues*, __sFILE*)
      4    1.0%    0.0%  v8::internal::TranslatedState::CreateNextTranslatedFrame(v8::internal::TranslationIterator*, v8::internal::FixedArray*, unsigned char*, v8::internal::JSFunction*, __sFILE*)
      4    1.0%    0.0%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      4    1.0%    0.0%  v8::internal::CodeStub::FindCodeInCache(v8::internal::Code**)
      4    1.0%    0.0%  node::HandleWrap* node::Unwrap<node::HandleWrap>(v8::Local<v8::Object>)
      4    1.0%    0.0%  _vm_region_recurse_64
      4    1.0%    0.0%  _create_scalable_zone
      3    0.8%    0.0%  v8::internal::Runtime::GetCallerArguments(v8::internal::Isolate*, int, int*)
      3    0.8%    0.0%  node::HandleWrap::Unref(v8::FunctionCallbackInfo<v8::Value> const&)
      2    0.5%    0.0%  v8::internal::TranslatedValue::GetRawValue() const
      2    0.5%    0.0%  v8::internal::Runtime_ToBooleanIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.5%    0.0%  v8::internal::Runtime_MapShrink(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.5%    0.0%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.5%    0.0%  v8::Number::Value() const
      2    0.5%    0.0%  std::deque<int, std::allocator<int> >::deque(std::deque<int, std::allocator<int> > const&)
      2    0.5%    0.0%  ___cxa_free_exception
      1    0.3%    0.0%  v8::internal::StringCharLoadGenerator::Generate(v8::internal::MacroAssembler*, v8::internal::Register, v8::internal::Register, v8::internal::Register, v8::internal::Label*)
      1    0.3%    0.0%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.3%    0.0%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.3%    0.0%  v8::internal::Deoptimizer::New(v8::internal::JSFunction*, v8::internal::Deoptimizer::BailoutType, unsigned int, unsigned char*, int, v8::internal::Isolate*)
      1    0.3%    0.0%  v8::internal::Deoptimizer::DeoptimizeFunction(v8::internal::JSFunction*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  73556   90.8%  ___bsdthread_ctl

   2741    3.4%  /usr/local/bin/node
```
