test3.js on `master @ 0b43c08`.

```
node --prof test4.js
```

Relevant `--prof` data:

```
Statistical profiling result from test4-1-master.log, (210 ticks, 2 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
      6    2.9%          /lib/x86_64-linux-gnu/libc-2.21.so
      1    0.5%          [vdso]

 [JavaScript]:
   ticks  total  nonlib   name
      5    2.4%    2.5%  Stub: LoadDictionaryElementStub
      3    1.4%    1.5%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1    0.5%    0.5%  Stub: StoreTransitionStub
      1    0.5%    0.5%  Stub: RecordWriteStub {2}
      1    0.5%    0.5%  Stub: RecordWriteStub {1}
      1    0.5%    0.5%  Stub: RecordWriteStub
      1    0.5%    0.5%  Stub: FastNewClosureStub
      1    0.5%    0.5%  LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1    0.5%    0.5%  LazyCompile: ~NativeModule.compile node.js:965:44
      1    0.5%    0.5%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
      1    0.5%    0.5%  KeyedStoreIC: A keyed store IC from the snapshot
      1    0.5%    0.5%  Handler: An IC handler from the snapshot

 [C++]:
   ticks  total  nonlib   name
     17    8.1%    8.4%  syscall
     14    6.7%    6.9%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
     13    6.2%    6.4%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
     12    5.7%    5.9%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
      9    4.3%    4.4%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      7    3.3%    3.4%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      6    2.9%    3.0%  v8::internal::LookupIterator::Next()
      6    2.9%    3.0%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
      5    2.4%    2.5%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      5    2.4%    2.5%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      5    2.4%    2.5%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      4    1.9%    2.0%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      4    1.9%    2.0%  __lll_lock_elision
      3    1.4%    1.5%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      3    1.4%    1.5%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      3    1.4%    1.5%  v8::internal::SemiSpace::GrowTo(int)
      3    1.4%    1.5%  v8::internal::RelocIterator::next()
      3    1.4%    1.5%  v8::internal::Heap::IterateAndMarkPointersToFromSpace(v8::internal::HeapObject*, unsigned char*, unsigned char*, bool, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      2    1.0%    1.0%  write
      2    1.0%    1.0%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      2    1.0%    1.0%  v8::internal::UpdatePointer(v8::internal::HeapObject**, v8::internal::HeapObject*)
      2    1.0%    1.0%  v8::internal::StoreBuffer::Compact()
      2    1.0%    1.0%  v8::internal::Runtime::GetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      2    1.0%    1.0%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      2    1.0%    1.0%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      2    1.0%    1.0%  v8::internal::LChunk::IsGapAt(int) const
      2    1.0%    1.0%  v8::internal::Heap::DoScavenge(v8::internal::ObjectVisitor*, unsigned char*)
      1    0.5%    0.5%  void v8::internal::String::WriteToFlat<unsigned short>(v8::internal::String*, unsigned short*, int, int)
      1    0.5%    0.5%  void std::__introsort_loop<v8::internal::LiveRange**, long, __gnu_cxx::__ops::_Iter_comp_iter<v8::internal::Vector<v8::internal::LiveRange*>::RawComparer<int (*)(v8::internal::LiveRange* const*, v8::internal::LiveRange* const*)> > >(v8::internal::LiveRange**, v8::internal::LiveRange**, long, __gnu_cxx::__ops::_Iter_comp_iter<v8::internal::Vector<v8::internal::LiveRange*>::RawComparer<int (*)(v8::internal::LiveRange* const*, v8::internal::LiveRange* const*)> >) [clone .constprop.111]
      1    0.5%    0.5%  v8::internal::VSNPrintF(v8::internal::Vector<char>, char const*, __va_list_tag*)
      1    0.5%    0.5%  v8::internal::TypeFeedbackVector::ClearSlotsImpl(v8::internal::SharedFunctionInfo*, bool)
      1    0.5%    0.5%  v8::internal::TransitionArray::Insert(v8::internal::Handle<v8::internal::Map>, v8::internal::Handle<v8::internal::Name>, v8::internal::Handle<v8::internal::Map>, v8::internal::SimpleTransitionFlag)
      1    0.5%    0.5%  v8::internal::StringTable::LookupKey(v8::internal::Isolate*, v8::internal::HashTableKey*)
      1    0.5%    0.5%  v8::internal::SnapshotByteSource::GetInt()
      1    0.5%    0.5%  v8::internal::SideEffectsTracker::ComputeChanges(v8::internal::HInstruction*)
      1    0.5%    0.5%  v8::internal::Scope::Scope(v8::internal::Zone*, v8::internal::Scope*, v8::internal::ScopeType, v8::internal::AstValueFactory*, v8::internal::FunctionKind)
      1    0.5%    0.5%  v8::internal::Scanner::ScanNumber(bool)
      1    0.5%    0.5%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.5%    0.5%  v8::internal::RegExpParser::Advance()
      1    0.5%    0.5%  v8::internal::PromotionQueue::RelocateQueueHead()
      1    0.5%    0.5%  v8::internal::MarkCompactCollector::Initialize()
      1    0.5%    0.5%  v8::internal::MarkCompactCollector::EvacuateNewSpaceAndCandidates()
      1    0.5%    0.5%  v8::internal::LookupIterator::IsIntegerIndexedExotic(v8::internal::JSReceiver*)
      1    0.5%    0.5%  v8::internal::Logger::CodeCreateEvent(v8::internal::Logger::LogEventsAndTags, v8::internal::Code*, v8::internal::SharedFunctionInfo*, v8::internal::CompilationInfo*, v8::internal::Name*, int, int)
      1    0.5%    0.5%  v8::internal::LayoutDescriptorHelper::LayoutDescriptorHelper(v8::internal::Map*)
      1    0.5%    0.5%  v8::internal::LCodeGen::GenerateBodyInstructionPre(v8::internal::LInstruction*)
      1    0.5%    0.5%  v8::internal::LAllocator::TryAllocateFreeReg(v8::internal::LiveRange*)
      1    0.5%    0.5%  v8::internal::LAllocator::TraceAlloc(char const*, ...)
      1    0.5%    0.5%  v8::internal::LAllocator::AllocateRegisters()
      1    0.5%    0.5%  v8::internal::LAllocator::AddToUnhandledSorted(v8::internal::LiveRange*)
      1    0.5%    0.5%  v8::internal::JSFunction::JSFunctionIterateBody(int, v8::internal::ObjectVisitor*)
      1    0.5%    0.5%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
      1    0.5%    0.5%  v8::internal::Heap::CopyJSObject(v8::internal::JSObject*, v8::internal::AllocationSite*)
      1    0.5%    0.5%  v8::internal::HValue::Equals(v8::internal::HValue*)
      1    0.5%    0.5%  v8::internal::HGraphBuilder::AddInstruction(v8::internal::HInstruction*)
      1    0.5%    0.5%  v8::internal::HDehoistIndexComputationsPhase::Run()
      1    0.5%    0.5%  v8::internal::HBasicBlock::CreateSimulate(v8::internal::BailoutId, v8::internal::RemovableSimulate)
      1    0.5%    0.5%  v8::internal::HBasicBlock::AddInstruction(v8::internal::HInstruction*, v8::internal::SourcePosition)
      1    0.5%    0.5%  v8::internal::FlexibleBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedArray::BodyDescriptor, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.5%    0.5%  v8::internal::FixedArray::set(int, v8::internal::Object*)
      1    0.5%    0.5%  v8::internal::Factory::InitializeFunction(v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::SharedFunctionInfo>, v8::internal::Handle<v8::internal::Context>)
      1    0.5%    0.5%  v8::internal::CpuFeatures::FlushICache(void*, unsigned long)
      1    0.5%    0.5%  v8::internal::CodeStub::GetCode()
      1    0.5%    0.5%  v8::internal::CodeStub::FindCodeInCache(v8::internal::Code**)
      1    0.5%    0.5%  v8::internal::AstNumberingVisitor::VisitCompareOperation(v8::internal::CompareOperation*)
      1    0.5%    0.5%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::DictionaryElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)6> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
      1    0.5%    0.5%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.5%    0.5%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.204]
      1    0.5%    0.5%  cfree
      1    0.5%    0.5%  __libc_malloc

 [Summary]:
   ticks  total  nonlib   name
     18    8.6%    8.9%  JavaScript
    183   87.1%   90.1%  C++
     61   29.0%   30.0%  GC
      7    3.3%          Shared libraries
      2    1.0%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     14   20.6%    6.7%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     12   17.6%    5.7%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
     10   14.7%    4.8%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     10   14.7%    4.8%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      3    4.4%    1.4%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      3    4.4%    1.4%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      3    4.4%    1.4%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    2.9%    1.0%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      2    2.9%    1.0%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_TryInstallOptimizedCode(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_RegExpInitializeAndCompile(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_NewClosure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_DefineDataPropertyUnchecked(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.5%    0.5%  v8::internal::LookupIterator::Next()
      1    1.5%    0.5%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
     17    8.1%  syscall

     14    6.7%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
     14  100.0%    v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     13   92.9%      LazyCompile: ~runInThisContext node.js:884:28
     13  100.0%        LazyCompile: ~NativeModule.compile node.js:965:44
     13  100.0%          LazyCompile: ~NativeModule.require node.js:899:34
      3   23.1%            Function: ~<anonymous> stream.js:1:11
      2   15.4%            LazyCompile: ~startup node.js:13:19
      2   15.4%            Function: ~<anonymous> tty.js:1:11
      2   15.4%            Function: ~<anonymous> module.js:1:11
      1    7.7%            LazyCompile: ~startup.globalVariables node.js:192:37
      1    7.7%            LazyCompile: ~startup.globalTimeouts node.js:202:36
      1    7.7%            Function: ~<anonymous> timers.js:1:11
      1    7.7%            Function: ~<anonymous> assert.js:1:11
      1    7.1%      LazyCompile: ~exports.runInThisContext vm.js:52:36
      1  100.0%        LazyCompile: ~Module._compile module.js:367:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:403:37
      1  100.0%            LazyCompile: ~Module.load module.js:335:33

     13    6.2%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)

     12    5.7%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)

      9    4.3%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)

      7    3.3%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)

      6    2.9%  v8::internal::LookupIterator::Next()
      5   83.3%    v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      4   80.0%      LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      4  100.0%        LazyCompile: ~wrapper timers.js:275:19
      4  100.0%          LazyCompile: ~unrefdHandle timers.js:312:22
      1   20.0%      LazyCompile: *reuse timers.js:122:15
      1  100.0%        LazyCompile: ~exports.unenroll timers.js:138:45
      1  100.0%          LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%            LazyCompile: ~wrapper timers.js:275:19
      1   16.7%    LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%      v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%        LazyCompile: *exports.unenroll timers.js:138:45
      1  100.0%          LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%            LazyCompile: ~wrapper timers.js:275:19

      6    2.9%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
      1   16.7%    v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
      1  100.0%        LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%          LazyCompile: ~Module._compile module.js:367:37
      1  100.0%            LazyCompile: ~Module._extensions..js module.js:403:37

      6    2.9%  /lib/x86_64-linux-gnu/libc-2.21.so
      4   66.7%    v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      1   25.0%      LazyCompile: ~writeOrBuffer _stream_writable.js:255:23
      1  100.0%        LazyCompile: ~Writable.write _stream_writable.js:186:36
      1  100.0%          LazyCompile: ~Socket.setNoDelay.Socket.setKeepAlive.Socket._read.Socket.write net.js:615:34
      1  100.0%            LazyCompile: ~Console.log console.js:35:33
      1   25.0%      LazyCompile: ~startup node.js:13:19
      1  100.0%        Function: ~<anonymous> node.js:10:10
      1   25.0%      LazyCompile: ~Buffer buffer.js:43:16
      1  100.0%        LazyCompile: fs.readFileSync fs.js:417:27
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:403:37
      1  100.0%            LazyCompile: ~Module.load module.js:335:33
      1   25.0%      LazyCompile: ~<anonymous> node.js:931:58
      1  100.0%        LazyCompile: ~InnerArraySome native array.js:940:24
      1  100.0%          LazyCompile: ~some native array.js:953:19
      1  100.0%            Function: ~<anonymous> node.js:10:10
      1   16.7%    v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%        LazyCompile: ~wrapper timers.js:275:19
      1  100.0%          LazyCompile: ~unrefdHandle timers.js:312:22
      1   16.7%    v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%        LazyCompile: ~wrapper timers.js:275:19
      1  100.0%          LazyCompile: ~unrefdHandle timers.js:312:22

      5    2.4%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      1   20.0%    v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%        LazyCompile: ~Module._compile module.js:367:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:403:37
      1  100.0%            LazyCompile: ~Module.load module.js:335:33

      5    2.4%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)

      5    2.4%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]

      5    2.4%  Stub: LoadDictionaryElementStub
      4   80.0%    LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      4  100.0%      LazyCompile: ~wrapper timers.js:275:19
      4  100.0%        LazyCompile: ~unrefdHandle timers.js:312:22
      1   20.0%    LazyCompile: *exports.unenroll timers.js:138:45
      1  100.0%      LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%        LazyCompile: ~wrapper timers.js:275:19
      1  100.0%          LazyCompile: ~unrefdHandle timers.js:312:22

```
