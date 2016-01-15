test4.js on `master @ 0b43c08` with [`2ccde01...b293f6b`](https://github.com/Fishrock123/node/compare/2ccde01...b293f6b) applied.

```
/usr/bin/time node --prof test4.js
```
`time` output:
```
13.47user 5.49system 1:51.42elapsed 17%CPU (0avgtext+0avgdata 127632maxresident)k
0inputs+18296outputs (0major+24872minor)pagefaults 0swaps
```

Relevant `--prof` data:

```
Code move event for unknown code: 0x13a1e9262b60
Statistical profiling result from test4-2-refactor-timers.log, (89969 ticks, 147 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     74    0.1%          /lib/x86_64-linux-gnu/libc-2.21.so
     16    0.0%          [vdso]
      2    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
     51    0.1%    0.1%  Stub: JSEntryStub
     48    0.1%    0.1%  LazyCompile: *listOnTimeout timers.js:109:23
     29    0.0%    0.0%  Builtin: JSEntryTrampoline
     25    0.0%    0.0%  LazyCompile: ~insert timers.js:79:16
     10    0.0%    0.0%  Builtin: CallFunction
      9    0.0%    0.0%  Builtin: Call
      5    0.0%    0.0%  Stub: CallApiAccessorStub
      4    0.0%    0.0%  Stub: CEntryStub
      4    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16
      3    0.0%    0.0%  Function: ~<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      2    0.0%    0.0%  Stub: FastNewClosureStub
      2    0.0%    0.0%  LazyCompile: ~listOnTimeout timers.js:109:23
      2    0.0%    0.0%  LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      2    0.0%    0.0%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      2    0.0%    0.0%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      2    0.0%    0.0%  Handler: start
      1    0.0%    0.0%  Stub: StoreTransitionStub
      1    0.0%    0.0%  Stub: StoreFieldStub
      1    0.0%    0.0%  Stub: RecordWriteStub {4}
      1    0.0%    0.0%  Stub: RecordWriteStub {3}
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub {1}
      1    0.0%    0.0%  Stub: RecordWriteStub
      1    0.0%    0.0%  Stub: CompareICStub {1}
      1    0.0%    0.0%  Stub: CompareICStub
      1    0.0%    0.0%  Stub: CallConstructStub
      1    0.0%    0.0%  Stub: BinaryOpICStub
      1    0.0%    0.0%  LazyCompile: ~Revive native json.js:18:16
      1    0.0%    0.0%  LazyCompile: ~PropertyDescriptor_IsEnumerable native v8natives.js:327:56
      1    0.0%    0.0%  LazyCompile: ~NativeModule.nonInternalExists node.js:942:46
      1    0.0%    0.0%  LazyCompile: ~Module._compile module.js:367:37
      1    0.0%    0.0%  LazyCompile: *remove internal/linkedlist.js:28:16
      1    0.0%    0.0%  KeyedStoreIC: A keyed store IC from the snapshot
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {3}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {2}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot
      1    0.0%    0.0%  Builtin: JSConstructStubApi
      1    0.0%    0.0%  Builtin: HandleApiCall

 [C++]:
   ticks  total  nonlib   name
  81132   90.2%   90.3%  syscall
   5958    6.6%    6.6%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
    252    0.3%    0.3%  uv_timer_stop
    144    0.2%    0.2%  write
    124    0.1%    0.1%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     86    0.1%    0.1%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
     81    0.1%    0.1%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
     71    0.1%    0.1%  v8::internal::LookupIterator::Next()
     62    0.1%    0.1%  __lll_lock_elision
     61    0.1%    0.1%  v8::Context::Enter()
     54    0.1%    0.1%  v8::internal::LookupIterator::GetRoot(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int)
     51    0.1%    0.1%  v8::internal::Context::native_context()
     48    0.1%    0.1%  _IO_vfprintf
     42    0.0%    0.0%  node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*)
     38    0.0%    0.0%  v8::Value::IsFunction() const
     37    0.0%    0.0%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
     32    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     31    0.0%    0.0%  node::TimerWrap::OnTimeout(uv_timer_s*)
     29    0.0%    0.0%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
     28    0.0%    0.0%  v8::Context::Exit()
     26    0.0%    0.0%  uv_run
     26    0.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
     25    0.0%    0.0%  v8::Object::Get(v8::Local<v8::Context>, unsigned int)
     23    0.0%    0.0%  v8::internal::JSObject::GetElementsAccessor()
     21    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     21    0.0%    0.0%  node::TimerWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&)
     20    0.0%    0.0%  node::TimerWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
     18    0.0%    0.0%  v8::internal::Object::GetProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
     18    0.0%    0.0%  v8::internal::Logger::ApiEntryCall(char const*)
     18    0.0%    0.0%  v8::Object::Get(unsigned int)
     18    0.0%    0.0%  uv_close
     17    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventExecute>::LogTimerEvent(v8::internal::Logger::StartEnd)
     16    0.0%    0.0%  uv__run_check
     15    0.0%    0.0%  v8::internal::LookupIterator::IsIntegerIndexedExotic(v8::internal::JSReceiver*)
     15    0.0%    0.0%  v8::internal::LookupIterator::GetDataValue() const
     15    0.0%    0.0%  v8::Isolate::GetCurrentContext()
     14    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, true>::IsAllowed(v8::internal::Isolate*)
     14    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Get(v8::internal::Handle<v8::internal::FixedArrayBase>, unsigned int)
     14    0.0%    0.0%  v8::External::Value() const
     14    0.0%    0.0%  cfree
     14    0.0%    0.0%  _IO_default_xsputn
     13    0.0%    0.0%  uv__run_timers
     13    0.0%    0.0%  __libc_malloc
     13    0.0%    0.0%  __GI___pthread_mutex_lock
     12    0.0%    0.0%  v8::internal::Isolate::RegisterTryCatchHandler(v8::TryCatch*)
     12    0.0%    0.0%  v8::Value::IsExternal() const
     12    0.0%    0.0%  v8::TryCatch::TryCatch(v8::Isolate*)
     11    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
     11    0.0%    0.0%  v8::HandleScope::Initialize(v8::Isolate*)
     11    0.0%    0.0%  __clock_gettime
     10    0.0%    0.0%  v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, bool, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, v8::internal::Handle<v8::internal::Object>) [clone .constprop.24]
     10    0.0%    0.0%  v8::Isolate::GetCpuProfiler()
     10    0.0%    0.0%  v8::CpuProfiler::SetIdle(bool)
     10    0.0%    0.0%  sigemptyset
     10    0.0%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      9    0.0%    0.0%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      9    0.0%    0.0%  v8::internal::MaybeHandle<v8::internal::Object> v8::internal::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::(anonymous namespace)::BuiltinArguments<(v8::internal::BuiltinExtraArguments)1>&) [clone .constprop.89]
      9    0.0%    0.0%  v8::internal::Log::MessageBuilder::Append(char const*, ...)
      9    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Delete(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
      9    0.0%    0.0%  v8::HandleScope::~HandleScope()
      9    0.0%    0.0%  uv__hrtime
      9    0.0%    0.0%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
      9    0.0%    0.0%  __GI___pthread_getspecific
      8    0.0%    0.0%  v8::internal::SaveContext::SaveContext(v8::internal::Isolate*)
      8    0.0%    0.0%  v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
      8    0.0%    0.0%  v8::internal::Map::ReconfigureProperty(v8::internal::Handle<v8::internal::Map>, int, v8::internal::PropertyKind, PropertyAttributes, v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >, v8::internal::StoreMode)
      8    0.0%    0.0%  uv__io_poll
      7    0.0%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      7    0.0%    0.0%  v8::EscapableHandleScope::EscapableHandleScope(v8::Isolate*)
      7    0.0%    0.0%  strchrnul
      7    0.0%    0.0%  node::Start(int, char**)
      6    0.0%    0.0%  v8::internal::RelocIterator::RelocIterator(v8::internal::Code*, int)
      6    0.0%    0.0%  v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, PropertyAttributes)
      6    0.0%    0.0%  v8::internal::DescriptorArray::CanHoldValue(int, v8::internal::Object*)
      6    0.0%    0.0%  v8::internal::Code::CopyFrom(v8::internal::CodeDesc const&)
      6    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetDetails(v8::internal::FixedArrayBase*, unsigned int)
      6    0.0%    0.0%  v8::HandleScope::HandleScope(v8::Isolate*)
      6    0.0%    0.0%  uv_now
      5    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::ClassType::Lub()
      5    0.0%    0.0%  v8::internal::ThreadId::GetCurrentThreadId()
      5    0.0%    0.0%  v8::internal::ScavengeVisitor::VisitPointer(v8::internal::Object**)
      5    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      5    0.0%    0.0%  v8::internal::HeapTypeConfig::is_struct(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*, int) [clone .constprop.75]
      5    0.0%    0.0%  v8::internal::HeapObject::SizeFromMap(v8::internal::Map*)
      5    0.0%    0.0%  v8::internal::HandleScope::Extend(v8::internal::Isolate*)
      5    0.0%    0.0%  v8::Object::InternalFieldCount()
      5    0.0%    0.0%  node::ClearIdle(uv_check_s*)
      5    0.0%    0.0%  _init
      4    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SlowIs(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      4    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::ClassType::Map()
      4    0.0%    0.0%  v8::internal::TransitionArray::SearchTransition(v8::internal::Map*, v8::internal::PropertyKind, v8::internal::Name*, PropertyAttributes)
      4    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      4    0.0%    0.0%  v8::internal::RelocIterator::next()
      4    0.0%    0.0%  v8::internal::PropertyICCompiler::ComputeMonomorphic(v8::internal::Code::Kind, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Map>, v8::internal::Handle<v8::internal::Code>, int)
      4    0.0%    0.0%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      4    0.0%    0.0%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      4    0.0%    0.0%  v8::internal::Map::GeneralizeFieldType(v8::internal::Handle<v8::internal::Map>, int, v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >)
      4    0.0%    0.0%  v8::internal::JSReceiver::DeleteElement(v8::internal::Handle<v8::internal::JSReceiver>, unsigned int, v8::internal::LanguageMode)
      4    0.0%    0.0%  v8::internal::Isolate::FireCallCompletedCallback()
      4    0.0%    0.0%  v8::internal::Heap::IterateAndMarkPointersToFromSpace(v8::internal::HeapObject*, unsigned char*, unsigned char*, bool, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      4    0.0%    0.0%  v8::internal::Heap::AllocateCode(int, bool)
      4    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindInsertionEntry(unsigned int)
      4    0.0%    0.0%  v8::internal::GetFieldType(v8::internal::Isolate*, v8::internal::Handle<v8::internal::DescriptorArray>, int, v8::internal::PropertyLocation, v8::internal::Representation) [clone .constprop.501]
      4    0.0%    0.0%  v8::internal::Factory::NewCode(v8::internal::CodeDesc const&, unsigned int, v8::internal::Handle<v8::internal::Object>, bool, bool, int, bool)
      4    0.0%    0.0%  v8::internal::(anonymous namespace)::CopyObjectToObjectElements(v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, int)
      4    0.0%    0.0%  v8::base::Mutex::Lock()
      4    0.0%    0.0%  v8::TryCatch::SetVerbose(bool)
      4    0.0%    0.0%  v8::Locker::IsActive()
      4    0.0%    0.0%  v8::EscapableHandleScope::Escape(v8::internal::Object**)
      4    0.0%    0.0%  v8::(anonymous namespace)::CallDepthScope::~CallDepthScope()
      4    0.0%    0.0%  uv__run_idle
      4    0.0%    0.0%  operator delete(void*)
      4    0.0%    0.0%  c32rtomb
      3    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      3    0.0%    0.0%  v8::internal::StoreIC::Store(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Object>, v8::internal::Object::StoreFromKeyed)
      3    0.0%    0.0%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::Runtime::SetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      3    0.0%    0.0%  v8::internal::PropertyAccessCompiler::TailCallBuiltin(v8::internal::MacroAssembler*, v8::internal::Builtins::Name)
      3    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      3    0.0%    0.0%  v8::internal::LookupIterator::PrepareForDataProperty(v8::internal::Handle<v8::internal::Object>)
      3    0.0%    0.0%  v8::internal::Logger::ApiObjectAccess(char const*, v8::internal::JSObject*)
      3    0.0%    0.0%  v8::internal::JSReceiver::DeleteProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
      3    0.0%    0.0%  v8::internal::JSObject::HasFastProperties()
      3    0.0%    0.0%  v8::internal::InnerPointerToCodeCache::GcSafeFindCodeForInnerPointer(unsigned char*)
      3    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindEntry(v8::internal::Isolate*, unsigned int)
      3    0.0%    0.0%  v8::internal::Code::FindHandlers(v8::internal::List<v8::internal::Handle<v8::internal::Code>, v8::internal::FreeStoreAllocationPolicy>*, int)
      3    0.0%    0.0%  v8::internal::Code::FindFirstMap()
      3    0.0%    0.0%  uv__run_prepare
      3    0.0%    0.0%  node::SetIdle(uv_prepare_s*)
      3    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      3    0.0%    0.0%  fflush
      2    0.0%    0.0%  void v8::internal::BaseDictionaryShape<unsigned int>::SetEntry<v8::internal::SeededNumberDictionary>(v8::internal::SeededNumberDictionary*, int, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyDetails)
      2    0.0%    0.0%  v8::internal::UpdatePointer(v8::internal::HeapObject**, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Glb(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      2    0.0%    0.0%  v8::internal::TransitionArray::SearchSpecial(v8::internal::Map*, v8::internal::Symbol*)
      2    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventIcMiss>::LogTimerEvent(v8::internal::Logger::StartEnd)
      2    0.0%    0.0%  v8::internal::SaveContext::~SaveContext()
      2    0.0%    0.0%  v8::internal::Runtime::DeleteObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSReceiver>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      2    0.0%    0.0%  v8::internal::PropertyAccessCompiler::GetCodeWithFlags(unsigned int, char const*)
      2    0.0%    0.0%  v8::internal::Object::ToObject(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Context>)
      2    0.0%    0.0%  v8::internal::Map::NotifyLeafMapLayoutChange()
      2    0.0%    0.0%  v8::internal::Map::InstancesNeedRewriting(v8::internal::Map*, int, int, int, int*)
      2    0.0%    0.0%  v8::internal::Map::FindRootMap()
      2    0.0%    0.0%  v8::internal::MacroAssembler::CmpWeakValue(v8::internal::Register, v8::internal::Handle<v8::internal::WeakCell>, v8::internal::Register)
      2    0.0%    0.0%  v8::internal::LookupIterator::LookupIterator(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int, v8::internal::LookupIterator::Configuration)
      2    0.0%    0.0%  v8::internal::Logger::CodeCreateEvent(v8::internal::Logger::LogEventsAndTags, v8::internal::Code*, v8::internal::Name*)
      2    0.0%    0.0%  v8::internal::Log::MessageBuilder::AppendDetailed(v8::internal::String*, bool)
      2    0.0%    0.0%  v8::internal::JSObject::MigrateToMap(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Map>, int)
      2    0.0%    0.0%  v8::internal::JSObject::MigrateFastToFast(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Map>)
      2    0.0%    0.0%  v8::internal::JSObject::GetElementsTransitionMap(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      2    0.0%    0.0%  v8::internal::JSObject::EnsureWritableFastElements(v8::internal::Handle<v8::internal::JSObject>)
      2    0.0%    0.0%  v8::internal::Isolate::RunMicrotasks()
      2    0.0%    0.0%  v8::internal::IsMoreGeneralElementsKindTransition(v8::internal::ElementsKind, v8::internal::ElementsKind)
      2    0.0%    0.0%  v8::internal::InnerPointerToCodeCache::GetCacheEntry(unsigned char*)
      2    0.0%    0.0%  v8::internal::IncrementalMarkingRootMarkingVisitor::VisitPointer(v8::internal::Object**)
      2    0.0%    0.0%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
      2    0.0%    0.0%  v8::internal::IncrementalMarking::RecordWriteSlow(v8::internal::HeapObject*, v8::internal::Object**, v8::internal::Object*)
      2    0.0%    0.0%  v8::internal::IncrementalMarking::RecordWriteIntoCodeSlow(v8::internal::HeapObject*, v8::internal::RelocInfo*, v8::internal::Object*)
      2    0.0%    0.0%  v8::internal::IC::TryRemoveInvalidPrototypeDependentStub(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::String>)
      2    0.0%    0.0%  v8::internal::Heap::AllocateUninitializedFixedArray(int)
      2    0.0%    0.0%  v8::internal::Heap::AllocateRaw(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment)
      2    0.0%    0.0%  v8::internal::HandleScope::DeleteExtensions(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::FunctionTemplateInfo::GetCompatibleReceiver(v8::internal::Isolate*, v8::internal::Object*)
      2    0.0%    0.0%  v8::internal::FixedArray::set(int, v8::internal::Object*, v8::internal::WriteBarrierMode)
      2    0.0%    0.0%  v8::internal::FieldTypeIsCleared(v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >)
      2    0.0%    0.0%  v8::internal::Dictionary<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::DeleteProperty(v8::internal::Handle<v8::internal::SeededNumberDictionary>, int)
      2    0.0%    0.0%  v8::internal::CodeCache::LookupDefaultCache(v8::internal::Name*, unsigned int)
      2    0.0%    0.0%  v8::internal::ApiNatives::ConfigureInstance(v8::internal::Isolate*, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::JSObject>)
      2    0.0%    0.0%  v8::base::RandomNumberGenerator::Next(int)
      2    0.0%    0.0%  v8::base::OS::VSNPrintF(char*, int, char const*, __va_list_tag*)
      2    0.0%    0.0%  v8::TryCatch::~TryCatch()
      2    0.0%    0.0%  v8::TryCatch::HasCaught() const
      2    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::SuppressMicrotaskExecutionScope(v8::Isolate*)
      2    0.0%    0.0%  uv__epoll_pwait
      2    0.0%    0.0%  mmap
      2    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.204]
      2    0.0%    0.0%  _IO_file_xsputn
      1    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      1    0.0%    0.0%  v8::platform::PumpMessageLoop(v8::Platform*, v8::Isolate*)
      1    0.0%    0.0%  v8::platform::DefaultPlatform::PumpMessageLoop(v8::Isolate*)
      1    0.0%    0.0%  v8::internal::UpdatePrototypeUserRegistration(v8::internal::Handle<v8::internal::Map>, v8::internal::Handle<v8::internal::Map>, v8::internal::Isolate*) [clone .constprop.518]
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SimplyEquals(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SemanticIs(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::NowIs(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::Iterator<v8::internal::Object>::Advance()
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::IsClass()
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Lub(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Lub(v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::TemplateHashMapImpl<v8::internal::FreeStoreAllocationPolicy>::LookupOrInsert(void*, unsigned int, v8::internal::FreeStoreAllocationPolicy) [clone .isra.23] [clone .part.24]
      1    0.0%    0.0%  v8::internal::String::GetFlatContent()
      1    0.0%    0.0%  v8::internal::String::CalculateLineEnds(v8::internal::Handle<v8::internal::String>, bool)
      1    0.0%    0.0%  v8::internal::StoreIC::LookupForWrite(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::Object::StoreFromKeyed)
      1    0.0%    0.0%  v8::internal::StoreDescriptor::ReceiverRegister()
      1    0.0%    0.0%  v8::internal::StoreBuffer::StoreBufferOverflow(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::StoreBuffer::ProcessOldToNewSlot(unsigned char*, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      1    0.0%    0.0%  v8::internal::StoreBuffer::ClearInvalidStoreBufferEntries()
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitSharedFunctionInfo(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::MarkMapContents(v8::internal::Heap*, v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::SerializerDeserializer::Iterate(v8::internal::Isolate*, v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::SemiSpace::GrowTo(int)
      1    0.0%    0.0%  v8::internal::SemiSpace::Commit()
      1    0.0%    0.0%  v8::internal::Scope::Scope(v8::internal::Zone*, v8::internal::Scope*, v8::internal::ScopeType, v8::internal::AstValueFactory*, v8::internal::FunctionKind)
      1    0.0%    0.0%  v8::internal::Scope::LookupLocal(v8::internal::AstRawString const*)
      1    0.0%    0.0%  v8::internal::Scanner::Scan()
      1    0.0%    0.0%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime::GetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      1    0.0%    0.0%  v8::internal::RootMarkingVisitor::VisitPointer(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::Representation::is_more_general_than(v8::internal::Representation const&) const
      1    0.0%    0.0%  v8::internal::PropertyICCompiler::CompilePolymorphic(v8::internal::List<v8::internal::Handle<v8::internal::Map>, v8::internal::FreeStoreAllocationPolicy>*, v8::internal::List<v8::internal::Handle<v8::internal::Code>, v8::internal::FreeStoreAllocationPolicy>*, v8::internal::Handle<v8::internal::Name>, v8::internal::Code::StubType, v8::internal::IcCheckType)
      1    0.0%    0.0%  v8::internal::PropertyAccessCompiler::GetCodeWithFlags(unsigned int, v8::internal::Handle<v8::internal::Name>)
      1    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointer(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseMemberWithNewPrefixesExpression(v8::internal::ExpressionClassifier*, bool*)
      1    0.0%    0.0%  v8::internal::Parser::ParseVariableDeclarations(v8::internal::ParserBase<v8::internal::ParserTraits>::VariableDeclarationContext, v8::internal::Parser::DeclarationParsingResult*, bool*)
      1    0.0%    0.0%  v8::internal::Operand::Operand(v8::internal::Register, int)
      1    0.0%    0.0%  v8::internal::Object::SetPropertyInternal(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode, v8::internal::Object::StoreFromKeyed, bool*)
      1    0.0%    0.0%  v8::internal::Object::SetDataProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>)
      1    0.0%    0.0%  v8::internal::Object::OptimalType(v8::internal::Isolate*, v8::internal::Representation)
      1    0.0%    0.0%  v8::internal::Object::OptimalRepresentation()
      1    0.0%    0.0%  v8::internal::Object::AddDataProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, PropertyAttributes, v8::internal::LanguageMode, v8::internal::Object::StoreFromKeyed)
      1    0.0%    0.0%  v8::internal::MarkCompactWeakObjectRetainer::RetainAs(v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::SweepOrWaitUntilSweepingCompleted(v8::internal::Page*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::EvacuateNewSpaceAndCandidates()
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::ClearNonLiveReferences()
      1    0.0%    0.0%  v8::internal::Map::AsElementsKind(v8::internal::Handle<v8::internal::Map>, v8::internal::ElementsKind)
      1    0.0%    0.0%  v8::internal::MacroAssembler::Prologue(bool)
      1    0.0%    0.0%  v8::internal::LookupIterator::WriteDataValue(v8::internal::Handle<v8::internal::Object>)
      1    0.0%    0.0%  v8::internal::LookupIterator::LookupIterator(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>, v8::internal::LookupIterator::Configuration)
      1    0.0%    0.0%  v8::internal::LookupIterator::GetStoreTarget() const
      1    0.0%    0.0%  v8::internal::LookupIterator::Delete()
      1    0.0%    0.0%  v8::internal::Log::MessageBuilder::Append(char)
      1    0.0%    0.0%  v8::internal::LayoutDescriptorHelper::LayoutDescriptorHelper(v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::LTemplateInstruction<1, 1, 0>::TempCount()
      1    0.0%    0.0%  v8::internal::LGoto::opcode() const
      1    0.0%    0.0%  v8::internal::LGapResolver::PerformMove(int)
      1    0.0%    0.0%  v8::internal::LCodeGen::PopulateDeoptimizationData(v8::internal::Handle<v8::internal::Code>)
      1    0.0%    0.0%  v8::internal::LChunk::MarkEmptyBlocks()
      1    0.0%    0.0%  v8::internal::KeyedGetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode) [clone .constprop.46]
      1    0.0%    0.0%  v8::internal::JSObject::set_elements(v8::internal::FixedArrayBase*, v8::internal::WriteBarrierMode) [clone .constprop.345]
      1    0.0%    0.0%  v8::internal::JSObject::UpdateAllocationSite(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      1    0.0%    0.0%  v8::internal::JSObject::GetNormalizedElementDictionary(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::FixedArrayBase>)
      1    0.0%    0.0%  v8::internal::JSObject::GetFastElementsUsage()
      1    0.0%    0.0%  v8::internal::Isolate::random_number_generator()
      1    0.0%    0.0%  v8::internal::Isolate::UnregisterTryCatchHandler(v8::TryCatch*)
      1    0.0%    0.0%  v8::internal::IncrementalMarking::WhiteToGreyAndPush(v8::internal::HeapObject*, v8::internal::MarkBit) [clone .isra.70]
      1    0.0%    0.0%  v8::internal::IC::UpdateState(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>)
      1    0.0%    0.0%  v8::internal::IC::SetTargetAtAddress(unsigned char*, v8::internal::Code*, unsigned char*)
      1    0.0%    0.0%  v8::internal::IC::PatchCache(v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Code>)
      1    0.0%    0.0%  v8::internal::IC::IC(v8::internal::IC::FrameDepth, v8::internal::Isolate*, v8::internal::FeedbackNexus*)
      1    0.0%    0.0%  v8::internal::IC::FindTargetMaps()
      1    0.0%    0.0%  v8::internal::HeapObject::IterateBody(v8::internal::InstanceType, int, v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::Heap::CreateFillerObjectAt(unsigned char*, int)
      1    0.0%    0.0%  v8::internal::Heap::AllocateFixedArray(int, v8::internal::PretenureFlag)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::WeakHashTable, v8::internal::WeakHashTableShape<2>, v8::internal::Handle<v8::internal::Object> >::FindEntry(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Shrink(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Rehash(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int)
      1    0.0%    0.0%  v8::internal::HValue::SetBlock(v8::internal::HBasicBlock*)
      1    0.0%    0.0%  v8::internal::HPushArguments::AddInput(v8::internal::HValue*)
      1    0.0%    0.0%  v8::internal::HOptimizedGraphBuilder::TryInline(v8::internal::Handle<v8::internal::JSFunction>, int, v8::internal::HValue*, v8::internal::BailoutId, v8::internal::BailoutId, v8::internal::InliningKind)
      1    0.0%    0.0%  v8::internal::HEnvironmentLivenessAnalysisPhase::Run()
      1    0.0%    0.0%  v8::internal::HDeadCodeEliminationPhase::RemoveDeadInstructions()
      1    0.0%    0.0%  v8::internal::HDeadCodeEliminationPhase::MarkLiveInstructions()
      1    0.0%    0.0%  v8::internal::HCallFunction::opcode() const
      1    0.0%    0.0%  v8::internal::HBasicBlock::Goto(v8::internal::HBasicBlock*, v8::internal::SourcePosition, v8::internal::FunctionState*, bool) [clone .constprop.970]
      1    0.0%    0.0%  v8::internal::GlobalHandles::UpdateListOfNewSpaceNodes()
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateStrongRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateAllRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IdentifyWeakHandles(bool (*)(v8::internal::Object**))
      1    0.0%    0.0%  v8::internal::FunctionTemplateInfo::IsTemplateFor(v8::internal::Map*) [clone .part.239]
      1    0.0%    0.0%  v8::internal::FullCodeGenerator::VisitExpressionStatement(v8::internal::ExpressionStatement*)
      1    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::FixedArray::BodyDescriptor, int>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedArray::BodyDescriptor, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::FixedArray::set(int, v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::Factory::NewFixedArray(int, v8::internal::PretenureFlag)
      1    0.0%    0.0%  v8::internal::Factory::NewByteArray(int, v8::internal::PretenureFlag)
      1    0.0%    0.0%  v8::internal::Dictionary<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Add(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyDetails)
      1    0.0%    0.0%  v8::internal::Deserializer::ReadData(v8::internal::Object**, v8::internal::Object**, int, unsigned char*)
      1    0.0%    0.0%  v8::internal::CpuFeatures::FlushICache(void*, unsigned long)
      1    0.0%    0.0%  v8::internal::ConsString::set_second(v8::internal::String*, v8::internal::WriteBarrierMode) [clone .part.49]
      1    0.0%    0.0%  v8::internal::CompilationInfo::num_parameters() const
      1    0.0%    0.0%  v8::internal::CodeStub::FindCodeInCache(v8::internal::Code**)
      1    0.0%    0.0%  v8::internal::CodeCache::Lookup(v8::internal::Name*, unsigned int)
      1    0.0%    0.0%  v8::internal::Code::IsOld()
      1    0.0%    0.0%  v8::internal::Code::FindHandlerForMap(v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::BufferedZoneList<v8::internal::RegExpTree, 2>::Add(v8::internal::RegExpTree*, v8::internal::Zone*)
      1    0.0%    0.0%  v8::internal::AssemblerBase::FlushICache(v8::internal::Isolate*, void*, unsigned long)
      1    0.0%    0.0%  v8::internal::AssemblerBase::AssemblerBase(v8::internal::Isolate*, void*, int)
      1    0.0%    0.0%  v8::internal::Assembler::testb(v8::internal::Register, v8::internal::Immediate)
      1    0.0%    0.0%  v8::internal::Assembler::arithmetic_op(unsigned char, v8::internal::Register, v8::internal::Operand const&, int)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::DictionaryElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)6> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::DictionaryElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)6> >::Delete(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
      1    0.0%    0.0%  v8::base::Thread::GetThreadLocal(int)
      1    0.0%    0.0%  v8::Isolate::RunMicrotasks()
      1    0.0%    0.0%  uv_update_time
      1    0.0%    0.0%  sigaddset
      1    0.0%    0.0%  operator new(unsigned long)
      1    0.0%    0.0%  node::HandleWrap::~HandleWrap()
      1    0.0%    0.0%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)0, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.203]
      1    0.0%    0.0%  int v8::internal::BinarySearch<(v8::internal::SearchMode)1, v8::internal::DescriptorArray>(v8::internal::DescriptorArray*, v8::internal::Name*, int, int, int, int*)
      1    0.0%    0.0%  fwrite
      1    0.0%    0.0%  brk
      1    0.0%    0.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::SemiSpaceCopyObject<(v8::internal::AllocationAlignment)1>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      1    0.0%    0.0%  _dl_mcount_wrapper_check
      1    0.0%    0.0%  __vsnprintf_chk
      1    0.0%    0.0%  __new_sem_post
      1    0.0%    0.0%  __errno_location
      1    0.0%    0.0%  __GI___pthread_mutex_unlock
      1    0.0%    0.0%  _IO_setb
      1    0.0%    0.0%  _IO_file_write

 [Summary]:
   ticks  total  nonlib   name
    223    0.2%    0.2%  JavaScript
  89507   99.5%   99.6%  C++
    165    0.2%    0.2%  GC
     92    0.1%          Shared libraries
    147    0.2%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
   6042   88.6%    6.7%  v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
    484    7.1%    0.5%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
     55    0.8%    0.1%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
     48    0.7%    0.1%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     40    0.6%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     18    0.3%    0.0%  uv_close
     14    0.2%    0.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
     14    0.2%    0.0%  v8::External::Value() const
     12    0.2%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     12    0.2%    0.0%  v8::Value::IsExternal() const
     10    0.1%    0.0%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     10    0.1%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      9    0.1%    0.0%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      8    0.1%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      6    0.1%    0.0%  uv_now
      5    0.1%    0.0%  v8::internal::Runtime_StackGuard(int, v8::internal::Object**, v8::internal::Isolate*)
      5    0.1%    0.0%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      5    0.1%    0.0%  v8::Object::InternalFieldCount()
      4    0.1%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      4    0.1%    0.0%  v8::internal::HeapObject::SizeFromMap(v8::internal::Map*)
      4    0.1%    0.0%  v8::Value::IsFunction() const
      2    0.0%    0.0%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  uv_timer_stop
      2    0.0%    0.0%  __clock_gettime
      1    0.0%    0.0%  v8::internal::StoreBuffer::StoreBufferOverflow(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_RegExpInitializeAndCompile(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_NewClosure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_CompareNilIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  uv_update_time
      1    0.0%    0.0%  _IO_vfprintf

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  81132   90.2%  syscall

   5958    6.6%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
   5958  100.0%    v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
   5920   99.4%      LazyCompile: *listOnTimeout timers.js:109:23
```
