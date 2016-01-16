test4.js on `master @ 0b43c08`.

```
/usr/bin/time node --prof test4.js
```
`time` output:
```
0.97user 1.73system 1:50.61elapsed 2%CPU (0avgtext+0avgdata 73932maxresident)k
8inputs+304outputs (0major+8363minor)pagefaults 0swaps
```

Relevant `--prof` data:

```
Statistical profiling result from test4-3-master.log, (209 ticks, 6 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
      5    2.4%          /lib/x86_64-linux-gnu/libc-2.21.so

 [JavaScript]:
   ticks  total  nonlib   name
      4    1.9%    2.0%  Stub: LoadDictionaryElementStub
      3    1.4%    1.5%  LazyCompile: *unrefTimeout timers.js:544:22
      3    1.4%    1.5%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      2    1.0%    1.0%  Stub: StoreTransitionStub
      2    1.0%    1.0%  Handler: An IC handler from the snapshot
      1    0.5%    0.5%  Stub: RecordWriteStub
      1    0.5%    0.5%  Stub: FastNewClosureStub
      1    0.5%    0.5%  Stub: CallApiAccessorStub
      1    0.5%    0.5%  Stub: CEntryStub
      1    0.5%    0.5%  LazyCompile: ~isFinite native v8natives.js:34:24
      1    0.5%    0.5%  LazyCompile: ~NativeModule.require node.js:918:34
      1    0.5%    0.5%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:612:32
      1    0.5%    0.5%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1    0.5%    0.5%  Function: ~<anonymous> tty.js:1:11
      1    0.5%    0.5%  Function: ~<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11

 [C++]:
   ticks  total  nonlib   name
     17    8.1%    8.3%  syscall
     16    7.7%    7.8%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
     13    6.2%    6.4%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
      9    4.3%    4.4%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      9    4.3%    4.4%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
      6    2.9%    2.9%  v8::internal::LookupIterator::Next()
      5    2.4%    2.5%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      5    2.4%    2.5%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      5    2.4%    2.5%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      4    1.9%    2.0%  v8::internal::Runtime::GetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      4    1.9%    2.0%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      3    1.4%    1.5%  v8::internal::StoreBuffer::Compact()
      3    1.4%    1.5%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      3    1.4%    1.5%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      2    1.0%    1.0%  write
      2    1.0%    1.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      2    1.0%    1.0%  v8::internal::Scavenger::ScavengeObjectSlow(v8::internal::HeapObject**, v8::internal::HeapObject*)
      2    1.0%    1.0%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
      2    1.0%    1.0%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
      2    1.0%    1.0%  __lll_lock_elision
      1    0.5%    0.5%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.5%    0.5%  void v8::internal::Code::CodeIterateBody<v8::internal::IncrementalMarkingMarkingVisitor>(v8::internal::Heap*)
      1    0.5%    0.5%  void std::__insertion_sort<v8::internal::VarAndOrder*, __gnu_cxx::__ops::_Iter_comp_iter<v8::internal::Vector<v8::internal::VarAndOrder>::RawComparer<int (*)(v8::internal::VarAndOrder const*, v8::internal::VarAndOrder const*)> > >(v8::internal::VarAndOrder*, v8::internal::VarAndOrder*, __gnu_cxx::__ops::_Iter_comp_iter<v8::internal::Vector<v8::internal::VarAndOrder>::RawComparer<int (*)(v8::internal::VarAndOrder const*, v8::internal::VarAndOrder const*)> >) [clone .constprop.146]
      1    0.5%    0.5%  void node::StreamBase::JSMethod<node::StreamWrap, &(int node::StreamBase::WriteString<(node::encoding)1>(v8::FunctionCallbackInfo<v8::Value> const&))>(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.5%    0.5%  v8::internal::VariableProxy::node_type() const
      1    0.5%    0.5%  v8::internal::UpdatePointer(v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.5%    0.5%  v8::internal::UniqueSet<v8::internal::Map>::Add(v8::internal::Unique<v8::internal::Map>, v8::internal::Zone*)
      1    0.5%    0.5%  v8::internal::TypeFeedbackVector::ClearICSlotsImpl(v8::internal::SharedFunctionInfo*, bool)
      1    0.5%    0.5%  v8::internal::StubCache::Clear()
      1    0.5%    0.5%  v8::internal::StaticMarkingVisitor<v8::internal::MarkCompactMarkingVisitor>::MarkMapContents(v8::internal::Heap*, v8::internal::Map*)
      1    0.5%    0.5%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitSharedFunctionInfoStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      1    0.5%    0.5%  v8::internal::SplayTree<v8::internal::EffectsBase<int, -2147483648>::SplayTreeConfig, v8::internal::ZoneAllocationPolicy>::Splay(int const&)
      1    0.5%    0.5%  v8::internal::SerializerDeserializer::Iterate(v8::internal::Isolate*, v8::internal::ObjectVisitor*)
      1    0.5%    0.5%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.5%    0.5%  v8::internal::Scanner::ScanString()
      1    0.5%    0.5%  v8::internal::Scanner::ScanIdentifierOrKeyword()
      1    0.5%    0.5%  v8::internal::Scanner::Next()
      1    0.5%    0.5%  v8::internal::RelocIterator::RelocIterator(v8::internal::Code*, int)
      1    0.5%    0.5%  v8::internal::PromotionQueue::RelocateQueueHead()
      1    0.5%    0.5%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseBinaryExpression(int, bool, v8::internal::ExpressionClassifier*, bool*)
      1    0.5%    0.5%  v8::internal::ParserBase<v8::internal::ParserTraits>::BindingPatternUnexpectedToken(v8::internal::ExpressionClassifier*)
      1    0.5%    0.5%  v8::internal::MarkCompactCollector::IsSlotInLiveObject(unsigned char*)
      1    0.5%    0.5%  v8::internal::Map::RawCopy(v8::internal::Handle<v8::internal::Map>, int)
      1    0.5%    0.5%  v8::internal::Map::FindInCodeCache(v8::internal::Name*, unsigned int)
      1    0.5%    0.5%  v8::internal::LInstruction::IsControl() const
      1    0.5%    0.5%  v8::internal::LGapResolver::BuildInitialMoveList(v8::internal::LParallelMove*)
      1    0.5%    0.5%  v8::internal::LAllocator::TraceAlloc(char const*, ...)
      1    0.5%    0.5%  v8::internal::LAllocator::LiveRangeFor(int)
      1    0.5%    0.5%  v8::internal::LAllocator::LAllocator(int, v8::internal::HGraph*)
      1    0.5%    0.5%  v8::internal::LAllocator::AllocateRegisters()
      1    0.5%    0.5%  v8::internal::KeyedGetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode) [clone .constprop.46]
      1    0.5%    0.5%  v8::internal::IncrementalMarking::WhiteToGreyAndPush(v8::internal::HeapObject*, v8::internal::MarkBit) [clone .isra.70]
      1    0.5%    0.5%  v8::internal::HeapObject::IterateBody(v8::internal::InstanceType, int, v8::internal::ObjectVisitor*)
      1    0.5%    0.5%  v8::internal::Heap::AllocateRaw(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [clone .constprop.439]
      1    0.5%    0.5%  v8::internal::Heap::AllocateFixedArray(int, v8::internal::PretenureFlag)
      1    0.5%    0.5%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindEntry(v8::internal::Isolate*, unsigned int)
      1    0.5%    0.5%  v8::internal::HTemplateInstruction<2>::OperandCount() const
      1    0.5%    0.5%  v8::internal::HTemplateInstruction<2>::InternalSetOperandAt(int, v8::internal::HValue*)
      1    0.5%    0.5%  v8::internal::HOptimizedGraphBuilder::VisitCall(v8::internal::Call*)
      1    0.5%    0.5%  v8::internal::HInstruction::InsertAfter(v8::internal::HInstruction*)
      1    0.5%    0.5%  v8::internal::HInferRepresentationPhase::Run()
      1    0.5%    0.5%  v8::internal::HGlobalValueNumberingPhase::CollectSideEffectsOnPathsToDominatedBlock(v8::internal::HBasicBlock*, v8::internal::HBasicBlock*)
      1    0.5%    0.5%  v8::internal::HEnvironment::Bind(int, v8::internal::HValue*)
      1    0.5%    0.5%  v8::internal::GlobalHandles::IterateStrongRoots(v8::internal::ObjectVisitor*)
      1    0.5%    0.5%  v8::internal::FreeList::Free(unsigned char*, int)
      1    0.5%    0.5%  v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::FixedArray::BodyDescriptor, int>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.5%    0.5%  v8::internal::Deserializer::ReadData(v8::internal::Object**, v8::internal::Object**, int, unsigned char*)
      1    0.5%    0.5%  v8::internal::DependentCode::Compact()
      1    0.5%    0.5%  v8::internal::Context::native_context()
      1    0.5%    0.5%  v8::internal::CompilationPhase::CompilationPhase(char const*, v8::internal::CompilationInfo*)
      1    0.5%    0.5%  v8::internal::Code::CopyFrom(v8::internal::CodeDesc const&)
      1    0.5%    0.5%  v8::internal::AstRawString::Internalize(v8::internal::Isolate*)
      1    0.5%    0.5%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.5%    0.5%  node::InternalModuleReadFile(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.5%    0.5%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.5%    0.5%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.204]
      1    0.5%    0.5%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)0, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.203]
      1    0.5%    0.5%  __vsnprintf_chk
      1    0.5%    0.5%  __lll_lock_wait
      1    0.5%    0.5%  __clock_gettime

 [Summary]:
   ticks  total  nonlib   name
     24   11.5%   11.8%  JavaScript
    174   83.3%   85.3%  C++
     64   30.6%   31.4%  GC
      5    2.4%          Shared libraries
      6    2.9%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     11   16.7%    5.3%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     10   15.2%    4.8%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      9   13.6%    4.3%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      9   13.6%    4.3%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      6    9.1%    2.9%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      4    6.1%    1.9%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      3    4.5%    1.4%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      3    4.5%    1.4%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
      2    3.0%    1.0%  v8::internal::Runtime_TryInstallOptimizedCode(int, v8::internal::Object**, v8::internal::Isolate*)
      2    3.0%    1.0%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Scanner::ScanString()
      1    1.5%    0.5%  v8::internal::Runtime_ToBooleanIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_StackGuard(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_CompareIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      1    1.5%    0.5%  __clock_gettime

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
     17    8.1%  syscall

     16    7.7%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)

     13    6.2%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)

      9    4.3%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)

      9    4.3%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
      9  100.0%    v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      9  100.0%      LazyCompile: ~runInThisContext node.js:903:28
      9  100.0%        LazyCompile: ~NativeModule.compile node.js:984:44
      9  100.0%          LazyCompile: ~NativeModule.require node.js:918:34
      3   33.3%            Function: ~<anonymous> tty.js:1:11
      2   22.2%            Function: ~<anonymous> module.js:1:11
      1   11.1%            LazyCompile: ~startup.globalVariables node.js:211:37
      1   11.1%            LazyCompile: ~startup node.js:13:19
      1   11.1%            Function: ~<anonymous> stream.js:1:11
      1   11.1%            Function: ~<anonymous> assert.js:1:11

      6    2.9%  v8::internal::LookupIterator::Next()
      5   83.3%    v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      4   80.0%      LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      4  100.0%        LazyCompile: ~wrapper timers.js:283:19
      4  100.0%          LazyCompile: ~unrefdHandle timers.js:320:22
      1   20.0%      LazyCompile: *reuse timers.js:122:15
      1  100.0%        LazyCompile: ~exports.unenroll timers.js:138:45
      1  100.0%          LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%            LazyCompile: ~wrapper timers.js:283:19
      1   16.7%    v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      Function: ~<anonymous> internal/linkedlist.js:1:11
      1  100.0%        LazyCompile: ~NativeModule.compile node.js:984:44
      1  100.0%          LazyCompile: ~NativeModule.require node.js:918:34
      1  100.0%            Function: ~<anonymous> timers.js:1:11

      6    2.9%  UNKNOWN

      5    2.4%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)

      5    2.4%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      1   20.0%    v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%        LazyCompile: ~Module._compile module.js:390:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:430:37
      1  100.0%            LazyCompile: ~Module.load module.js:358:33

      5    2.4%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)

      5    2.4%  /lib/x86_64-linux-gnu/libc-2.21.so
      2   40.0%    v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      1   50.0%      LazyCompile: ~startup node.js:13:19
      1  100.0%        Function: ~<anonymous> node.js:10:10
      1   50.0%      Function: ~<anonymous> buffer.js:1:11
      1  100.0%        LazyCompile: ~NativeModule.compile node.js:984:44
      1  100.0%          LazyCompile: ~NativeModule.require node.js:918:34
      1  100.0%            LazyCompile: ~startup.globalVariables node.js:211:37
      1   20.0%    v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~ReadableState _stream_readable.js:15:23
      1  100.0%        LazyCompile: ~Readable _stream_readable.js:80:18
      1  100.0%          LazyCompile: ~Duplex _stream_duplex.js:23:16
      1  100.0%            LazyCompile: ~Socket net.js:109:16
      1   20.0%    v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%        LazyCompile: ~wrapper timers.js:283:19
      1  100.0%          LazyCompile: ~unrefdHandle timers.js:320:22
```
