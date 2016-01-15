test4.js on `master @ 0b43c08`.

```
/usr/bin/time node --prof test4.js
```
`time` output:
```
      110.78 real         1.18 user         3.11 sys
```

Relevant `--prof` data:

```
Statistical profiling result from v8-logs/test4-4-master.log, (321 ticks, 48 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
     20    6.2%          /usr/local/bin/node
      1    0.3%          /usr/lib/system/libsystem_platform.dylib
      1    0.3%          /usr/lib/system/libsystem_kernel.dylib

 [JavaScript]:
   ticks  total  nonlib   name
      5    1.6%    1.7%  Handler: An IC handler from the snapshot
      3    0.9%    1.0%  Stub: StoreTransitionStub
      3    0.9%    1.0%  LazyCompile: *cancelTimers /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      2    0.6%    0.7%  LazyCompile: ~cancelTimers /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      2    0.6%    0.7%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:612:32
      1    0.3%    0.3%  Stub: RecordWriteStub {3}
      1    0.3%    0.3%  Stub: RecordWriteStub {2}
      1    0.3%    0.3%  Stub: RecordWriteStub {1}
      1    0.3%    0.3%  Stub: RecordWriteStub
      1    0.3%    0.3%  Stub: LoadDictionaryElementStub
      1    0.3%    0.3%  Stub: FastNewClosureStub
      1    0.3%    0.3%  LazyCompile: *unrefTimeout timers.js:544:22
      1    0.3%    0.3%  LazyCompile: *exports.unenroll timers.js:138:45
      1    0.3%    0.3%  LazyCompile: *<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1    0.3%    0.3%  KeyedLoadIC: A keyed load IC from the snapshot {1}
      1    0.3%    0.3%  KeyedLoadIC: A keyed load IC from the snapshot
      1    0.3%    0.3%  Function: ~<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11

 [C++]:
   ticks  total  nonlib   name
     21    6.5%    7.0%  ___bsdthread_ctl
     19    5.9%    6.4%  v8::internal::IncrementalMarking::UpdateMarkingDequeAfterScavenge()
     14    4.4%    4.7%  v8::internal::PointersUpdatingVisitor::CheckLayoutDescriptorAndDie(v8::internal::Heap*, v8::internal::Object**)
     11    3.4%    3.7%  node::StartProfilerIdleNotifier(v8::FunctionCallbackInfo<v8::Value> const&)
     10    3.1%    3.3%  void node::Wrap<node::ContextifyContext>(v8::Local<v8::Object>, node::ContextifyContext*)
      9    2.8%    3.0%  ___mkfifo_extended
      7    2.2%    2.3%  __simple_getenv
      6    1.9%    2.0%  v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::FixedArray::BodyDescriptor, int>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      5    1.6%    1.7%  v8::internal::MarkCompactCollector::EvacuateNewSpaceAndCandidates()
      5    1.6%    1.7%  v8::internal::MarkCompactCollector::DiscoverGreyObjectsOnPage(v8::internal::MemoryChunk*)
      5    1.6%    1.7%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
      5    1.6%    1.7%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::PromoteObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)0, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      4    1.2%    1.3%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      4    1.2%    1.3%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      3    0.9%    1.0%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      3    0.9%    1.0%  v8::internal::MarkCompactCollector::ClearMapTransitions(v8::internal::Map*, v8::internal::Map*)
      3    0.9%    1.0%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::PromoteObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)0, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      3    0.9%    1.0%  __simple_asl_msg_set
      2    0.6%    0.7%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      2    0.6%    0.7%  v8::internal::Parser::Parser(v8::internal::ParseInfo*)
      2    0.6%    0.7%  v8::internal::MarkCompactCollector::TryPromoteObject(v8::internal::HeapObject*, int)
      2    0.6%    0.7%  v8::internal::HOptimizedGraphBuilder::CanInlineArrayResizeOperation(v8::internal::Handle<v8::internal::Map>)
      2    0.6%    0.7%  v8::internal::HFlowEngine<v8::internal::State, v8::internal::Effects>::AnalyzeDominatedBlocks(v8::internal::HBasicBlock*, v8::internal::State*)
      2    0.6%    0.7%  v8::internal::Deserializer::DeserializePartial(v8::internal::Isolate*, v8::internal::Handle<v8::internal::JSGlobalProxy>, v8::internal::Handle<v8::internal::FixedArray>*)
      2    0.6%    0.7%  bool v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::SemiSpaceCopyObject<(v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      2    0.6%    0.7%  _malloc_zone_malloc
      2    0.6%    0.7%  _getxattr
      1    0.3%    0.3%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectEvacuationStrategy<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1>::VisitSpecialized<144>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.3%    0.3%  void v8::internal::RelocInfo::Visit<v8::internal::IncrementalMarkingMarkingVisitor>(v8::internal::Heap*)
      1    0.3%    0.3%  void v8::internal::HGraph::Run<v8::internal::HDeadCodeEliminationPhase>()
      1    0.3%    0.3%  void node::StreamBase::JSMethod<node::StreamWrap, &(int node::StreamBase::WriteString<(node::encoding)1>(v8::FunctionCallbackInfo<v8::Value> const&))>(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.3%    0.3%  v8::internal::UniqueSet<v8::internal::Map>::Add(v8::internal::Unique<v8::internal::Map>, v8::internal::Zone*)
      1    0.3%    0.3%  v8::internal::TypeImpl<v8::internal::HeapTypeConfig>::Limits::IsEmpty()
      1    0.3%    0.3%  v8::internal::TwoByteStringKey::~TwoByteStringKey()
      1    0.3%    0.3%  v8::internal::StoreBuffer::ClearFilteringHashSets()
      1    0.3%    0.3%  v8::internal::StaticNewSpaceVisitor<v8::internal::StaticScavengeVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.3%    0.3%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitWeakCell(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.3%    0.3%  v8::internal::Scavenger::ScavengeObjectSlow(v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.3%    0.3%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      1    0.3%    0.3%  v8::internal::Scanner::ScanString()
      1    0.3%    0.3%  v8::internal::Scanner::Scan()
      1    0.3%    0.3%  v8::internal::Runtime_HasInPrototypeChain(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.3%    0.3%  v8::internal::Runtime::GetCallerArguments(v8::internal::Isolate*, int, int*)
      1    0.3%    0.3%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseYieldExpression(v8::internal::ExpressionClassifier*, bool*)
      1    0.3%    0.3%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseStrongSuperCallExpression(v8::internal::ExpressionClassifier*, bool*)
      1    0.3%    0.3%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseMemberWithNewPrefixesExpression(v8::internal::ExpressionClassifier*, bool*)
      1    0.3%    0.3%  v8::internal::OptimizingCompileDispatcher::QueueForOptimization(v8::internal::OptimizedCompileJob*)
      1    0.3%    0.3%  v8::internal::MemoryChunk::Initialize(v8::internal::Heap*, unsigned char*, unsigned long, unsigned char*, unsigned char*, v8::internal::Executability, v8::internal::Space*)
      1    0.3%    0.3%  v8::internal::LookupIterator::PropertyOrElement(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Name>, v8::internal::LookupIterator::Configuration)
      1    0.3%    0.3%  v8::internal::LookupIterator::GetFieldIndex() const
      1    0.3%    0.3%  v8::internal::LoadDescriptor::BuildCallInterfaceDescriptorFunctionType(v8::internal::Isolate*, int)
      1    0.3%    0.3%  v8::internal::LCodeGen::DoStoreGlobalViaContext(v8::internal::LStoreGlobalViaContext*)
      1    0.3%    0.3%  v8::internal::LCodeGen::DoStoreCodeEntry(v8::internal::LStoreCodeEntry*)
      1    0.3%    0.3%  v8::internal::LCodeGen::DoContext(v8::internal::LContext*)
      1    0.3%    0.3%  v8::internal::LChunkBuilder::VisitInstruction(v8::internal::HInstruction*)
      1    0.3%    0.3%  v8::internal::LChunkBuilder::Build()
      1    0.3%    0.3%  v8::internal::LAllocator::ResolveControlFlow()
      1    0.3%    0.3%  v8::internal::LAllocator::ProcessInstructions(v8::internal::HBasicBlock*, v8::internal::BitVector*)
      1    0.3%    0.3%  v8::internal::LAllocator::BuildLiveRanges()
      1    0.3%    0.3%  v8::internal::LAllocator::AllocateGeneralRegisters()
      1    0.3%    0.3%  v8::internal::JSObjectWalkVisitor<v8::internal::AllocationSiteCreationContext>::StructureWalk(v8::internal::Handle<v8::internal::JSObject>)
      1    0.3%    0.3%  v8::internal::Isolate::random_number_generator()
      1    0.3%    0.3%  v8::internal::InnerPointerToCodeCache::GetCacheEntry(unsigned char*)
      1    0.3%    0.3%  v8::internal::IncrementalMarking::Initialize()
      1    0.3%    0.3%  v8::internal::IC::ComputeHandler(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>)
      1    0.3%    0.3%  v8::internal::HeapObject::IterateBody(v8::internal::InstanceType, int, v8::internal::ObjectVisitor*)
      1    0.3%    0.3%  v8::internal::HashTable<v8::internal::StringTable, v8::internal::StringTableShape, v8::internal::HashTableKey*>::IteratePrefix(v8::internal::ObjectVisitor*)
      1    0.3%    0.3%  v8::internal::HInstruction::position() const
      1    0.3%    0.3%  v8::internal::HGraph::HGraph(v8::internal::CompilationInfo*)
      1    0.3%    0.3%  v8::internal::HEnvironment::CopyWithoutHistory() const
      1    0.3%    0.3%  v8::internal::HConstant::HConstant(v8::internal::Handle<v8::internal::Object>, v8::internal::Representation)
      1    0.3%    0.3%  v8::internal::HBasicBlock::AddInstruction(v8::internal::HInstruction*, v8::internal::SourcePosition)
      1    0.3%    0.3%  v8::internal::FullCodeGenerator::EmitStoreToStackLocalOrContextSlot(v8::internal::Variable*, v8::internal::Operand)
      1    0.3%    0.3%  v8::internal::FeedbackNexus::FindHandlers(v8::internal::List<v8::internal::Handle<v8::internal::Code>, v8::internal::FreeStoreAllocationPolicy>*, int) const
      1    0.3%    0.3%  v8::internal::Factory::NewAllocationSite()
      1    0.3%    0.3%  v8::internal::DispatchTableConstructor::VisitText(v8::internal::TextNode*)
      1    0.3%    0.3%  v8::internal::Deoptimizer::VisitAllOptimizedFunctionsForContext(v8::internal::Context*, v8::internal::OptimizedFunctionVisitor*)
      1    0.3%    0.3%  v8::internal::CompleteParserRecorder::CompleteParserRecorder()
      1    0.3%    0.3%  v8::internal::Compiler::Analyze(v8::internal::ParseInfo*)
      1    0.3%    0.3%  v8::internal::CompilationInfo::CompilationInfo(v8::internal::ParseInfo*)
      1    0.3%    0.3%  v8::internal::CodeStubGraphBuilder<v8::internal::FastNewContextStub>::BuildCodeStub()
      1    0.3%    0.3%  v8::internal::CodeStub::MajorName(v8::internal::CodeStub::Major)
      1    0.3%    0.3%  v8::internal::Code::MarkToBeExecutedOnce(v8::internal::Isolate*)
      1    0.3%    0.3%  v8::internal::CallApiAccessorStub::MajorKey() const
      1    0.3%    0.3%  v8::internal::AstValueFactory::NewString(v8::internal::AstRawString const*)
      1    0.3%    0.3%  v8::internal::AstValueFactory::GetOneByteStringInternal(v8::internal::Vector<unsigned char const>)
      1    0.3%    0.3%  v8::internal::Assembler::movsd(v8::internal::Operand const&, v8::internal::XMMRegister)
      1    0.3%    0.3%  v8::internal::ApiNatives::ConfigureInstance(v8::internal::Isolate*, v8::internal::Handle<v8::internal::FunctionTemplateInfo>, v8::internal::Handle<v8::internal::JSObject>)
      1    0.3%    0.3%  v8::Value::IsBoolean() const
      1    0.3%    0.3%  v8::Object::Set(unsigned int, v8::Local<v8::Value>)
      1    0.3%    0.3%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.3%    0.3%  node::TTYWrap::New(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.3%    0.3%  int v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::JSObject::BodyDescriptor, int>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.3%    0.3%  _pthread_rwlock_init
      1    0.3%    0.3%  _posix_spawnattr_setbinpref_np
      1    0.3%    0.3%  ___libplatform_init

 [Summary]:
   ticks  total  nonlib   name
     27    8.4%    9.0%  JavaScript
    224   69.8%   74.9%  C++
     71   22.1%   23.7%  GC
     22    6.9%          Shared libraries
     48   15.0%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     24   28.9%    7.5%  v8::internal::Builtins::~Builtins()
     13   15.7%    4.0%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      8    9.6%    2.5%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      5    6.0%    1.6%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      5    6.0%    1.6%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      4    4.8%    1.2%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      4    4.8%    1.2%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      3    3.6%    0.9%  v8::internal::Runtime_GetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      2    2.4%    0.6%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    2.4%    0.6%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    2.4%    0.6%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      2    2.4%    0.6%  v8::internal::Runtime_CompareIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.3%  v8::internal::Runtime_TryInstallOptimizedCode(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.3%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.3%  v8::internal::Runtime_NotifyStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.3%  v8::internal::Runtime_NewObject(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.3%  v8::internal::Runtime_HasOwnProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.3%  v8::internal::Runtime_CompareNilIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.3%  v8::internal::Runtime::GetCallerArguments(v8::internal::Isolate*, int, int*)
      1    1.2%    0.3%  v8::Value::IsBoolean() const
      1    1.2%    0.3%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
     48   15.0%  UNKNOWN

     21    6.5%  ___bsdthread_ctl

     20    6.2%  /usr/local/bin/node
      3   15.0%    v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      1   33.3%      LazyCompile: ~PostExperimentals native prologue.js:152:27
      1   33.3%      Function: ~<anonymous> node.js:10:10
      1   33.3%      Function: ~<anonymous> native harmony-array-includes.js:2:10
      2   10.0%    v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1   50.0%      LazyCompile: ~exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:612:32
      1  100.0%        Function: ~<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%          LazyCompile: ~Module._compile module.js:390:37
      1  100.0%            LazyCompile: ~Module._extensions..js module.js:430:37
      1   50.0%      LazyCompile: *<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%        LazyCompile: ~Module._compile module.js:390:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:430:37
      1  100.0%            LazyCompile: ~Module.load module.js:358:33
      1    5.0%    v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: *<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%        LazyCompile: ~Module._compile module.js:390:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:430:37
      1  100.0%            LazyCompile: ~Module.load module.js:358:33
      1    5.0%    v8::internal::Runtime_GetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: *cancelTimers /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%        LazyCompile: ~wrapper timers.js:283:19
      1  100.0%          LazyCompile: ~unrefdHandle timers.js:320:22
      1    5.0%    v8::internal::Runtime_CompareNilIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~StringSplitOnRegExp native string.js:421:29
      1  100.0%        LazyCompile: ~split native string.js:404:23
      1  100.0%          LazyCompile: ~Module._nodeModulePaths module.js:212:35
      1  100.0%            LazyCompile: ~Module.load module.js:358:33

     19    5.9%  v8::internal::IncrementalMarking::UpdateMarkingDequeAfterScavenge()
      2   10.5%    v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      1   50.0%      LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:612:32
      1  100.0%        LazyCompile: *<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%          LazyCompile: ~Module._compile module.js:390:37
      1  100.0%            LazyCompile: ~Module._extensions..js module.js:430:37
      1   50.0%      LazyCompile: *<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%        LazyCompile: ~Module._compile module.js:390:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:430:37
      1  100.0%            LazyCompile: ~Module.load module.js:358:33

     14    4.4%  v8::internal::PointersUpdatingVisitor::CheckLayoutDescriptorAndDie(v8::internal::Heap*, v8::internal::Object**)

     11    3.4%  node::StartProfilerIdleNotifier(v8::FunctionCallbackInfo<v8::Value> const&)
     11  100.0%    v8::internal::Builtins::~Builtins()
      7   63.6%      Function: ~<anonymous> node.js:10:10
      3   27.3%      Function: ~<anonymous> net.js:1:11
      3  100.0%        LazyCompile: ~NativeModule.compile node.js:984:44
      3  100.0%          LazyCompile: ~NativeModule.require node.js:918:34
      3  100.0%            Function: ~<anonymous> tty.js:1:11
      1    9.1%      Function: ~<anonymous> util.js:1:11
      1  100.0%        LazyCompile: ~NativeModule.compile node.js:984:44
      1  100.0%          LazyCompile: ~NativeModule.require node.js:918:34
      1  100.0%            Function: ~<anonymous> assert.js:1:11

     10    3.1%  void node::Wrap<node::ContextifyContext>(v8::Local<v8::Object>, node::ContextifyContext*)
     10  100.0%    v8::internal::Builtins::~Builtins()
     10  100.0%      LazyCompile: ~runInThisContext node.js:903:28
     10  100.0%        LazyCompile: ~NativeModule.compile node.js:984:44
     10  100.0%          LazyCompile: ~NativeModule.require node.js:918:34
      3   30.0%            Function: ~<anonymous> module.js:1:11
      2   20.0%            LazyCompile: ~startup.globalVariables node.js:211:37
      2   20.0%            Function: ~<anonymous> stream.js:1:11
      1   10.0%            Function: ~<anonymous> tty.js:1:11
      1   10.0%            Function: ~<anonymous> timers.js:1:11
      1   10.0%            Function: ~<anonymous> assert.js:1:11

      9    2.8%  ___mkfifo_extended
      3   33.3%    v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      1   33.3%      LazyCompile: ~startup node.js:13:19
      1  100.0%        Function: ~<anonymous> node.js:10:10
      1   33.3%      LazyCompile: ~replace native string.js:135:23
      1  100.0%        LazyCompile: ~exports.format util.js:13:26
      1  100.0%          LazyCompile: ~Console.log console.js:35:33
      1  100.0%            LazyCompile: ~<anonymous> native v8natives.js:1226:16
      1   33.3%      LazyCompile: ~DefineObjectProperty native v8natives.js:462:30
      1  100.0%        LazyCompile: ~DefineOwnProperty native v8natives.js:631:27
      1  100.0%          LazyCompile: ~defineProperties native v8natives.js:799:32
      1  100.0%            LazyCompile: ~create native v8natives.js:755:22
      1   11.1%    v8::internal::Runtime_TryInstallOptimizedCode(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:612:32
      1  100.0%        Function: ~<anonymous> /Users/Jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%          LazyCompile: ~Module._compile module.js:390:37
      1  100.0%            LazyCompile: ~Module._extensions..js module.js:430:37
      1   11.1%    v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~Socket net.js:109:16
      1  100.0%        LazyCompile: ~unrefTimeout timers.js:544:22
      1  100.0%          LazyCompile: ~createWritableStdioStream node.js:618:37
      1  100.0%            LazyCompile: ~<anonymous> node.js:679:48
      1   11.1%    v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~DefineObjectProperty native v8natives.js:462:30
      1  100.0%        LazyCompile: ~DefineOwnProperty native v8natives.js:631:27
      1  100.0%          LazyCompile: ~__defineGetter__ native v8natives.js:133:28
      1  100.0%            LazyCompile: ~startup.processStdio node.js:661:34
      1   11.1%    v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~NativeModule.cache node.js:997:42
      1  100.0%        LazyCompile: ~NativeModule.require node.js:918:34
      1  100.0%          Function: ~<anonymous> fs.js:1:11
      1  100.0%            LazyCompile: ~NativeModule.compile node.js:984:44

      7    2.2%  __simple_getenv
      1   14.3%    v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~Module._resolveFilename module.js:335:35
      1  100.0%        LazyCompile: Module._load module.js:295:24
      1  100.0%          LazyCompile: ~Module.runMain module.js:455:26
      1  100.0%            LazyCompile: ~startup node.js:13:19
```
