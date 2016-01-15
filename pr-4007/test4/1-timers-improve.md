test4.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) and the following applied:

(Note: This is effectively a memory leak.)

```diff
diff --git a/lib/timers.js b/lib/timers.js
index 9efc273..2973e04 100644
--- a/lib/timers.js
+++ b/lib/timers.js
@@ -164,9 +164,9 @@ function listOnTimeout() {
   assert(L.isEmpty(list));
   list.close();
   if (list._unrefed) {
-    delete unrefedLists[msecs];
+    unrefedLists[msecs] = undefined;
   } else {
-    delete refedLists[msecs];
+    refedLists[msecs] = undefined;
   }
 }
```

---

```
node --prof test4.js
```

Relevant `--prof` data:

```
Code move event for unknown code: 0x2e0909162ae0
Statistical profiling result from test4-1-timers-improve.log, (89754 ticks, 61 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     95    0.1%          /lib/x86_64-linux-gnu/libc-2.21.so
     23    0.0%          [vdso]
      1    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
     28    0.0%    0.0%  LazyCompile: *listOnTimeout timers.js:109:23
     15    0.0%    0.0%  Stub: JSEntryStub
     14    0.0%    0.0%  Builtin: JSEntryTrampoline
     10    0.0%    0.0%  LazyCompile: ~insert timers.js:79:16
      9    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16
      7    0.0%    0.0%  Builtin: Call
      6    0.0%    0.0%  Stub: CallApiAccessorStub
      5    0.0%    0.0%  Stub: LoadDictionaryElementStub
      5    0.0%    0.0%  Builtin: CallFunction
      4    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot
      3    0.0%    0.0%  LazyCompile: ~Module._compile module.js:367:37
      3    0.0%    0.0%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      3    0.0%    0.0%  Function: ~<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      2    0.0%    0.0%  Stub: RecordWriteStub {4}
      2    0.0%    0.0%  Stub: LoadConstantStub
      2    0.0%    0.0%  Stub: FastNewClosureStub
      2    0.0%    0.0%  Stub: CEntryStub
      2    0.0%    0.0%  LazyCompile: *isEmpty internal/linkedlist.js:54:17
      2    0.0%    0.0%  LazyCompile: *init internal/linkedlist.js:3:14
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {4}
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {2}
      2    0.0%    0.0%  Handler: An IC handler from the snapshot
      1    0.0%    0.0%  Stub: StoreFieldStub
      1    0.0%    0.0%  Stub: RecordWriteStub {5}
      1    0.0%    0.0%  Stub: RecordWriteStub {3}
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub {1}
      1    0.0%    0.0%  Stub: RecordWriteStub
      1    0.0%    0.0%  Stub: CallConstructStub
      1    0.0%    0.0%  LazyCompile: ~listOnTimeout timers.js:109:23
      1    0.0%    0.0%  LazyCompile: ~NativeModule.compile node.js:965:44
      1    0.0%    0.0%  LazyCompile: *debugs.(anonymous function) util.js:72:29
      1    0.0%    0.0%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1    0.0%    0.0%  KeyedStoreIC: A keyed store IC from the snapshot
      1    0.0%    0.0%  Handler: _idleTimeout
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {6}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {5}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {3}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      1    0.0%    0.0%  Builtin: HandleApiCall
      1    0.0%    0.0%  Builtin: ArgumentsAdaptorTrampoline

 [C++]:
   ticks  total  nonlib   name
  87483   97.5%   97.6%  syscall
    254    0.3%    0.3%  uv_timer_stop
    109    0.1%    0.1%  write
    101    0.1%    0.1%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
     78    0.1%    0.1%  __lll_lock_elision
     48    0.1%    0.1%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
     48    0.1%    0.1%  _IO_vfprintf
     47    0.1%    0.1%  uv__run_check
     40    0.0%    0.0%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     37    0.0%    0.0%  v8::internal::LookupIterator::Next()
     35    0.0%    0.0%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
     35    0.0%    0.0%  uv_run
     30    0.0%    0.0%  v8::Context::Enter()
     24    0.0%    0.0%  uv__run_timers
     24    0.0%    0.0%  node::TimerWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&)
     22    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     20    0.0%    0.0%  _IO_default_xsputn
     18    0.0%    0.0%  v8::internal::LookupIterator::GetRoot(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int)
     18    0.0%    0.0%  node::ClearIdle(uv_check_s*)
     17    0.0%    0.0%  v8::internal::Context::native_context()
     16    0.0%    0.0%  v8::Isolate::GetCpuProfiler()
     16    0.0%    0.0%  uv__io_poll
     16    0.0%    0.0%  node::Start(int, char**)
     15    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
     15    0.0%    0.0%  v8::CpuProfiler::SetIdle(bool)
     14    0.0%    0.0%  v8::internal::Logger::ApiEntryCall(char const*)
     14    0.0%    0.0%  v8::Object::Get(v8::Local<v8::Context>, unsigned int)
     14    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     14    0.0%    0.0%  node::TimerWrap::OnTimeout(uv_timer_s*)
     13    0.0%    0.0%  v8::Object::Get(unsigned int)
     13    0.0%    0.0%  __libc_malloc
     12    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
     12    0.0%    0.0%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
     12    0.0%    0.0%  v8::internal::MaybeHandle<v8::internal::Object> v8::internal::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::(anonymous namespace)::BuiltinArguments<(v8::internal::BuiltinExtraArguments)1>&) [clone .constprop.89]
     12    0.0%    0.0%  v8::Context::Exit()
     12    0.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
     12    0.0%    0.0%  node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*)
     12    0.0%    0.0%  __GI___pthread_mutex_lock
     11    0.0%    0.0%  v8::internal::LookupIterator::IsIntegerIndexedExotic(v8::internal::JSReceiver*)
     11    0.0%    0.0%  v8::internal::Code::CopyFrom(v8::internal::CodeDesc const&)
     10    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, true>::IsAllowed(v8::internal::Isolate*)
     10    0.0%    0.0%  v8::HandleScope::Initialize(v8::Isolate*)
     10    0.0%    0.0%  node::TimerWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
     10    0.0%    0.0%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
      9    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      9    0.0%    0.0%  v8::internal::JSObject::GetElementsAccessor()
      9    0.0%    0.0%  v8::HandleScope::~HandleScope()
      9    0.0%    0.0%  uv__hrtime
      9    0.0%    0.0%  sigemptyset
      9    0.0%    0.0%  __clock_gettime
      8    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      8    0.0%    0.0%  v8::Value::IsFunction() const
      7    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventExecute>::LogTimerEvent(v8::internal::Logger::StartEnd)
      7    0.0%    0.0%  v8::internal::RelocIterator::next()
      7    0.0%    0.0%  v8::internal::Object::GetProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
      7    0.0%    0.0%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      7    0.0%    0.0%  v8::internal::Map::ReconfigureProperty(v8::internal::Handle<v8::internal::Map>, int, v8::internal::PropertyKind, PropertyAttributes, v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >, v8::internal::StoreMode)
      7    0.0%    0.0%  v8::internal::LookupIterator::GetDataValue() const
      7    0.0%    0.0%  v8::internal::Isolate::FireCallCompletedCallback()
      7    0.0%    0.0%  v8::Value::IsExternal() const
      7    0.0%    0.0%  v8::Isolate::GetCurrentContext()
      7    0.0%    0.0%  c32rtomb
      7    0.0%    0.0%  __vsnprintf_chk
      6    0.0%    0.0%  v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, PropertyAttributes)
      6    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Get(v8::internal::Handle<v8::internal::FixedArrayBase>, unsigned int)
      6    0.0%    0.0%  v8::base::OS::VSNPrintF(char*, int, char const*, __va_list_tag*)
      6    0.0%    0.0%  v8::HandleScope::HandleScope(v8::Isolate*)
      6    0.0%    0.0%  uv_close
      6    0.0%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      6    0.0%    0.0%  fwrite
      6    0.0%    0.0%  __lll_unlock_elision
      6    0.0%    0.0%  __GI___pthread_getspecific
      5    0.0%    0.0%  v8::platform::DefaultPlatform::PumpMessageLoop(v8::Isolate*)
      5    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      5    0.0%    0.0%  v8::internal::Map::InstancesNeedRewriting(v8::internal::Map*, int, int, int, int*)
      5    0.0%    0.0%  v8::internal::Map::FindRootMap()
      5    0.0%    0.0%  v8::internal::Map::AsElementsKind(v8::internal::Handle<v8::internal::Map>, v8::internal::ElementsKind)
      5    0.0%    0.0%  v8::internal::Log::MessageBuilder::Append(char const*, ...)
      5    0.0%    0.0%  v8::internal::JSObject::MigrateToMap(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Map>, int)
      5    0.0%    0.0%  v8::internal::JSObject::MigrateFastToFast(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Map>)
      5    0.0%    0.0%  v8::internal::DescriptorArray::CanHoldValue(int, v8::internal::Object*)
      5    0.0%    0.0%  v8::internal::Code::FindHandlerForMap(v8::internal::Map*)
      5    0.0%    0.0%  v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, bool, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, v8::internal::Handle<v8::internal::Object>) [clone .constprop.24]
      5    0.0%    0.0%  v8::TryCatch::TryCatch(v8::Isolate*)
      5    0.0%    0.0%  v8::TryCatch::HasCaught() const
      5    0.0%    0.0%  uv__run_prepare
      4    0.0%    0.0%  v8::platform::PumpMessageLoop(v8::Platform*, v8::Isolate*)
      4    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Lub(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      4    0.0%    0.0%  v8::internal::TransitionArray::SearchSpecial(v8::internal::Map*, v8::internal::Symbol*)
      4    0.0%    0.0%  v8::internal::PagedSpace::AllocateRawUnaligned(int)
      4    0.0%    0.0%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      4    0.0%    0.0%  v8::internal::Map::PrepareForDataProperty(v8::internal::Handle<v8::internal::Map>, int, v8::internal::Handle<v8::internal::Object>)
      4    0.0%    0.0%  v8::internal::Log::MessageBuilder::AppendDetailed(v8::internal::String*, bool)
      4    0.0%    0.0%  v8::internal::IncrementalMarking::WhiteToGreyAndPush(v8::internal::HeapObject*, v8::internal::MarkBit) [clone .isra.70]
      4    0.0%    0.0%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
      4    0.0%    0.0%  v8::internal::FunctionTemplateInfo::GetCompatibleReceiver(v8::internal::Isolate*, v8::internal::Object*)
      4    0.0%    0.0%  v8::Object::InternalFieldCount()
      4    0.0%    0.0%  v8::Locker::IsActive()
      4    0.0%    0.0%  v8::External::Value() const
      4    0.0%    0.0%  v8::EscapableHandleScope::EscapableHandleScope(v8::Isolate*)
      4    0.0%    0.0%  v8::(anonymous namespace)::CallDepthScope::~CallDepthScope()
      4    0.0%    0.0%  uv__epoll_pwait
      4    0.0%    0.0%  node::SetIdle(uv_prepare_s*)
      3    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      3    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SimplyEquals(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      3    0.0%    0.0%  v8::internal::StoreIC::LookupForWrite(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::Object::StoreFromKeyed)
      3    0.0%    0.0%  v8::internal::StoreBuffer::Compact()
      3    0.0%    0.0%  v8::internal::SemiSpace::GrowTo(int)
      3    0.0%    0.0%  v8::internal::ScavengeVisitor::VisitPointer(v8::internal::Object**)
      3    0.0%    0.0%  v8::internal::Scanner::ScanIdentifierOrKeyword()
      3    0.0%    0.0%  v8::internal::Scanner::Scan()
      3    0.0%    0.0%  v8::internal::SaveContext::SaveContext(v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::PropertyAccessCompiler::TailCallBuiltin(v8::internal::MacroAssembler*, v8::internal::Builtins::Name)
      3    0.0%    0.0%  v8::internal::Object::SetProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode, v8::internal::Object::StoreFromKeyed)
      3    0.0%    0.0%  v8::internal::Map::GeneralizeFieldType(v8::internal::Handle<v8::internal::Map>, int, v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >)
      3    0.0%    0.0%  v8::internal::Logger::CodeCreateEvent(v8::internal::Logger::LogEventsAndTags, v8::internal::Code*, v8::internal::Name*)
      3    0.0%    0.0%  v8::internal::JSObject::GetElementsTransitionMap(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      3    0.0%    0.0%  v8::internal::IncrementalMarkingRootMarkingVisitor::VisitPointer(v8::internal::Object**)
      3    0.0%    0.0%  v8::internal::IC::IC(v8::internal::IC::FrameDepth, v8::internal::Isolate*, v8::internal::FeedbackNexus*)
      3    0.0%    0.0%  v8::internal::Heap::OnAllocationEvent(v8::internal::HeapObject*, int)
      3    0.0%    0.0%  v8::internal::Heap::AllocateRaw(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment)
      3    0.0%    0.0%  v8::internal::HandleScope::Extend(v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::HandleScope::DeleteExtensions(v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::Isolate::RunMicrotasks()
      3    0.0%    0.0%  uv__run_idle
      3    0.0%    0.0%  strchrnul
      3    0.0%    0.0%  sigaddset
      3    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      3    0.0%    0.0%  _init
      2    0.0%    0.0%  v8::internal::Zone::New(unsigned long)
      2    0.0%    0.0%  v8::internal::UpdatePrototypeUserRegistration(v8::internal::Handle<v8::internal::Map>, v8::internal::Handle<v8::internal::Map>, v8::internal::Isolate*) [clone .constprop.518]
      2    0.0%    0.0%  v8::internal::UpdatePointer(v8::internal::HeapObject**, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SlowIs(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SemanticIs(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::Iterator<v8::internal::Map>::Current()
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::Iterator<v8::internal::Map>::Advance()
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::ClassType::Lub()
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Lub(v8::internal::Map*)
      2    0.0%    0.0%  v8::internal::TransitionArray::SearchTransition(v8::internal::Map*, v8::internal::PropertyKind, v8::internal::Name*, PropertyAttributes)
      2    0.0%    0.0%  v8::internal::String::CalculateLineEnds(v8::internal::Handle<v8::internal::String>, bool)
      2    0.0%    0.0%  v8::internal::StoreIC::Store(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Object>, v8::internal::Object::StoreFromKeyed)
      2    0.0%    0.0%  v8::internal::StoreDescriptor::ReceiverRegister()
      2    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::RelocIterator::RelocIterator(v8::internal::Code*, int)
      2    0.0%    0.0%  v8::internal::PropertyICCompiler::GetCode(v8::internal::Code::Kind, v8::internal::Code::StubType, v8::internal::Handle<v8::internal::Name>, v8::internal::InlineCacheState)
      2    0.0%    0.0%  v8::internal::PropertyICCompiler::ComputeMonomorphic(v8::internal::Code::Kind, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Map>, v8::internal::Handle<v8::internal::Code>, int)
      2    0.0%    0.0%  v8::internal::Object::SetPropertyInternal(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode, v8::internal::Object::StoreFromKeyed, bool*)
      2    0.0%    0.0%  v8::internal::Object::AddDataProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, PropertyAttributes, v8::internal::LanguageMode, v8::internal::Object::StoreFromKeyed)
      2    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      2    0.0%    0.0%  v8::internal::Map::TransitionElementsTo(v8::internal::Handle<v8::internal::Map>, v8::internal::ElementsKind)
      2    0.0%    0.0%  v8::internal::LookupIterator::LookupIterator(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int, v8::internal::LookupIterator::Configuration)
      2    0.0%    0.0%  v8::internal::Logger::ApiObjectAccess(char const*, v8::internal::JSObject*)
      2    0.0%    0.0%  v8::internal::LayoutDescriptorHelper::LayoutDescriptorHelper(v8::internal::Map*)
      2    0.0%    0.0%  v8::internal::LAllocator::AllocateRegisters()
      2    0.0%    0.0%  v8::internal::JSObject::UpdateAllocationSite(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      2    0.0%    0.0%  v8::internal::JSObject::HasFastProperties()
      2    0.0%    0.0%  v8::internal::Isolate::UnregisterTryCatchHandler(v8::TryCatch*)
      2    0.0%    0.0%  v8::internal::InvalidatePrototypeChainsInternal(v8::internal::Map*)
      2    0.0%    0.0%  v8::internal::InnerPointerToCodeCache::GcSafeFindCodeForInnerPointer(unsigned char*)
      2    0.0%    0.0%  v8::internal::IncrementalMarking::RecordWriteSlow(v8::internal::HeapObject*, v8::internal::Object**, v8::internal::Object*)
      2    0.0%    0.0%  v8::internal::IC::OnTypeFeedbackChanged(v8::internal::Isolate*, unsigned char*, v8::internal::InlineCacheState, v8::internal::InlineCacheState, bool)
      2    0.0%    0.0%  v8::internal::HeapObject::SizeFromMap(v8::internal::Map*)
      2    0.0%    0.0%  v8::internal::Heap::DoScavenge(v8::internal::ObjectVisitor*, unsigned char*)
      2    0.0%    0.0%  v8::internal::Heap::AllocateFixedArray(int, v8::internal::PretenureFlag)
      2    0.0%    0.0%  v8::internal::GlobalHandles::IterateStrongRoots(v8::internal::ObjectVisitor*)
      2    0.0%    0.0%  v8::internal::GlobalHandles::IterateNewSpaceStrongAndDependentRoots(v8::internal::ObjectVisitor*)
      2    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::FixedArray::BodyDescriptor, int>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::Factory::NewFunctionFromSharedFunctionInfo(v8::internal::Handle<v8::internal::SharedFunctionInfo>, v8::internal::Handle<v8::internal::Context>, v8::internal::PretenureFlag)
      2    0.0%    0.0%  v8::internal::Factory::NewCode(v8::internal::CodeDesc const&, unsigned int, v8::internal::Handle<v8::internal::Object>, bool, bool, int, bool)
      2    0.0%    0.0%  v8::internal::CodeCache::UpdateDefaultCache(v8::internal::Handle<v8::internal::CodeCache>, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Code>)
      2    0.0%    0.0%  v8::internal::CodeCache::Lookup(v8::internal::Name*, unsigned int)
      2    0.0%    0.0%  v8::internal::AstValueFactory::GetOneByteStringInternal(v8::internal::Vector<unsigned char const>)
      2    0.0%    0.0%  v8::internal::Assembler::emit_operand(int, v8::internal::Operand const&)
      2    0.0%    0.0%  v8::internal::Assembler::arithmetic_op(unsigned char, v8::internal::Register, v8::internal::Operand const&, int)
      2    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetDetails(v8::internal::FixedArrayBase*, unsigned int)
      2    0.0%    0.0%  v8::internal::(anonymous namespace)::ConfigureInstance(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::TemplateInfo>) [clone .constprop.31]
      2    0.0%    0.0%  v8::base::Thread::GetThreadLocal(int)
      2    0.0%    0.0%  v8::TryCatch::~TryCatch()
      2    0.0%    0.0%  operator new(unsigned long)
      2    0.0%    0.0%  node::HandleWrap::Unref(v8::FunctionCallbackInfo<v8::Value> const&)
      2    0.0%    0.0%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      2    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.204]
      2    0.0%    0.0%  fflush
      2    0.0%    0.0%  _IO_file_xsputn
      1    0.0%    0.0%  void v8::internal::Scanner::Advance<false, true>()
      1    0.0%    0.0%  v8::internal::Variable::Variable(v8::internal::Scope*, v8::internal::AstRawString const*, v8::internal::VariableMode, v8::internal::Variable::Kind, v8::internal::InitializationFlag, v8::internal::MaybeAssignedFlag)
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::IsClass()
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::ClassType::Map()
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Glb(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      1    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventIcMiss>::LogTimerEvent(v8::internal::Logger::StartEnd)
      1    0.0%    0.0%  v8::internal::ThreadId::GetCurrentThreadId()
      1    0.0%    0.0%  v8::internal::String::GetFlatContent()
      1    0.0%    0.0%  v8::internal::StaticNewSpaceVisitor<v8::internal::StaticScavengeVisitor>::VisitFreeSpace(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitSharedFunctionInfoStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitSharedFunctionInfo(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::SnapshotByteSource::CopyRaw(unsigned char*, int)
      1    0.0%    0.0%  v8::internal::SharedFunctionInfo::set_name(v8::internal::Object*, v8::internal::WriteBarrierMode) [clone .part.99]
      1    0.0%    0.0%  v8::internal::Scope::Scope(v8::internal::Zone*, v8::internal::Scope*, v8::internal::ScopeType, v8::internal::AstValueFactory*, v8::internal::FunctionKind)
      1    0.0%    0.0%  v8::internal::Scavenger::ScavengeObjectSlow(v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::Scanner::Next()
      1    0.0%    0.0%  v8::internal::Runtime::SetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      1    0.0%    0.0%  v8::internal::Runtime::GetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      1    0.0%    0.0%  v8::internal::RelocInfoWriter::Write(v8::internal::RelocInfo const*)
      1    0.0%    0.0%  v8::internal::PropertyICCompiler::CompilePolymorphic(v8::internal::List<v8::internal::Handle<v8::internal::Map>, v8::internal::FreeStoreAllocationPolicy>*, v8::internal::List<v8::internal::Handle<v8::internal::Code>, v8::internal::FreeStoreAllocationPolicy>*, v8::internal::Handle<v8::internal::Name>, v8::internal::Code::StubType, v8::internal::IcCheckType)
      1    0.0%    0.0%  v8::internal::PropertyHandlerCompiler::Find(v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Map>, v8::internal::Code::Kind, v8::internal::CacheHolderFlag, v8::internal::Code::StubType)
      1    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointer(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)1, false>::IsAllowed(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Object::OptimalType(v8::internal::Isolate*, v8::internal::Representation)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::EvacuateNewSpaceAndCandidates()
      1    0.0%    0.0%  v8::internal::Map::FindInCodeCache(v8::internal::Name*, unsigned int)
      1    0.0%    0.0%  v8::internal::Map::AddDependentCode(v8::internal::Handle<v8::internal::Map>, v8::internal::DependentCode::DependencyGroup, v8::internal::Handle<v8::internal::Code>)
      1    0.0%    0.0%  v8::internal::Malloced::Delete(void*)
      1    0.0%    0.0%  v8::internal::MacroAssembler::CmpWeakValue(v8::internal::Register, v8::internal::Handle<v8::internal::WeakCell>, v8::internal::Register)
      1    0.0%    0.0%  v8::internal::LookupIterator::WriteDataValue(v8::internal::Handle<v8::internal::Object>)
      1    0.0%    0.0%  v8::internal::LookupIterator::PrepareForDataProperty(v8::internal::Handle<v8::internal::Object>)
      1    0.0%    0.0%  v8::internal::Log::MessageBuilder::Append(char)
      1    0.0%    0.0%  v8::internal::List<int, v8::internal::ZoneAllocationPolicy>::Add(int const&, v8::internal::ZoneAllocationPolicy)
      1    0.0%    0.0%  v8::internal::LGoto::opcode() const
      1    0.0%    0.0%  v8::internal::LAllocator::ProcessInstructions(v8::internal::HBasicBlock*, v8::internal::BitVector*)
      1    0.0%    0.0%  v8::internal::Isolate::random_number_generator()
      1    0.0%    0.0%  v8::internal::Isolate::native_context()
      1    0.0%    0.0%  v8::internal::Isolate::UpdateArrayProtectorOnSetElement(v8::internal::Handle<v8::internal::JSObject>)
      1    0.0%    0.0%  v8::internal::Isolate::RegisterTryCatchHandler(v8::TryCatch*)
      1    0.0%    0.0%  v8::internal::IsMoreGeneralElementsKindTransition(v8::internal::ElementsKind, v8::internal::ElementsKind)
      1    0.0%    0.0%  v8::internal::IC::UpdateState(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>)
      1    0.0%    0.0%  v8::internal::IC::UpdatePolymorphicIC(v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Code>)
      1    0.0%    0.0%  v8::internal::IC::TryRemoveInvalidPrototypeDependentStub(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::String>)
      1    0.0%    0.0%  v8::internal::IC::SetTargetAtAddress(unsigned char*, v8::internal::Code*, unsigned char*)
      1    0.0%    0.0%  v8::internal::IC::FindTargetMaps()
      1    0.0%    0.0%  v8::internal::HeapTypeConfig::is_struct(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*, int) [clone .constprop.75]
      1    0.0%    0.0%  v8::internal::HeapObject::IterateBody(v8::internal::InstanceType, int, v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::Heap::IterateAndMarkPointersToFromSpace(v8::internal::HeapObject*, unsigned char*, unsigned char*, bool, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      1    0.0%    0.0%  v8::internal::Heap::ExternalStringTable::CleanUp()
      1    0.0%    0.0%  v8::internal::Heap::CreateFillerObjectAt(unsigned char*, int)
      1    0.0%    0.0%  v8::internal::Heap::AllocateCode(int, bool)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::StringTable, v8::internal::StringTableShape, v8::internal::HashTableKey*>::FindEntry(v8::internal::Isolate*, v8::internal::HashTableKey*)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindEntry(v8::internal::Isolate*, unsigned int)
      1    0.0%    0.0%  v8::internal::HRangeAnalysisPhase::Run()
      1    0.0%    0.0%  v8::internal::HPhi::RequiredInputRepresentation(int)
      1    0.0%    0.0%  v8::internal::HOptimizedGraphBuilder::InliningAstSize(v8::internal::Handle<v8::internal::JSFunction>)
      1    0.0%    0.0%  v8::internal::HGraph::CollectPhis()
      1    0.0%    0.0%  v8::internal::HFlowEngine<v8::internal::HLoadEliminationTable, v8::internal::HLoadEliminationEffects>::AnalyzeDominatedBlocks(v8::internal::HBasicBlock*, v8::internal::HLoadEliminationTable*)
      1    0.0%    0.0%  v8::internal::HFlowEngine<v8::internal::HCheckTable, v8::internal::HCheckMapsEffects>::ComputeLoopEffects(v8::internal::HBasicBlock*)
      1    0.0%    0.0%  v8::internal::HEnvironmentLivenessAnalysisPhase::HEnvironmentLivenessAnalysisPhase(v8::internal::HGraph*)
      1    0.0%    0.0%  v8::internal::HCheckTable::Copy(v8::internal::HBasicBlock*, v8::internal::HBasicBlock*, v8::internal::Zone*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::UpdateListOfNewSpaceNodes()
      1    0.0%    0.0%  v8::internal::GlobalHandles::PostMarkSweepProcessing(int)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateAllRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IdentifyWeakHandles(bool (*)(v8::internal::Object**))
      1    0.0%    0.0%  v8::internal::GetFieldType(v8::internal::Isolate*, v8::internal::Handle<v8::internal::DescriptorArray>, int, v8::internal::PropertyLocation, v8::internal::Representation) [clone .constprop.501]
      1    0.0%    0.0%  v8::internal::GCTracer::AddIncrementalMarkingStep(double, long)
      1    0.0%    0.0%  v8::internal::FunctionTemplateInfo::IsTemplateFor(v8::internal::Map*) [clone .part.239]
      1    0.0%    0.0%  v8::internal::FunctionCallbackArguments::Call(void (*)(v8::FunctionCallbackInfo<v8::Value> const&))
      1    0.0%    0.0%  v8::internal::FullCodeGenerator::MakeCode(v8::internal::CompilationInfo*)
      1    0.0%    0.0%  v8::internal::FreeList::FindNodeFor(int, int*)
      1    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedArray::BodyDescriptor, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::Deserializer::ReadData(v8::internal::Object**, v8::internal::Object**, int, unsigned char*)
      1    0.0%    0.0%  v8::internal::Deserializer::GetBackReferencedObject(int)
      1    0.0%    0.0%  v8::internal::CreateObjectLiteralBoilerplate(v8::internal::Isolate*, v8::internal::Handle<v8::internal::LiteralsArray>, v8::internal::Handle<v8::internal::FixedArray>, bool, bool, bool) [clone .constprop.30]
      1    0.0%    0.0%  v8::internal::CpuFeatures::FlushICache(void*, unsigned long)
      1    0.0%    0.0%  v8::internal::CodeCache::LookupDefaultCache(v8::internal::Name*, unsigned int)
      1    0.0%    0.0%  v8::internal::Code::FindHandlers(v8::internal::List<v8::internal::Handle<v8::internal::Code>, v8::internal::FreeStoreAllocationPolicy>*, int)
      1    0.0%    0.0%  v8::internal::Code::FindFirstMap()
      1    0.0%    0.0%  v8::internal::AstValue::IsPropertyName() const
      1    0.0%    0.0%  v8::internal::Assembler::jmp(v8::internal::Handle<v8::internal::Code>, v8::internal::RelocInfo::Mode)
      1    0.0%    0.0%  v8::internal::Assembler::j(v8::internal::Condition, v8::internal::Label*, v8::internal::Label::Distance)
      1    0.0%    0.0%  v8::internal::ApiNatives::ConfigureInstance(v8::internal::Isolate*, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::JSObject>)
      1    0.0%    0.0%  v8::internal::AllocationSiteCreationContext::ExitScope(v8::internal::Handle<v8::internal::AllocationSite>, v8::internal::Handle<v8::internal::JSObject>)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleyObjectElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)3> >::GrowCapacityAndConvertImpl(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::CopyObjectToObjectElements(v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, int)
      1    0.0%    0.0%  v8::base::RandomNumberGenerator::Next(int)
      1    0.0%    0.0%  v8::TryCatch::SetVerbose(bool)
      1    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::~SuppressMicrotaskExecutionScope()
      1    0.0%    0.0%  v8::EscapableHandleScope::Escape(v8::internal::Object**)
      1    0.0%    0.0%  uv_update_time
      1    0.0%    0.0%  uv_now
      1    0.0%    0.0%  uv__next_timeout
      1    0.0%    0.0%  mmap
      1    0.0%    0.0%  cfree
      1    0.0%    0.0%  __lll_unlock_wake
      1    0.0%    0.0%  _IO_file_write
      1    0.0%    0.0%  _IO_file_sync

 [Summary]:
   ticks  total  nonlib   name
    149    0.2%    0.2%  JavaScript
  89425   99.6%   99.8%  C++
    190    0.2%    0.2%  GC
    119    0.1%          Shared libraries
     61    0.1%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
    486   66.4%    0.5%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
     61    8.3%    0.1%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     61    8.3%    0.1%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
     26    3.6%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     15    2.0%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     13    1.8%    0.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      8    1.1%    0.0%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      7    1.0%    0.0%  v8::Value::IsExternal() const
      6    0.8%    0.0%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      6    0.8%    0.0%  uv_close
      6    0.8%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      4    0.5%    0.0%  v8::internal::Runtime_StackGuard(int, v8::internal::Object**, v8::internal::Isolate*)
      4    0.5%    0.0%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      4    0.5%    0.0%  v8::Object::InternalFieldCount()
      4    0.5%    0.0%  v8::External::Value() const
      3    0.4%    0.0%  v8::internal::Runtime_NewClosure(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.4%    0.0%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.3%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.3%    0.0%  v8::Value::IsFunction() const
      2    0.3%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.1%    0.0%  v8::internal::Runtime_ToFastProperties(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.1%    0.0%  v8::internal::Runtime_ToBooleanIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.1%    0.0%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.1%    0.0%  v8::internal::Runtime_KeyedStoreIC_Slow(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.1%    0.0%  v8::internal::Runtime_BinaryOpIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.1%    0.0%  v8::internal::HeapObject::SizeFromMap(v8::internal::Map*)
      1    0.1%    0.0%  uv_update_time
      1    0.1%    0.0%  uv_now
      1    0.1%    0.0%  uv__hrtime

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  87483   97.5%  syscall
```
