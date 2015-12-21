test3.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) applied.

```
node --prof test4.js
```

Relevant `--prof` data:

```
Statistical profiling result from test4-1-refactor-timers.log, (89832 ticks, 157 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     79    0.1%          /lib/x86_64-linux-gnu/libc-2.21.so
     14    0.0%          [vdso]
      1    0.0%          /usr/lib/x86_64-linux-gnu/libstdc++.so.6.0.21

 [JavaScript]:
   ticks  total  nonlib   name
     43    0.0%    0.0%  Stub: JSEntryStub
     41    0.0%    0.0%  LazyCompile: *listOnTimeout timers.js:109:23
     28    0.0%    0.0%  Builtin: JSEntryTrampoline
     15    0.0%    0.0%  LazyCompile: ~insert timers.js:79:16
     13    0.0%    0.0%  Stub: CallApiAccessorStub
     13    0.0%    0.0%  Builtin: Call
     12    0.0%    0.0%  Builtin: CallFunction
      8    0.0%    0.0%  LazyCompile: ~append internal/linkedlist.js:44:16
      5    0.0%    0.0%  Stub: CEntryStub
      5    0.0%    0.0%  KeyedStoreIC: A keyed store IC from the snapshot
      3    0.0%    0.0%  Stub: CEntryStub {1}
      3    0.0%    0.0%  LazyCompile: ~Module._compile module.js:367:37
      3    0.0%    0.0%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      3    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot
      3    0.0%    0.0%  Builtin: JSConstructStubApi
      2    0.0%    0.0%  Stub: LoadDictionaryElementStub
      2    0.0%    0.0%  LazyCompile: ~listOnTimeout timers.js:109:23
      1    0.0%    0.0%  Stub: StoreFieldStub
      1    0.0%    0.0%  Stub: RecordWriteStub {3}
      1    0.0%    0.0%  Stub: RecordWriteStub {2}
      1    0.0%    0.0%  Stub: RecordWriteStub {1}
      1    0.0%    0.0%  Stub: RecordWriteStub
      1    0.0%    0.0%  Stub: FastNewClosureStub
      1    0.0%    0.0%  Stub: CompareICStub
      1    0.0%    0.0%  Stub: BinaryOpICStub
      1    0.0%    0.0%  LazyCompile: ~exports.enroll timers.js:238:26
      1    0.0%    0.0%  LazyCompile: *isFinite native v8natives.js:34:24
      1    0.0%    0.0%  LazyCompile: *isEmpty internal/linkedlist.js:54:17
      1    0.0%    0.0%  LazyCompile: *exports.unenroll timers.js:224:45
      1    0.0%    0.0%  KeyedStorePolymorphicIC: args_count: 0
      1    0.0%    0.0%  KeyedLoadIC: A keyed load IC from the snapshot {1}
      1    0.0%    0.0%  Handler: unref
      1    0.0%    0.0%  Handler: _idleTimeout {1}
      1    0.0%    0.0%  Handler: _idleTimeout
      1    0.0%    0.0%  Handler: An IC handler from the snapshot {1}
      1    0.0%    0.0%  Handler: An IC handler from the snapshot
      1    0.0%    0.0%  Builtin: HandleApiCall
      1    0.0%    0.0%  Builtin: ArgumentsAdaptorTrampoline

 [C++]:
   ticks  total  nonlib   name
  81467   90.7%   90.8%  syscall
   5534    6.2%    6.2%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
    221    0.2%    0.2%  uv_timer_stop
    161    0.2%    0.2%  write
     89    0.1%    0.1%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
     72    0.1%    0.1%  v8::internal::Execution::Call(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
     70    0.1%    0.1%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
     68    0.1%    0.1%  v8::internal::LookupIterator::Next()
     64    0.1%    0.1%  v8::internal::Context::native_context()
     56    0.1%    0.1%  __lll_lock_elision
     44    0.0%    0.0%  v8::Context::Enter()
     43    0.0%    0.0%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
     35    0.0%    0.0%  node::AsyncWrap::MakeCallback(v8::Local<v8::Function>, int, v8::Local<v8::Value>*)
     35    0.0%    0.0%  _IO_vfprintf
     34    0.0%    0.0%  v8::Value::IsFunction() const
     33    0.0%    0.0%  v8::Context::Exit()
     32    0.0%    0.0%  v8::internal::LookupIterator::GetRoot(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int)
     31    0.0%    0.0%  uv_run
     28    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     28    0.0%    0.0%  node::TimerWrap::OnTimeout(uv_timer_s*)
     27    0.0%    0.0%  v8::internal::Logger::ApiEntryCall(char const*)
     27    0.0%    0.0%  v8::Value::IsExternal() const
     26    0.0%    0.0%  v8::Object::Get(unsigned int)
     26    0.0%    0.0%  v8::External::Value() const
     23    0.0%    0.0%  v8::internal::LookupIterator::GetDataValue() const
     23    0.0%    0.0%  v8::Object::Get(v8::Local<v8::Context>, unsigned int)
     23    0.0%    0.0%  node::TimerWrap::Start(v8::FunctionCallbackInfo<v8::Value> const&)
     21    0.0%    0.0%  v8::internal::Object::GetProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
     21    0.0%    0.0%  v8::Function::Call(v8::Local<v8::Context>, v8::Local<v8::Value>, int, v8::Local<v8::Value>*)
     21    0.0%    0.0%  uv_close
     18    0.0%    0.0%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
     18    0.0%    0.0%  uv__run_timers
     17    0.0%    0.0%  v8::internal::Isolate::RegisterTryCatchHandler(v8::TryCatch*)
     16    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventExecute>::LogTimerEvent(v8::internal::Logger::StartEnd)
     16    0.0%    0.0%  __libc_malloc
     15    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, true>::IsAllowed(v8::internal::Isolate*)
     15    0.0%    0.0%  v8::internal::JSObject::GetElementsAccessor()
     14    0.0%    0.0%  uv__io_poll
     14    0.0%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
     14    0.0%    0.0%  node::TimerWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
     14    0.0%    0.0%  cfree
     13    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::GetDetails(v8::internal::FixedArrayBase*, unsigned int)
     13    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Get(v8::internal::Handle<v8::internal::FixedArrayBase>, unsigned int)
     13    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Delete(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
     13    0.0%    0.0%  uv__run_check
     13    0.0%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
     12    0.0%    0.0%  v8::Isolate::GetCpuProfiler()
     11    0.0%    0.0%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
     11    0.0%    0.0%  v8::internal::MaybeHandle<v8::internal::Object> v8::internal::HandleApiCallHelper<false>(v8::internal::Isolate*, v8::internal::(anonymous namespace)::BuiltinArguments<(v8::internal::BuiltinExtraArguments)1>&) [clone .constprop.89]
     11    0.0%    0.0%  v8::Isolate::GetCurrentContext()
     11    0.0%    0.0%  v8::CpuProfiler::SetIdle(bool)
     10    0.0%    0.0%  v8::internal::JSObject::MigrateFastToFast(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Map>)
      9    0.0%    0.0%  v8::internal::Map::ReconfigureProperty(v8::internal::Handle<v8::internal::Map>, int, v8::internal::PropertyKind, PropertyAttributes, v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >, v8::internal::StoreMode)
      9    0.0%    0.0%  v8::TryCatch::TryCatch(v8::Isolate*)
      9    0.0%    0.0%  v8::TryCatch::SetVerbose(bool)
      9    0.0%    0.0%  v8::HandleScope::Initialize(v8::Isolate*)
      9    0.0%    0.0%  __GI___pthread_mutex_lock
      9    0.0%    0.0%  __GI___pthread_getspecific
      8    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      8    0.0%    0.0%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      8    0.0%    0.0%  v8::internal::LookupIterator::IsIntegerIndexedExotic(v8::internal::JSReceiver*)
      8    0.0%    0.0%  v8::internal::(anonymous namespace)::Invoke(v8::internal::Isolate*, bool, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*, v8::internal::Handle<v8::internal::Object>) [clone .constprop.24]
      8    0.0%    0.0%  v8::EscapableHandleScope::EscapableHandleScope(v8::Isolate*)
      8    0.0%    0.0%  strchrnul
      8    0.0%    0.0%  c32rtomb
      7    0.0%    0.0%  v8::internal::TransitionArray::SearchSpecial(v8::internal::Map*, v8::internal::Symbol*)
      7    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      7    0.0%    0.0%  v8::internal::Object::ToObject(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Context>)
      7    0.0%    0.0%  v8::internal::Isolate::RunMicrotasks()
      7    0.0%    0.0%  v8::internal::Code::CopyFrom(v8::internal::CodeDesc const&)
      7    0.0%    0.0%  v8::Locker::IsActive()
      7    0.0%    0.0%  uv_now
      7    0.0%    0.0%  node::Start(int, char**)
      6    0.0%    0.0%  v8::internal::ThreadId::GetCurrentThreadId()
      6    0.0%    0.0%  v8::internal::SaveContext::~SaveContext()
      6    0.0%    0.0%  v8::internal::RelocIterator::next()
      6    0.0%    0.0%  v8::internal::Map::GeneralizeFieldType(v8::internal::Handle<v8::internal::Map>, int, v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >)
      6    0.0%    0.0%  v8::internal::JSReceiver::DeleteProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
      6    0.0%    0.0%  v8::internal::JSReceiver::DeleteElement(v8::internal::Handle<v8::internal::JSReceiver>, unsigned int, v8::internal::LanguageMode)
      6    0.0%    0.0%  v8::internal::Isolate::FireCallCompletedCallback()
      6    0.0%    0.0%  v8::internal::HandleScope::Extend(v8::internal::Isolate*)
      6    0.0%    0.0%  v8::internal::HandleScope::DeleteExtensions(v8::internal::Isolate*)
      6    0.0%    0.0%  v8::HandleScope::~HandleScope()
      6    0.0%    0.0%  uv__run_prepare
      6    0.0%    0.0%  uv__hrtime
      6    0.0%    0.0%  sigemptyset
      6    0.0%    0.0%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
      6    0.0%    0.0%  __vsnprintf_chk
      5    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::ClassType::Lub()
      5    0.0%    0.0%  v8::internal::TimerEventScope<v8::internal::TimerEventIcMiss>::LogTimerEvent(v8::internal::Logger::StartEnd)
      5    0.0%    0.0%  v8::internal::ScavengeVisitor::VisitPointer(v8::internal::Object**)
      5    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      5    0.0%    0.0%  v8::internal::LookupIterator::WriteDataValue(v8::internal::Handle<v8::internal::Object>)
      5    0.0%    0.0%  v8::internal::JSObject::AddDataElement(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, PropertyAttributes)
      5    0.0%    0.0%  v8::internal::IsMoreGeneralElementsKindTransition(v8::internal::ElementsKind, v8::internal::ElementsKind)
      5    0.0%    0.0%  v8::internal::FunctionCallbackArguments::Call(void (*)(v8::FunctionCallbackInfo<v8::Value> const&))
      5    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::DictionaryElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)6> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
      5    0.0%    0.0%  v8::Isolate::RunMicrotasks()
      5    0.0%    0.0%  v8::EscapableHandleScope::Escape(v8::internal::Object**)
      5    0.0%    0.0%  sigaddset
      5    0.0%    0.0%  fwrite
      5    0.0%    0.0%  _IO_default_xsputn
      4    0.0%    0.0%  v8::internal::TransitionArray::SearchTransition(v8::internal::Map*, v8::internal::PropertyKind, v8::internal::Name*, PropertyAttributes)
      4    0.0%    0.0%  v8::internal::Scavenger::ScavengeObjectSlow(v8::internal::HeapObject**, v8::internal::HeapObject*)
      4    0.0%    0.0%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      4    0.0%    0.0%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      4    0.0%    0.0%  v8::internal::Map::InstancesNeedRewriting(v8::internal::Map*, int, int, int, int*)
      4    0.0%    0.0%  v8::internal::LookupIterator::LookupIterator(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, unsigned int, v8::internal::LookupIterator::Configuration)
      4    0.0%    0.0%  v8::internal::Log::MessageBuilder::Append(char const*, ...)
      4    0.0%    0.0%  v8::internal::JSObject::EnsureWritableFastElements(v8::internal::Handle<v8::internal::JSObject>)
      4    0.0%    0.0%  v8::internal::FunctionTemplateInfo::GetCompatibleReceiver(v8::internal::Isolate*, v8::internal::Object*)
      4    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::FixedArray::BodyDescriptor, int>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      4    0.0%    0.0%  v8::internal::Factory::NewCode(v8::internal::CodeDesc const&, unsigned int, v8::internal::Handle<v8::internal::Object>, bool, bool, int, bool)
      4    0.0%    0.0%  v8::internal::ApiNatives::ConfigureInstance(v8::internal::Isolate*, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::JSObject>)
      4    0.0%    0.0%  v8::TryCatch::HasCaught() const
      4    0.0%    0.0%  v8::HandleScope::HandleScope(v8::Isolate*)
      4    0.0%    0.0%  operator new(unsigned long)
      4    0.0%    0.0%  _init
      4    0.0%    0.0%  __clock_gettime
      3    0.0%    0.0%  v8::platform::PumpMessageLoop(v8::Platform*, v8::Isolate*)
      3    0.0%    0.0%  v8::platform::DefaultPlatform::PumpMessageLoop(v8::Isolate*)
      3    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SlowIs(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      3    0.0%    0.0%  v8::internal::StoreBuffer::ProcessOldToNewSlot(unsigned char*, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      3    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      3    0.0%    0.0%  v8::internal::SemiSpace::GrowTo(int)
      3    0.0%    0.0%  v8::internal::SaveContext::SaveContext(v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::PropertyICCompiler::ComputeMonomorphic(v8::internal::Code::Kind, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Map>, v8::internal::Handle<v8::internal::Code>, int)
      3    0.0%    0.0%  v8::internal::PropertyICCompiler::CompilePolymorphic(v8::internal::List<v8::internal::Handle<v8::internal::Map>, v8::internal::FreeStoreAllocationPolicy>*, v8::internal::List<v8::internal::Handle<v8::internal::Code>, v8::internal::FreeStoreAllocationPolicy>*, v8::internal::Handle<v8::internal::Name>, v8::internal::Code::StubType, v8::internal::IcCheckType)
      3    0.0%    0.0%  v8::internal::PagedSpace::AllocateRawUnaligned(int)
      3    0.0%    0.0%  v8::internal::Map::TransitionElementsTo(v8::internal::Handle<v8::internal::Map>, v8::internal::ElementsKind)
      3    0.0%    0.0%  v8::internal::Map::PrepareForDataProperty(v8::internal::Handle<v8::internal::Map>, int, v8::internal::Handle<v8::internal::Object>)
      3    0.0%    0.0%  v8::internal::Map::FindRootMap()
      3    0.0%    0.0%  v8::internal::LookupIterator::Delete()
      3    0.0%    0.0%  v8::internal::Logger::CodeCreateEvent(v8::internal::Logger::LogEventsAndTags, v8::internal::Code*, v8::internal::Name*)
      3    0.0%    0.0%  v8::internal::IncrementalMarkingRootMarkingVisitor::VisitPointer(v8::internal::Object**)
      3    0.0%    0.0%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
      3    0.0%    0.0%  v8::internal::HeapObject::SizeFromMap(v8::internal::Map*)
      3    0.0%    0.0%  v8::internal::Heap::IterateAndMarkPointersToFromSpace(v8::internal::HeapObject*, unsigned char*, unsigned char*, bool, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      3    0.0%    0.0%  v8::internal::Heap::AllocateCode(int, bool)
      3    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Rehash(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int)
      3    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindEntry(v8::internal::Isolate*, unsigned int)
      3    0.0%    0.0%  v8::internal::GetFieldType(v8::internal::Isolate*, v8::internal::Handle<v8::internal::DescriptorArray>, int, v8::internal::PropertyLocation, v8::internal::Representation) [clone .constprop.501]
      3    0.0%    0.0%  v8::internal::Dictionary<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::DeleteProperty(v8::internal::Handle<v8::internal::SeededNumberDictionary>, int)
      3    0.0%    0.0%  v8::internal::Assembler::bind(v8::internal::Label*)
      3    0.0%    0.0%  v8::base::Thread::GetThreadLocal(int)
      3    0.0%    0.0%  v8::base::Mutex::Lock()
      3    0.0%    0.0%  v8::Object::InternalFieldCount()
      3    0.0%    0.0%  node::SetIdle(uv_prepare_s*)
      2    0.0%    0.0%  v8::internal::Zone::New(unsigned long)
      2    0.0%    0.0%  v8::internal::UpdatePointer(v8::internal::HeapObject**, v8::internal::HeapObject*)
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SemanticIs(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::NowIs(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::IsClass()
      2    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Glb(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      2    0.0%    0.0%  v8::internal::StoreIC::UpdateCaches(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::Object::StoreFromKeyed)
      2    0.0%    0.0%  v8::internal::StoreBuffer::StoreBufferOverflow(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::MarkMapContents(v8::internal::Heap*, v8::internal::Map*)
      2    0.0%    0.0%  v8::internal::StackGuard::HandleInterrupts()
      2    0.0%    0.0%  v8::internal::Runtime::DeleteObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSReceiver>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      2    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      2    0.0%    0.0%  v8::internal::Object::SetProperty(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode, v8::internal::Object::StoreFromKeyed)
      2    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordCodeEntrySlot(v8::internal::HeapObject*, unsigned char*, v8::internal::Code*)
      2    0.0%    0.0%  v8::internal::Map::WeakCellForMap(v8::internal::Handle<v8::internal::Map>)
      2    0.0%    0.0%  v8::internal::Map::FindInCodeCache(v8::internal::Name*, unsigned int)
      2    0.0%    0.0%  v8::internal::LookupIterator::PrepareForDataProperty(v8::internal::Handle<v8::internal::Object>)
      2    0.0%    0.0%  v8::internal::LookupIterator::LookupIterator(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>, v8::internal::LookupIterator::Configuration)
      2    0.0%    0.0%  v8::internal::JSObject::UpdateAllocationSite(v8::internal::Handle<v8::internal::JSObject>, v8::internal::ElementsKind)
      2    0.0%    0.0%  v8::internal::JSObject::MigrateToMap(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Map>, int)
      2    0.0%    0.0%  v8::internal::Isolate::random_number_generator()
      2    0.0%    0.0%  v8::internal::Isolate::UpdateArrayProtectorOnSetElement(v8::internal::Handle<v8::internal::JSObject>)
      2    0.0%    0.0%  v8::internal::IncrementalMarking::WhiteToGreyAndPush(v8::internal::HeapObject*, v8::internal::MarkBit) [clone .isra.70]
      2    0.0%    0.0%  v8::internal::IC::UpdateState(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>)
      2    0.0%    0.0%  v8::internal::IC::FindTargetMaps()
      2    0.0%    0.0%  v8::internal::HeapTypeConfig::is_struct(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*, int) [clone .constprop.75]
      2    0.0%    0.0%  v8::internal::Heap::AllocateRaw(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment)
      2    0.0%    0.0%  v8::internal::FixedArray::set(int, v8::internal::Object*, v8::internal::WriteBarrierMode)
      2    0.0%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::AssemblerBase::AssemblerBase(v8::internal::Isolate*, void*, int)
      2    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::DictionaryElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)6> >::Delete(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
      2    0.0%    0.0%  uv__run_idle
      2    0.0%    0.0%  operator delete(void*)
      2    0.0%    0.0%  node::ClearIdle(uv_check_s*)
      2    0.0%    0.0%  fflush
      2    0.0%    0.0%  __lll_unlock_elision
      1    0.0%    0.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      1    0.0%    0.0%  void v8::internal::BaseDictionaryShape<unsigned int>::SetEntry<v8::internal::SeededNumberDictionary>(v8::internal::SeededNumberDictionary*, int, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyDetails)
      1    0.0%    0.0%  void node::StreamBase::JSMethod<node::StreamWrap, &(int node::StreamBase::WriteString<(node::encoding)1>(v8::FunctionCallbackInfo<v8::Value> const&))>(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  v8::internal::Zone::~Zone()
      1    0.0%    0.0%  v8::internal::UpdatePrototypeUserRegistration(v8::internal::Handle<v8::internal::Map>, v8::internal::Handle<v8::internal::Map>, v8::internal::Isolate*) [clone .constprop.518]
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::SimplyEquals(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::Iterator<v8::internal::Map>::Current()
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::Contains(v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::ClassType::Map()
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Lub(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      1    0.0%    0.0%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::BitsetType::Lub(v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::String::IsOneByteEqualTo(v8::internal::Vector<unsigned char const>)
      1    0.0%    0.0%  v8::internal::StoreDescriptor::ReceiverRegister()
      1    0.0%    0.0%  v8::internal::StoreBuffer::ClearInvalidStoreBufferEntries()
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitWeakCell(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitSharedFunctionInfoStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::StackFrame::GetCallerState(v8::internal::StackFrame::State*) const
      1    0.0%    0.0%  v8::internal::SharedFunctionInfo::DebugName()
      1    0.0%    0.0%  v8::internal::Scope::AllocateNonParameterLocalsAndDeclaredGlobals(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Scanner::Scan()
      1    0.0%    0.0%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime::GetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      1    0.0%    0.0%  v8::internal::RootMarkingVisitor::VisitPointer(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::Representation::is_more_general_than(v8::internal::Representation const&) const
      1    0.0%    0.0%  v8::internal::RelocIterator::RelocIterator(v8::internal::Code*, int)
      1    0.0%    0.0%  v8::internal::RelocInfoWriter::Write(v8::internal::RelocInfo const*)
      1    0.0%    0.0%  v8::internal::PropertyICCompiler::IncludesNumberMap(v8::internal::List<v8::internal::Handle<v8::internal::Map>, v8::internal::FreeStoreAllocationPolicy>*)
      1    0.0%    0.0%  v8::internal::PropertyICCompiler::GetCode(v8::internal::Code::Kind, v8::internal::Code::StubType, v8::internal::Handle<v8::internal::Name>, v8::internal::InlineCacheState)
      1    0.0%    0.0%  v8::internal::PromotionQueue::RelocateQueueHead()
      1    0.0%    0.0%  v8::internal::PointersUpdatingVisitor::VisitPointer(v8::internal::Object**)
      1    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)1, false>::IsAllowed(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, false>::PerIsolateAssertScope(v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Parser::ParseLazy(v8::internal::Isolate*, v8::internal::ParseInfo*, v8::internal::Utf16CharacterStream*)
      1    0.0%    0.0%  v8::internal::Object* v8::internal::VisitWeakList<v8::internal::AllocationSite>(v8::internal::Heap*, v8::internal::Object*, v8::internal::WeakObjectRetainer*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::RecordRelocSlot(v8::internal::RelocInfo*, v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::MarkCompactCollector::IsSlotInLiveObject(unsigned char*)
      1    0.0%    0.0%  v8::internal::Map::IsUnboxedDoubleField(v8::internal::FieldIndex)
      1    0.0%    0.0%  v8::internal::Map::GeneralizeFieldType(v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >, v8::internal::Representation, v8::internal::Handle<v8::internal::TypeImpl<v8::internal::HeapTypeConfig> >, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Map::AsElementsKind(v8::internal::Handle<v8::internal::Map>, v8::internal::ElementsKind)
      1    0.0%    0.0%  v8::internal::MacroAssembler::RecordWriteField(v8::internal::Register, int, v8::internal::Register, v8::internal::Register, v8::internal::SaveFPRegsMode, v8::internal::RememberedSetAction, v8::internal::SmiCheck, v8::internal::PointersToHereCheck)
      1    0.0%    0.0%  v8::internal::Logger::ApiObjectAccess(char const*, v8::internal::JSObject*)
      1    0.0%    0.0%  v8::internal::Log::MessageBuilder::AppendDetailed(v8::internal::String*, bool)
      1    0.0%    0.0%  v8::internal::Log::MessageBuilder::AppendAddress(unsigned char*)
      1    0.0%    0.0%  v8::internal::LAllocator::TryAllocateFreeReg(v8::internal::LiveRange*)
      1    0.0%    0.0%  v8::internal::KeyedStoreIC::StoreElementStub(v8::internal::Handle<v8::internal::Map>, v8::internal::KeyedAccessStoreMode)
      1    0.0%    0.0%  v8::internal::KeyedGetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode) [clone .constprop.46]
      1    0.0%    0.0%  v8::internal::JSObjectWalkVisitor<v8::internal::AllocationSiteUsageContext>::StructureWalk(v8::internal::Handle<v8::internal::JSObject>)
      1    0.0%    0.0%  v8::internal::JSObject::set_elements(v8::internal::FixedArrayBase*, v8::internal::WriteBarrierMode) [clone .constprop.345]
      1    0.0%    0.0%  v8::internal::JSObject::RawFastPropertyAtPut(v8::internal::FieldIndex, v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::JSObject::HasFastProperties()
      1    0.0%    0.0%  v8::internal::JSObject::GetNormalizedElementDictionary(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::FixedArrayBase>)
      1    0.0%    0.0%  v8::internal::JSObject::GetFastElementsUsage()
      1    0.0%    0.0%  v8::internal::JSFunction::JSFunctionIterateBody(int, v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::Isolate::native_context()
      1    0.0%    0.0%  v8::internal::Isolate::UnregisterTryCatchHandler(v8::TryCatch*)
      1    0.0%    0.0%  v8::internal::InvalidatePrototypeChainsInternal(v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::InnerPointerToCodeCache::GcSafeFindCodeForInnerPointer(unsigned char*)
      1    0.0%    0.0%  v8::internal::IncrementalMarking::RecordWriteSlow(v8::internal::HeapObject*, v8::internal::Object**, v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::IC::OnTypeFeedbackChanged(v8::internal::Isolate*, unsigned char*, v8::internal::InlineCacheState, v8::internal::InlineCacheState, bool)
      1    0.0%    0.0%  v8::internal::IC::IC(v8::internal::IC::FrameDepth, v8::internal::Isolate*, v8::internal::FeedbackNexus*)
      1    0.0%    0.0%  v8::internal::HeapTypeConfig::is_range(v8::internal::TypeImpl<v8::internal::HeapTypeConfig>*)
      1    0.0%    0.0%  v8::internal::HeapObject::synchronized_set_map(v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::Heap::PromotedSpaceSizeOfObjects()
      1    0.0%    0.0%  v8::internal::Heap::OnAllocationEvent(v8::internal::HeapObject*, int)
      1    0.0%    0.0%  v8::internal::Heap::DoScavenge(v8::internal::ObjectVisitor*, unsigned char*)
      1    0.0%    0.0%  v8::internal::Heap::CreateFillerObjectAt(unsigned char*, int)
      1    0.0%    0.0%  v8::internal::Heap::AllocateMap(v8::internal::InstanceType, int, v8::internal::ElementsKind)
      1    0.0%    0.0%  v8::internal::Heap::AllocateJSObjectFromMap(v8::internal::Map*, v8::internal::PretenureFlag, v8::internal::AllocationSite*)
      1    0.0%    0.0%  v8::internal::Heap::AllocateByteArray(int, v8::internal::PretenureFlag)
      1    0.0%    0.0%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Shrink(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int)
      1    0.0%    0.0%  v8::internal::HTemplateInstruction<1>::OperandAt(int) const
      1    0.0%    0.0%  v8::internal::HStoreNamedGeneric::RequiredInputRepresentation(int)
      1    0.0%    0.0%  v8::internal::HOptimizedGraphBuilder::VisitBlock(v8::internal::Block*)
      1    0.0%    0.0%  v8::internal::HDeadCodeEliminationPhase::MarkLive(v8::internal::HValue*, v8::internal::ZoneList<v8::internal::HValue*>*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::PostMarkSweepProcessing(int)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateWeakRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateNewSpaceWeakIndependentRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IterateAllRoots(v8::internal::ObjectVisitor*)
      1    0.0%    0.0%  v8::internal::GlobalHandles::IdentifyNewSpaceWeakIndependentHandles(bool (*)(v8::internal::Heap*, v8::internal::Object**))
      1    0.0%    0.0%  v8::internal::GCTracer::CurrentOldGenerationAllocationThroughputInBytesPerMillisecond() const
      1    0.0%    0.0%  v8::internal::FullCodeGenerator::VarOperand(v8::internal::Variable*, v8::internal::Register)
      1    0.0%    0.0%  v8::internal::FullCodeGenerator::EmitRegExpConstructResult(v8::internal::CallRuntime*)
      1    0.0%    0.0%  v8::internal::FreeList::Free(unsigned char*, int)
      1    0.0%    0.0%  v8::internal::FlexibleBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedArray::BodyDescriptor, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.0%    0.0%  v8::internal::FixedArray::set(int, v8::internal::Object*)
      1    0.0%    0.0%  v8::internal::Factory::NewUninitializedFixedArray(int)
      1    0.0%    0.0%  v8::internal::Dictionary<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::Add(v8::internal::Handle<v8::internal::SeededNumberDictionary>, unsigned int, v8::internal::Handle<v8::internal::Object>, v8::internal::PropertyDetails)
      1    0.0%    0.0%  v8::internal::Deserializer::ReadData(v8::internal::Object**, v8::internal::Object**, int, unsigned char*)
      1    0.0%    0.0%  v8::internal::Deoptimizer::DoComputeCompiledStubFrame(v8::internal::TranslationIterator*, int)
      1    0.0%    0.0%  v8::internal::CodeCache::Lookup(v8::internal::Name*, unsigned int)
      1    0.0%    0.0%  v8::internal::Code::FindHandlers(v8::internal::List<v8::internal::Handle<v8::internal::Code>, v8::internal::FreeStoreAllocationPolicy>*, int)
      1    0.0%    0.0%  v8::internal::Code::FindHandlerForMap(v8::internal::Map*)
      1    0.0%    0.0%  v8::internal::Code::FindFirstMap()
      1    0.0%    0.0%  v8::internal::Code::FindCodeAgeSequence()
      1    0.0%    0.0%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::AstValueFactory::NewNull()
      1    0.0%    0.0%  v8::internal::Assembler::j(v8::internal::Condition, v8::internal::Handle<v8::internal::Code>, v8::internal::RelocInfo::Mode)
      1    0.0%    0.0%  v8::internal::Assembler::emit_operand(int, v8::internal::Operand const&)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleyObjectElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)3> >::GrowCapacityAndConvertImpl(v8::internal::Handle<v8::internal::JSObject>, unsigned int)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleyObjectElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)3> >::Add(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::Object>, PropertyAttributes, unsigned int)
      1    0.0%    0.0%  v8::internal::(anonymous namespace)::CopyObjectToObjectElements(v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, int)
      1    0.0%    0.0%  v8::Isolate::SuppressMicrotaskExecutionScope::SuppressMicrotaskExecutionScope(v8::Isolate*)
      1    0.0%    0.0%  v8::(anonymous namespace)::CallDepthScope::~CallDepthScope()
      1    0.0%    0.0%  uv__next_timeout
      1    0.0%    0.0%  uv__epoll_pwait
      1    0.0%    0.0%  std::locale::~locale()
      1    0.0%    0.0%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      1    0.0%    0.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.204]
      1    0.0%    0.0%  int v8::internal::BinarySearch<(v8::internal::SearchMode)1, v8::internal::DescriptorArray>(v8::internal::DescriptorArray*, v8::internal::Name*, int, int, int, int*)
      1    0.0%    0.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::SemiSpaceCopyObject<(v8::internal::AllocationAlignment)1>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      1    0.0%    0.0%  _dl_mcount_wrapper_check
      1    0.0%    0.0%  __lll_unlock_wake
      1    0.0%    0.0%  __GI___pthread_mutex_unlock
      1    0.0%    0.0%  _IO_setb
      1    0.0%    0.0%  _IO_file_xsputn
      1    0.0%    0.0%  _IO_file_write

 [Summary]:
   ticks  total  nonlib   name
    223    0.2%    0.2%  JavaScript
  89358   99.5%   99.6%  C++
    152    0.2%    0.2%  GC
     94    0.1%          Shared libraries
    157    0.2%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
   5648   87.6%    6.3%  v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
    488    7.6%    0.5%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
     53    0.8%    0.1%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     52    0.8%    0.1%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
     28    0.4%    0.0%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     27    0.4%    0.0%  v8::Value::IsExternal() const
     26    0.4%    0.0%  v8::External::Value() const
     21    0.3%    0.0%  uv_close
     13    0.2%    0.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
     13    0.2%    0.0%  node::HandleWrap::Close(v8::FunctionCallbackInfo<v8::Value> const&)
      9    0.1%    0.0%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      7    0.1%    0.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      7    0.1%    0.0%  uv_now
      5    0.1%    0.0%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      5    0.1%    0.0%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      5    0.1%    0.0%  v8::internal::Runtime_Interrupt(int, v8::internal::Object**, v8::internal::Isolate*)
      5    0.1%    0.0%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      4    0.1%    0.0%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      4    0.1%    0.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::Runtime_StackGuard(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::Runtime_NewObject(int, v8::internal::Object**, v8::internal::Isolate*)
      3    0.0%    0.0%  v8::internal::HeapObject::SizeFromMap(v8::internal::Map*)
      3    0.0%    0.0%  v8::Object::InternalFieldCount()
      3    0.0%    0.0%  uv_timer_stop
      2    0.0%    0.0%  v8::internal::StoreBuffer::StoreBufferOverflow(v8::internal::Isolate*)
      2    0.0%    0.0%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.0%    0.0%  _IO_vfprintf
      1    0.0%    0.0%  v8::internal::Runtime_NewStrictArguments(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::Runtime_CompareIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.0%    0.0%  v8::internal::LookupIterator::PrepareForDataProperty(v8::internal::Handle<v8::internal::Object>)
      1    0.0%    0.0%  v8::Value::IsFunction() const
      1    0.0%    0.0%  uv__hrtime
      1    0.0%    0.0%  c32rtomb

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
  81467   90.7%  syscall

   5534    6.2%  v8::internal::(anonymous namespace)::FastElementsAccessor<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::DeleteCommon(v8::internal::Handle<v8::internal::JSObject>, unsigned int, v8::internal::Handle<v8::internal::FixedArrayBase>)
   5534  100.0%    v8::internal::Runtime_DeleteProperty_Strict(int, v8::internal::Object**, v8::internal::Isolate*)
   5498   99.3%      LazyCompile: *listOnTimeout timers.js:109:23

```
