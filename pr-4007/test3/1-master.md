test3.js on `master @ 0b43c08`.

```
node --prof test3.js
```

Relevant `--prof` data:

```
Statistical profiling result from test3-3-master.log, (89623 ticks, 70 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     17    0.0%          [vdso]
      3    0.0%          /lib/x86_64-linux-gnu/libc-2.21.so

 [JavaScript]:
   ticks  total  nonlib   name
  36431   40.6%   40.7%  LazyCompile: *unrefTimeout timers.js:532:22
     86    0.1%    0.1%  Stub: GrowArrayElementsStub
     38    0.0%    0.0%  Stub: JSEntryStub
     27    0.0%    0.0%  Builtin: JSEntryTrampoline
     25    0.0%    0.0%  Builtin: Call
     19    0.0%    0.0%  LazyCompile: _runOnTimeout timers.js:522:23
     18    0.0%    0.0%  Builtin: CallFunction
      6    0.0%    0.0%  Stub: LoadICStub
      4    0.0%    0.0%  Stub: CallFunctionStub_Args2
      4    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      3    0.0%    0.0%  Stub: StoreFieldStub
      3    0.0%    0.0%  Handler: An IC handler from the snapshot {2}
      2    0.0%    0.0%  Stub: ToBooleanStub
      2    0.0%    0.0%  LazyCompile: ~_onTimeout /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:8:34
      2    0.0%    0.0%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test3/test3.js:1:11
      1    0.0%    0.0%  Stub: StoreTransitionStub
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub {1}
      1    0.0%    0.0%  Stub: RecordWriteStub
      1    0.0%    0.0%  Stub: CallApiAccessorStub
      1    0.0%    0.0%  Stub: CEntryStub
      1    0.0%    0.0%  LazyCompile: ~startup node.js:13:19
      1    0.0%    0.0%  LazyCompile: *remove internal/linkedlist.js:28:16
      1    0.0%    0.0%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
      1    0.0%    0.0%  Handler: An IC handler from the snapshot
      1    0.0%    0.0%  Builtin: CompileLazy

 [C++]:
   ticks  total  nonlib   name
  51902   57.9%   57.9%  syscall
     93    0.1%    0.1%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     41    0.0%    0.0%  v8::internal::Context::native_context()
     38    0.0%    0.0%  v8::internal::LookupIterator::Next()
     34    0.0%    0.0%  v8::External::Value() const
     32    0.0%    0.0%  v8::internal::Object::GetProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
     32    0.0%    0.0%  v8::Value::IsExternal() const
     32    0.0%    0.0%  node::TimerWrap::OnTimeout(uv_timer_s*)
     28    0.0%    0.0%  node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*)
     26    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
     26    0.0%    0.0%  v8::Context::Enter()
     22    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     19    0.0%    0.0%  v8::internal::LookupIterator::GetRoot(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int)
     17    0.0%    0.0%  node::TimerWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&)
     16    0.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
     15    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, true>::IsAllowed(v8::internal::Isolate*)
     15    0.0%    0.0%  v8::Object::Get(unsigned int)
     13    0.0%    0.0%  v8::Value::IsFunction() const
     12    0.0%    0.0%  v8::internal::MaybeHandle<v8::internal::Object> v8::internal::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::(anonymous namespace)::BuiltinArguments<(v8::internal::BuiltinExtraArguments)1>&) [clone .constprop.89]
     12    0.0%    0.0%  v8::internal::FunctionTemplateInfo::IsTemplateFor(v8::internal::Map*) [clone .part.239]
     12    0.0%    0.0%  v8::Object::Get(v8::Local<v8::Context>, unsigned int)
     12    0.0%    0.0%  v8::Isolate::GetCurrentContext()
     12    0.0%    0.0%  v8::Context::Exit()
     11    0.0%    0.0%  v8::internal::Compiler::GetLazyCode(v8::internal::Handle<v8::internal::JSFunction>)
     11    0.0%    0.0%  uv_timer_stop
     11    0.0%    0.0%  uv_run
     11    0.0%    0.0%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
     10    0.0%    0.0%  v8::internal::Logger::ApiEntryCall(char const*)
     10    0.0%    0.0%  uv__run_check
     10    0.0%    0.0%  __lll_lock_elision
      9    0.0%    0.0%  v8::internal::LookupIterator::IsIntegerIndexedExotic(v8::internal::JSReceiver*)
      9    0.0%    0.0%  v8::HandleScope::Initialize(v8::Isolate*)
      9    0.0%    0.0%  uv_now
      9    0.0%    0.0%  __GI___pthread_getspecific
      8    0.0%    0.0%  v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, bool, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, v8::internal::Handle<v8::internal::Object>) [clone .constprop.24]
      8    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
      8    0.0%    0.0%  uv__run_timers
      7    0.0%    0.0%  v8::internal::JSObject::GetElementsAccessor()
      7    0.0%    0.0%  v8::internal::Isolate::RegisterTryCatchHandler(v8::TryCatch*)
      7    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Get(v8::internal::Handle<v8::internal::FixedArrayBase>, unsigned int)
      7    0.0%    0.0%  v8::TryCatch::TryCatch(v8::Isolate*)
      7    0.0%    0.0%  v8::Isolate::GetCpuProfiler()
      7    0.0%    0.0%  v8::HandleScope::~HandleScope()
      7    0.0%    0.0%  v8::CpuProfiler::SetIdle(bool)
      7    0.0%    0.0%  __clock_gettime
      6    0.0%    0.0%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      6    0.0%    0.0%  v8::internal::LookupIterator::GetDataValue() const
      6    0.0%    0.0%  v8::internal::FunctionTemplateInfo::GetCompatibleReceiver(v8::internal::Isolate*, v8::internal::Object*)
      6    0.0%    0.0%  uv__io_poll
      6    0.0%    0.0%  uv__hrtime
      5    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventExecute>::LogTimerEvent(v8::internal::Logger::StartEnd)
      5    0.0%    0.0%  v8::internal::HandleScope::Extend(v8::internal::Isolate*)
      5    0.0%    0.0%  v8::TryCatch::SetVerbose(bool)
      5    0.0%    0.0%  v8::EscapableHandleScope::EscapableHandleScope(v8::Isolate*)
      5    0.0%    0.0%  node::Start(int, char**)
      5    0.0%    0.0%  _init
      4    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      4    0.0%    0.0%  v8::internal::Isolate::RunMicrotasks()
      4    0.0%    0.0%  v8::internal::FunctionCallbackArguments::Call(void (*)(v8::FunctionCallbackInfo<v8::Value> const&))
      4    0.0%    0.0%  v8::base::Thread::GetThreadLocal(int)
      4    0.0%    0.0%  v8::HandleScope::HandleScope(v8::Isolate*)
      4    0.0%    0.0%  v8::EscapableHandleScope::Escape(v8::internal::Object**)
      3    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      3    0.0%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
      3    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetDetails(v8::internal::FixedArrayBase*, unsigned int)
      3    0.0%    0.0%  v8::base::TimeTicks::HighResolutionNow()
      3    0.0%    0.0%  v8::base::Mutex::Lock()
      3    0.0%    0.0%  v8::(anonymous namespace)::CallDepthScope::~CallDepthScope()
      3    0.0%    0.0%  uv__run_idle
      3    0.0%    0.0%  sigemptyset
      3    0.0%    0.0%  __GI___pthread_mutex_lock
      2    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      2    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      2    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::SemiSpace::GrowTo(int)
      2    0.0%    0.0%  v8::internal::SaveContext::SaveContext(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      2    0.0%    0.0%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      2    0.0%    0.0%  v8::internal::LookupIterator::LookupIterator(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int, v8::internal::LookupIterator::Configuration)
      2    0.0%    0.0%  v8::internal::Isolate::UnregisterTryCatchHandler(v8::TryCatch*)
      2    0.0%    0.0%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::Isolate::RunMicrotasks()
      2    0.0%    0.0%  uv__run_prepare
      2    0.0%    0.0%  node::ClearIdle(uv_check_s*)
      2    0.0%    0.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::SemiSpaceCopyObject<(v8::internal::AllocationAlignment)1>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      2    0.0%    0.0%  __libc_malloc
      1    0.0%    0.0%  write
      1    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)0, (v8::internal::AllocationAlignment)1>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      1    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<48>(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  void v8::internal::Code::CodeIterateBody<v8::internal::IncrementalMarkingMarkingVisitor>(v8::internal::Heap*)
      1    0.0%    0.0%  v8::internal::Zone::New(unsigned long)
      1    0.0%    0.0%  v8::internal::TranslatedState::Init(unsigned char*, v8::internal::JSFunction*, v8::internal::TranslationIterator*, v8::internal::FixedArray*, v8::internal::RegisterValues*, _IO_FILE*)
      1    0.0%    0.0%  v8::internal::ThreadId::GetCurrentThreadId()
      1    0.0%    0.0%  v8::internal::String::CalculateLineEnds(v8::internal::Handle<v8::internal::String>, bool)
      1    0.0%    0.0%  v8::internal::StackGuard::HandleInterrupts()
      1    0.0%    0.0%  v8::internal::SerializerDeserializer::Iterate(v8::internal::Isolate*, v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::Scope::AllocateVariablesRecursively(v8::internal::Isolate*) [clone .part.131] [clone .constprop.134]
      1    0.0%    0.0%  v8::internal::Scavenger::ScavengeObjectSlow(v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::Scanner::Initialize(v8::internal::Utf16CharacterStream*)
      1    0.0%    0.0%  v8::internal::RuntimeProfiler::OptimizeNow()
      1    0.0%    0.0%  v8::internal::RelocInfoWriter::FlushPosition() [clone .part.47]
      1    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)1, false>::IsAllowed(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseExpression(bool, bool*)
      1    0.0%    0.0%  v8::internal::ParserBase<v8::internal::ParserTraits>::Expect(v8::internal::Token::Value, bool*)
      1    0.0%    0.0%  v8::internal::OptimizingCompileDispatcher::IsQueuedForOSR(v8::internal::JSFunction*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::EvacuateLiveObjectsFromPage(v8::internal::Page*, v8::internal::PagedSpace*, v8::internal::SlotsBuffer**)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      1    0.0%    0.0%  v8::internal::Map::CopyDropDescriptors(v8::internal::Handle<v8::internal::Map>)
      1    0.0%    0.0%  v8::internal::LCodeGen::DoBranch(v8::internal::LBranch*)
      1    0.0%    0.0%  v8::internal::Isolate::FireCallCompletedCallback()
      1    0.0%    0.0%  v8::internal::Heap::IterateAndMarkPointersToFromSpace(v8::internal::HeapObject*, unsigned char*, unsigned char*, bool, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      1    0.0%    0.0%  v8::internal::Heap::DoScavenge(v8::internal::ObjectVisitor*, unsigned char*)
      1    0.0%    0.0%  v8::internal::Heap::CopyJSObject(v8::internal::JSObject*, v8::internal::AllocationSite*)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::StringTable, v8::internal::StringTableShape, v8::internal::HashTableKey*>::FindEntry(v8::internal::Isolate*, v8::internal::HashTableKey*)
      1    0.0%    0.0%  v8::internal::HandleScope::DeleteExtensions(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::HOptimizedGraphBuilder::PropertyAccessInfo::LookupDescriptor(v8::internal::Map*, v8::internal::Name*)
      1    0.0%    0.0%  v8::internal::HFlowEngine<v8::internal::State, v8::internal::Effects>::AnalyzeDominatedBlocks(v8::internal::HBasicBlock*, v8::internal::State*)
      1    0.0%    0.0%  v8::internal::HDeadCodeEliminationPhase::MarkLive(v8::internal::HValue*, v8::internal::ZoneList<v8::internal::HValue*>*)
      1    0.0%    0.0%  v8::internal::FreeList::Free(unsigned char*, int)
      1    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedArray::BodyDescriptor, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::FixedArray::set(int, v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::Factory::NewFixedArray(int, v8::internal::PretenureFlag)
      1    0.0%    0.0%  v8::internal::CompilationInfo::scope() const
      1    0.0%    0.0%  v8::internal::Assembler::pushq(v8::internal::Register)
      1    0.0%    0.0%  v8::internal::Assembler::bind(v8::internal::Label*)
      1    0.0%    0.0%  v8::base::OS::TimeCurrentMillis()
      1    0.0%    0.0%  v8::TryCatch::HasCaught() const
      1    0.0%    0.0%  v8::Locker::IsActive()
      1    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::~SuppressMicrotaskExecutionScope()
      1    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::SuppressMicrotaskExecutionScope(v8::Isolate*)
      1    0.0%    0.0%  uv__epoll_pwait
      1    0.0%    0.0%  operator new[](unsigned long)
      1    0.0%    0.0%  non-virtual thunk to v8::internal::HOptimizedGraphBuilder::VisitUnaryOperation(v8::internal::UnaryOperation*)
      1    0.0%    0.0%  node::SetIdle(uv_prepare_s*)
      1    0.0%    0.0%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  mmap
      1    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      1    0.0%    0.0%  cfree
      1    0.0%    0.0%  __lll_unlock_elision

 [Summary]:
   ticks  total  nonlib   name
  36681   40.9%   40.9%  JavaScript
  52852   59.0%   59.0%  C++
     31    0.0%    0.0%  GC
     20    0.0%          Shared libraries
     70    0.1%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     54   25.0%    0.1%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
     34   15.7%    0.0%  v8::External::Value() const
     32   14.8%    0.0%  v8::Value::IsExternal() const
     31   14.4%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     16    7.4%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
     11    5.1%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      9    4.2%    0.0%  uv_now
      5    2.3%    0.0%  v8::internal::Runtime_Interrupt(int, v8::internal::Object**, v8::internal::Isolate*)
      5    2.3%    0.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      4    1.9%    0.0%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.9%    0.0%  uv__hrtime
      1    0.5%    0.0%  v8::internal::Runtime_TryInstallOptimizedCode(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.5%    0.0%  v8::internal::Runtime_ToBooleanIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.5%    0.0%  v8::internal::Runtime_ParseJson(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.5%    0.0%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.5%    0.0%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.5%    0.0%  v8::internal::Runtime_CompareNilIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.5%    0.0%  v8::internal::Runtime_BinaryOpIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  51902   57.9%  syscall

  36431   40.6%  LazyCompile: *unrefTimeout timers.js:532:22

```
