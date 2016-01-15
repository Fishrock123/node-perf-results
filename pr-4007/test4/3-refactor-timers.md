test4.js on `master @ 0b43c08` with [`2ccde01...9b08688`](https://github.com/Fishrock123/node/compare/2ccde01...9b08688) applied.

```
/usr/bin/time node --prof test4.js
```
`time` output:
```
12.67user 5.54system 1:50.84elapsed 16%CPU (0avgtext+0avgdata 130088maxresident)k
0inputs+7000outputs (0major+23727minor)pagefaults 0swaps
```

Relevant `--prof` data:

```
Statistical profiling result from test4-3-refactor-timers.log, (89096 ticks, 126 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     53    0.1%          /lib/x86_64-linux-gnu/libc-2.21.so
     28    0.0%          [vdso]
      2    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21
      1    0.0%          /lib/x86_64-linux-gnu/ld-2.21.so

 [JavaScript]:
   ticks  total  nonlib   name
     55    0.1%    0.1%  LazyCompile: *listOnTimeout timers.js:115:23
     38    0.0%    0.0%  Stub: JSEntryStub
     30    0.0%    0.0%  Builtin: JSEntryTrampoline
     13    0.0%    0.0%  Builtin: Call
      7    0.0%    0.0%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      7    0.0%    0.0%  Builtin: CallFunction
      6    0.0%    0.0%  Stub: CallApiAccessorStub
      3    0.0%    0.0%  Stub: CEntryStub
      3    0.0%    0.0%  Builtin: JSConstructStubApi
      2    0.0%    0.0%  Stub: RecordWriteStub {1}
      2    0.0%    0.0%  Stub: CEntryStub {1}
      2    0.0%    0.0%  LazyCompile: *insert timers.js:79:16
      2    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot
      2    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub
      1    0.0%    0.0%  Stub: LoadFieldStub {1}
      1    0.0%    0.0%  Stub: LoadFieldStub
      1    0.0%    0.0%  Stub: LoadDictionaryElementStub
      1    0.0%    0.0%  Stub: CallApiAccessorStub {1}
      1    0.0%    0.0%  Stub: BinaryOpICStub
      1    0.0%    0.0%  LazyCompile: ~listOnTimeout timers.js:115:23
      1    0.0%    0.0%  LazyCompile: ~exports.unenroll timers.js:230:45
      1    0.0%    0.0%  LazyCompile: ~bind native v8natives.js:1224:22
      1    0.0%    0.0%  LazyCompile: *peek internal/linkedlist.js:11:14
      1    0.0%    0.0%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1    0.0%    0.0%  Handler: _idleTimeout
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {2}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot
      1    0.0%    0.0%  Builtin: ArgumentsAdaptorTrampoline

 [C++]:
   ticks  total  nonlib   name
  81001   90.9%   91.0%  syscall
   6003    6.7%    6.7%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
    209    0.2%    0.2%  uv_timer_stop
     80    0.1%    0.1%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
     67    0.1%    0.1%  v8::Context::Enter()
     65    0.1%    0.1%  v8::internal::LookupIterator::Next()
     59    0.1%    0.1%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     52    0.1%    0.1%  v8::internal::Context::native_context()
     38    0.0%    0.0%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
     35    0.0%    0.0%  node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*)
     34    0.0%    0.0%  v8::internal::LookupIterator::GetRoot(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int)
     30    0.0%    0.0%  v8::Value::IsFunction() const
     27    0.0%    0.0%  node::TimerWrap::OnTimeout(uv_timer_s*)
     27    0.0%    0.0%  __lll_lock_elision
     26    0.0%    0.0%  uv_run
     25    0.0%    0.0%  v8::Isolate::GetCurrentContext()
     23    0.0%    0.0%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
     22    0.0%    0.0%  v8::internal::LookupIterator::GetDataValue() const
     22    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     22    0.0%    0.0%  v8::Context::Exit()
     21    0.0%    0.0%  v8::Object::Get(v8::Local<v8::Context>, unsigned int)
     20    0.0%    0.0%  v8::internal::JSObject::GetElementsAccessor()
     20    0.0%    0.0%  v8::Object::Get(unsigned int)
     19    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     19    0.0%    0.0%  uv__run_timers
     18    0.0%    0.0%  __libc_malloc
     15    0.0%    0.0%  v8::TryCatch::TryCatch(v8::Isolate*)
     14    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, true>::IsAllowed(v8::internal::Isolate*)
     14    0.0%    0.0%  v8::internal::Logger::ApiEntryCall(char const*)
     14    0.0%    0.0%  v8::External::Value() const
     14    0.0%    0.0%  v8::CpuProfiler::SetIdle(bool)
     14    0.0%    0.0%  node::TimerWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
     13    0.0%    0.0%  v8::HandleScope::Initialize(v8::Isolate*)
     13    0.0%    0.0%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
     13    0.0%    0.0%  __GI___pthread_getspecific
     12    0.0%    0.0%  v8::internal::Object::GetProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
     12    0.0%    0.0%  v8::internal::LookupIterator::IsIntegerIndexedExotic(v8::internal::JSReceiver*)
     12    0.0%    0.0%  v8::internal::HandleScope::Extend(v8::internal::Isolate*)
     11    0.0%    0.0%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
     11    0.0%    0.0%  uv_timer_start
     11    0.0%    0.0%  uv_close
     10    0.0%    0.0%  v8::internal::JSReceiver::DeleteProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
     10    0.0%    0.0%  v8::TryCatch::SetVerbose(bool)
     10    0.0%    0.0%  v8::EscapableHandleScope::Escape(v8::internal::Object**)
     10    0.0%    0.0%  uv__run_check
     10    0.0%    0.0%  sigemptyset
     10    0.0%    0.0%  __clock_gettime
      9    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      9    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindEntry(v8::internal::Isolate*, unsigned int)
      9    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetDetails(v8::internal::FixedArrayBase*, unsigned int)
      9    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Delete(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
      9    0.0%    0.0%  v8::Isolate::GetCpuProfiler()
      9    0.0%    0.0%  v8::HandleScope::HandleScope(v8::Isolate*)
      9    0.0%    0.0%  node::Start(int, char**)
      9    0.0%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      8    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      8    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventExecute>::LogTimerEvent(v8::internal::Logger::StartEnd)
      8    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      8    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Get(v8::internal::Handle<v8::internal::FixedArrayBase>, unsigned int)
      8    0.0%    0.0%  v8::EscapableHandleScope::EscapableHandleScope(v8::Isolate*)
      8    0.0%    0.0%  cfree
      8    0.0%    0.0%  __GI___pthread_mutex_lock
      7    0.0%    0.0%  v8::internal::SaveContext::SaveContext(v8::internal::Isolate*)
      7    0.0%    0.0%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      7    0.0%    0.0%  v8::internal::Isolate::RegisterTryCatchHandler(v8::TryCatch*)
      7    0.0%    0.0%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
      7    0.0%    0.0%  v8::Value::IsExternal() const
      7    0.0%    0.0%  uv__hrtime
      7    0.0%    0.0%  node::ClearIdle(uv_check_s*)
      7    0.0%    0.0%  _init
      6    0.0%    0.0%  v8::internal::Deoptimizer::DoComputeCompiledStubFrame(v8::internal::TranslationIterator*, int)
      6    0.0%    0.0%  uv__io_poll
      6    0.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      5    0.0%    0.0%  v8::internal::TranslatedState::Init(unsigned char*, v8::internal::JSFunction*, v8::internal::TranslationIterator*, v8::internal::FixedArray*, v8::internal::RegisterValues*, _IO_FILE*)
      5    0.0%    0.0%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      5    0.0%    0.0%  v8::internal::JSReceiver::DeleteElement(v8::internal::Handle<v8::internal::JSReceiver>, unsigned int, v8::internal::LanguageMode)
      5    0.0%    0.0%  v8::internal::Isolate::FireCallCompletedCallback()
      5    0.0%    0.0%  v8::internal::HeapObject::SizeFromMap(v8::internal::Map*)
      5    0.0%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      5    0.0%    0.0%  uv__run_prepare
      4    0.0%    0.0%  write
      4    0.0%    0.0%  v8::internal::Scanner::ScanIdentifierOrKeyword()
      4    0.0%    0.0%  v8::internal::SaveContext::~SaveContext()
      4    0.0%    0.0%  v8::internal::MaybeHandle<v8::internal::Object> v8::internal::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::(anonymous namespace)::BuiltinArguments<(v8::internal::BuiltinExtraArguments)1>&) [clone .constprop.89]
      4    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      4    0.0%    0.0%  v8::internal::LookupIterator::Delete()
      4    0.0%    0.0%  v8::internal::Heap::IterateAndMarkPointersToFromSpace(v8::internal::HeapObject*, unsigned char*, unsigned char*, bool, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      4    0.0%    0.0%  v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, bool, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, v8::internal::Handle<v8::internal::Object>) [clone .constprop.24]
      4    0.0%    0.0%  v8::Locker::IsActive()
      4    0.0%    0.0%  v8::HandleScope::~HandleScope()
      4    0.0%    0.0%  uv__run_idle
      3    0.0%    0.0%  v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      3    0.0%    0.0%  v8::internal::Object::ToObject(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Context>)
      3    0.0%    0.0%  v8::internal::LookupIterator::LookupIterator(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int, v8::internal::LookupIterator::Configuration)
      3    0.0%    0.0%  v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, PropertyAttributes)
      3    0.0%    0.0%  v8::internal::Isolate::RunMicrotasks()
      3    0.0%    0.0%  v8::internal::IncrementalMarking::WhiteToGreyAndPush(v8::internal::HeapObject*, v8::internal::MarkBit) [clone .isra.70]
      3    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Rehash(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int)
      3    0.0%    0.0%  v8::internal::(anonymous namespace)::CopyObjectToObjectElements(v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, int)
      3    0.0%    0.0%  v8::TryCatch::HasCaught() const
      3    0.0%    0.0%  uv_now
      2    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      2    0.0%    0.0%  void v8::internal::Code::CodeIterateBody<v8::internal::IncrementalMarkingMarkingVisitor>(v8::internal::Heap*)
      2    0.0%    0.0%  void v8::internal::BaseDictionaryShape<unsigned int>::SetEntry<v8::internal::SeededNumberDictionary>(v8::internal::SeededNumberDictionary*, int, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyDetails)
      2    0.0%    0.0%  void std::vector<v8::internal::TranslatedFrame, std::allocator<v8::internal::TranslatedFrame> >::emplace_back<v8::internal::TranslatedFrame>(v8::internal::TranslatedFrame&&)
      2    0.0%    0.0%  v8::platform::DefaultPlatform::PumpMessageLoop(v8::Isolate*)
      2    0.0%    0.0%  v8::internal::TranslationIterator::Next()
      2    0.0%    0.0%  v8::internal::ThreadId::GetCurrentThreadId()
      2    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::ScavengeVisitor::VisitPointer(v8::internal::Object**)
      2    0.0%    0.0%  v8::internal::Runtime_NotifyStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::Runtime_ElementsTransitionAndStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::RelocIterator::next()
      2    0.0%    0.0%  v8::internal::KeyedGetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode) [clone .constprop.46]
      2    0.0%    0.0%  v8::internal::JSObject::set_elements(v8::internal::FixedArrayBase*, v8::internal::WriteBarrierMode) [clone .constprop.345]
      2    0.0%    0.0%  v8::internal::Heap::DoScavenge(v8::internal::ObjectVisitor*, unsigned char*)
      2    0.0%    0.0%  v8::internal::Heap::AllocateRaw(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment)
      2    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Shrink(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int)
      2    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindInsertionEntry(unsigned int)
      2    0.0%    0.0%  v8::internal::HandleScope::DeleteExtensions(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::GlobalHandles::IterateStrongRoots(v8::internal::ObjectVisitor*)
      2    0.0%    0.0%  v8::internal::FunctionTemplateInfo::GetCompatibleReceiver(v8::internal::Isolate*, v8::internal::Object*)
      2    0.0%    0.0%  v8::internal::FixedArray::set(int, v8::internal::Object*, v8::internal::WriteBarrierMode)
      2    0.0%    0.0%  v8::internal::Deoptimizer::SetPlatformCompiledStubRegisters(v8::internal::FrameDescription*, v8::internal::CodeStubDescriptor*)
      2    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::DictionaryElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)6> >::Delete(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
      2    0.0%    0.0%  v8::internal::(anonymous namespace)::ConfigureInstance(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::TemplateInfo>) [clone .constprop.31]
      2    0.0%    0.0%  v8::base::Mutex::Lock()
      2    0.0%    0.0%  v8::TryCatch::~TryCatch()
      2    0.0%    0.0%  v8::Object::InternalFieldCount()
      2    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::SuppressMicrotaskExecutionScope(v8::Isolate*)
      2    0.0%    0.0%  v8::Isolate::RunMicrotasks()
      2    0.0%    0.0%  v8::(anonymous namespace)::CallDepthScope::~CallDepthScope()
      2    0.0%    0.0%  operator new(unsigned long)
      2    0.0%    0.0%  node::TimerWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&)
      2    0.0%    0.0%  node::SetIdle(uv_prepare_s*)
      2    0.0%    0.0%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      2    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      2    0.0%    0.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::SemiSpaceCopyObject<(v8::internal::AllocationAlignment)1>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      1    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<64>(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  void node::StreamBase::JSMethod<node::StreamWrap, &(int node::StreamBase::WriteString<(node::encoding)1>(v8::FunctionCallbackInfo<v8::Value> const&))>(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  v8::platform::PumpMessageLoop(v8::Platform*, v8::Isolate*)
      1    0.0%    0.0%  v8::internal::UpdatePointer(v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::TranslatedState::CreateNextTranslatedValue(int, int, v8::internal::TranslationIterator*, v8::internal::FixedArray*, unsigned char*, v8::internal::RegisterValues*, _IO_FILE*)
      1    0.0%    0.0%  v8::internal::TemplateHashMapImpl<v8::internal::FreeStoreAllocationPolicy>::LookupOrInsert(void*, unsigned int, v8::internal::FreeStoreAllocationPolicy) [clone .isra.23] [clone .part.24]
      1    0.0%    0.0%  v8::internal::StoreBuffer::ProcessOldToNewSlot(unsigned char*, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      1    0.0%    0.0%  v8::internal::StoreBuffer::Compact()
      1    0.0%    0.0%  v8::internal::StoreBuffer::ClearInvalidStoreBufferEntries()
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::MarkCompactMarkingVisitor>::VisitSharedFunctionInfoStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::MarkMapContents(v8::internal::Heap*, v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::SemiSpace::GrowTo(int)
      1    0.0%    0.0%  v8::internal::Scope::DeserializeScopeChain(v8::internal::Isolate*, v8::internal::Zone*, v8::internal::Context*, v8::internal::Scope*)
      1    0.0%    0.0%  v8::internal::Scanner::Next()
      1    0.0%    0.0%  v8::internal::RelocIterator::RelocIterator(v8::internal::Code*, int)
      1    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointer(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParsePrimaryExpression(v8::internal::ExpressionClassifier*, bool*)
      1    0.0%    0.0%  v8::internal::ParserBase<v8::internal::ParserTraits>::ArrowFormalParametersUnexpectedToken(v8::internal::ExpressionClassifier*)
      1    0.0%    0.0%  v8::internal::Parser::Parse(v8::internal::ParseInfo*)
      1    0.0%    0.0%  v8::internal::OptimizedCompileJob::CreateGraph()
      1    0.0%    0.0%  v8::internal::Object* v8::internal::VisitWeakList<v8::internal::AllocationSite>(v8::internal::Heap*, v8::internal::Object*, v8::internal::WeakObjectRetainer*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
      1    0.0%    0.0%  v8::internal::LiveRange::AddUsePosition(v8::internal::LifetimePosition, v8::internal::LOperand*, v8::internal::LOperand*, v8::internal::Zone*)
      1    0.0%    0.0%  v8::internal::LiveRange::AddUseInterval(v8::internal::LifetimePosition, v8::internal::LifetimePosition, v8::internal::Zone*)
      1    0.0%    0.0%  v8::internal::LInstruction::IsControl() const
      1    0.0%    0.0%  v8::internal::LAllocator::ProcessInstructions(v8::internal::HBasicBlock*, v8::internal::BitVector*)
      1    0.0%    0.0%  v8::internal::JSObject::UpdateAllocationSite(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      1    0.0%    0.0%  v8::internal::JSObject::GetFastElementsUsage()
      1    0.0%    0.0%  v8::internal::JSObject::GetElementsTransitionMap(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      1    0.0%    0.0%  v8::internal::JSObject::EnsureWritableFastElements(v8::internal::Handle<v8::internal::JSObject>)
      1    0.0%    0.0%  v8::internal::Isolate::UpdateArrayProtectorOnSetElement(v8::internal::Handle<v8::internal::JSObject>)
      1    0.0%    0.0%  v8::internal::InnerPointerToCodeCache::GcSafeFindCodeForInnerPointer(unsigned char*)
      1    0.0%    0.0%  v8::internal::IncrementalMarkingRootMarkingVisitor::VisitPointer(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::IC::IC(v8::internal::IC::FrameDepth, v8::internal::Isolate*, v8::internal::FeedbackNexus*)
      1    0.0%    0.0%  v8::internal::HeapObjectIterator::next_object()
      1    0.0%    0.0%  v8::internal::Heap::AllocateFixedArray(int, v8::internal::PretenureFlag)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::StringTable, v8::internal::StringTableShape, v8::internal::HashTableKey*>::FindEntry(v8::internal::Isolate*, v8::internal::HashTableKey*)
      1    0.0%    0.0%  v8::internal::HSimulate::opcode() const
      1    0.0%    0.0%  v8::internal::HFlowEngine<v8::internal::HLoadEliminationTable, v8::internal::HLoadEliminationEffects>::AnalyzeDominatedBlocks(v8::internal::HBasicBlock*, v8::internal::HLoadEliminationTable*)
      1    0.0%    0.0%  v8::internal::HEnvironmentLivenessAnalysisPhase::Run()
      1    0.0%    0.0%  v8::internal::HDeadCodeEliminationPhase::MarkLiveInstructions()
      1    0.0%    0.0%  v8::internal::HChange::CompileToLithium(v8::internal::LChunkBuilder*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::PostMarkSweepProcessing(int)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateWeakRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateNewSpaceStrongAndDependentRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateAllRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IdentifyWeakHandles(bool (*)(v8::internal::Object**))
      1    0.0%    0.0%  v8::internal::GlobalHandles::IdentifyNewSpaceWeakIndependentHandles(bool (*)(v8::internal::Heap*, v8::internal::Object**))
      1    0.0%    0.0%  v8::internal::GlobalHandles::Destroy(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::FunctionTemplateInfo::IsTemplateFor(v8::internal::Map*) [clone .part.239]
      1    0.0%    0.0%  v8::internal::Factory::InitializeFunction(v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::SharedFunctionInfo>, v8::internal::Handle<v8::internal::Context>)
      1    0.0%    0.0%  v8::internal::Dictionary<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Add(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyDetails)
      1    0.0%    0.0%  v8::internal::Deserializer::ReadObject(int, v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::Deoptimizer::New(v8::internal::JSFunction*, v8::internal::Deoptimizer::BailoutType, unsigned int, unsigned char*, int, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Deoptimizer::DoComputeOutputFrames()
      1    0.0%    0.0%  v8::internal::Deoptimizer::Deoptimizer(v8::internal::Isolate*, v8::internal::JSFunction*, v8::internal::Deoptimizer::BailoutType, unsigned int, unsigned char*, int, v8::internal::Code*)
      1    0.0%    0.0%  v8::internal::Compiler::Compile(v8::internal::Handle<v8::internal::JSFunction>, v8::internal::ClearExceptionFlag)
      1    0.0%    0.0%  v8::internal::CompilationPhase::~CompilationPhase()
      1    0.0%    0.0%  v8::internal::CodeStub::FindCodeInCache(v8::internal::Code**)
      1    0.0%    0.0%  v8::internal::AstValueFactory::Internalize(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::AstValueFactory::GetOneByteStringInternal(v8::internal::Vector<unsigned char const>)
      1    0.0%    0.0%  v8::internal::AstValue::IsPropertyName() const
      1    0.0%    0.0%  v8::internal::Assembler::call(v8::internal::Handle<v8::internal::Code>, v8::internal::RelocInfo::Mode, v8::internal::TypeFeedbackId)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::DictionaryElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)6> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
      1    0.0%    0.0%  v8::Object::SetAlignedPointerInInternalField(int, void*)
      1    0.0%    0.0%  node::HandleWrap::Unref(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  node::HandleWrap::OnClose(uv_handle_s*)
      1    0.0%    0.0%  mmap
      1    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)0, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.203]
      1    0.0%    0.0%  int v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::JSObject::BodyDescriptor, int>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  fwrite
      1    0.0%    0.0%  __printf_fp
      1    0.0%    0.0%  __lll_unlock_elision

 [Summary]:
   ticks  total  nonlib   name
    188    0.2%    0.2%  JavaScript
  88698   99.6%   99.6%  C++
     78    0.1%    0.1%  GC
     84    0.1%          Shared libraries
    126    0.1%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
   6091   95.9%    6.8%  v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
     37    0.6%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     21    0.3%    0.0%  v8::internal::Runtime_ElementsTransitionAndStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
     17    0.3%    0.0%  v8::internal::Runtime_NotifyStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
     14    0.2%    0.0%  v8::External::Value() const
     13    0.2%    0.0%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
     13    0.2%    0.0%  __libc_malloc
     12    0.2%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     11    0.2%    0.0%  uv_timer_start
     11    0.2%    0.0%  uv_close
      9    0.1%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      8    0.1%    0.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      7    0.1%    0.0%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      7    0.1%    0.0%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      7    0.1%    0.0%  v8::Value::IsExternal() const
      6    0.1%    0.0%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      5    0.1%    0.0%  v8::internal::TranslatedState::Init(unsigned char*, v8::internal::JSFunction*, v8::internal::TranslationIterator*, v8::internal::FixedArray*, v8::internal::RegisterValues*, _IO_FILE*)
      5    0.1%    0.0%  v8::internal::HeapObject::SizeFromMap(v8::internal::Map*)
      5    0.1%    0.0%  v8::internal::Deoptimizer::DoComputeCompiledStubFrame(v8::internal::TranslationIterator*, int)
      4    0.1%    0.0%  v8::internal::Runtime_NewObject(int, v8::internal::Object**, v8::internal::Isolate*)
      4    0.1%    0.0%  v8::Value::IsFunction() const
      3    0.0%    0.0%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  uv_now
      3    0.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      3    0.0%    0.0%  __clock_gettime
      2    0.0%    0.0%  void std::vector<v8::internal::TranslatedFrame, std::allocator<v8::internal::TranslatedFrame> >::emplace_back<v8::internal::TranslatedFrame>(v8::internal::TranslatedFrame&&)
      2    0.0%    0.0%  v8::internal::TranslationIterator::Next()
      2    0.0%    0.0%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::Runtime_KeyedStoreIC_Slow(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::Deoptimizer::SetPlatformCompiledStubRegisters(v8::internal::FrameDescription*, v8::internal::CodeStubDescriptor*)
      2    0.0%    0.0%  v8::Object::InternalFieldCount()
      2    0.0%    0.0%  operator new(unsigned long)
      1    0.0%    0.0%  v8::internal::TranslatedState::CreateNextTranslatedValue(int, int, v8::internal::TranslationIterator*, v8::internal::FixedArray*, unsigned char*, v8::internal::RegisterValues*, _IO_FILE*)
      1    0.0%    0.0%  v8::internal::Runtime_TryInstallOptimizedCode(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_StackGuard(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_NewClosure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_KeyedStoreIC_MissFromStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::CodeStub::FindCodeInCache(v8::internal::Code**)
      1    0.0%    0.0%  uv__hrtime
      1    0.0%    0.0%  node::TimerWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  node::HandleWrap::Unref(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  cfree

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  81001   90.9%  syscall

   6003    6.7%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
   6003  100.0%    v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
   5881   98.0%      LazyCompile: *listOnTimeout timers.js:115:23
    122    2.0%      LazyCompile: ~listOnTimeout timers.js:115:23
```
