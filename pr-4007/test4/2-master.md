test4.js on `master @ 0b43c08`.

```
/usr/bin/time node --prof test4.js
```
`time` output:
```
0.92user 1.67system 1:50.63elapsed 2%CPU (0avgtext+0avgdata 72308maxresident)k
656inputs+312outputs (5major+8391minor)pagefaults 0swaps
```

Relevant `--prof` data:

```
Statistical profiling result from test4-2-master.log, (245 ticks, 10 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
      4    1.6%          /lib/x86_64-linux-gnu/libc-2.21.so
      3    1.2%          /home/jeremiah/Documents/node/out/Release/node
      2    0.8%          [vdso]

 [JavaScript]:
   ticks  total  nonlib   name
      3    1.2%    1.3%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      2    0.8%    0.8%  Stub: LoadDictionaryElementStub
      2    0.8%    0.8%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
      2    0.8%    0.8%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      2    0.8%    0.8%  Handler: An IC handler from the snapshot
      1    0.4%    0.4%  Stub: CallICStub(args(5), METHOD,
      1    0.4%    0.4%  Stub: BinaryOpICStub
      1    0.4%    0.4%  LazyCompile: ~exports.unenroll timers.js:138:45
      1    0.4%    0.4%  LazyCompile: *unrefTimeout timers.js:532:22
      1    0.4%    0.4%  KeyedLoadIC: A keyed load IC from the snapshot

 [C++]:
   ticks  total  nonlib   name
     17    6.9%    7.2%  syscall
     16    6.5%    6.8%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
     13    5.3%    5.5%  v8::internal::MarkCompactCollector::IsSlotInBlackObjectSlow(v8::internal::Page*, unsigned char*)
     13    5.3%    5.5%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
      8    3.3%    3.4%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      8    3.3%    3.4%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::MarkTransitionArray(v8::internal::Heap*, v8::internal::TransitionArray*)
      8    3.3%    3.4%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      7    2.9%    3.0%  v8::internal::MarkCompactCollector::MigrateObjectTagged(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::SlotsBuffer**)
      6    2.4%    2.5%  write
      5    2.0%    2.1%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      4    1.6%    1.7%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      4    1.6%    1.7%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      4    1.6%    1.7%  int v8::internal::FlexibleBodyVisitor<v8::internal::StaticScavengeVisitor, v8::internal::JSObject::BodyDescriptor, int>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      3    1.2%    1.3%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      3    1.2%    1.3%  v8::internal::LookupIterator::Next()
      3    1.2%    1.3%  v8::internal::(anonymous namespace)::CopyDictionaryToObjectElements(v8::internal::FixedArrayBase*, unsigned int, v8::internal::FixedArrayBase*, v8::internal::ElementsKind, unsigned int, int)
      3    1.2%    1.3%  node::DLOpen(v8::FunctionCallbackInfo<v8::Value> const&)
      2    0.8%    0.8%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)0, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      2    0.8%    0.8%  void v8::internal::Code::CodeIterateBody<v8::internal::IncrementalMarkingMarkingVisitor>(v8::internal::Heap*)
      2    0.8%    0.8%  v8::internal::StoreBuffer::EnsureSpace(long)
      2    0.8%    0.8%  v8::internal::PatchIncrementalMarkingRecordWriteStubs(v8::internal::Heap*, v8::internal::RecordWriteStub::Mode) [clone .constprop.117]
      2    0.8%    0.8%  v8::internal::Object::GetPropertyWithAccessor(v8::internal::LookupIterator*, v8::internal::LanguageMode)
      2    0.8%    0.8%  v8::internal::NewSpace::Grow()
      2    0.8%    0.8%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      2    0.8%    0.8%  v8::internal::LAllocator::MeetConstraintsBetween(v8::internal::LInstruction*, v8::internal::LInstruction*, int)
      2    0.8%    0.8%  v8::internal::KeyedGetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode) [clone .constprop.46]
      2    0.8%    0.8%  v8::internal::Heap::IterateAndMarkPointersToFromSpace(v8::internal::HeapObject*, unsigned char*, unsigned char*, bool, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      2    0.8%    0.8%  v8::internal::Heap::DoScavenge(v8::internal::ObjectVisitor*, unsigned char*)
      2    0.8%    0.8%  v8::internal::Deserializer::ReadData(v8::internal::Object**, v8::internal::Object**, int, unsigned char*)
      2    0.8%    0.8%  v8::internal::AstValueFactory::GetString(unsigned int, bool, v8::internal::Vector<unsigned char const>)
      1    0.4%    0.4%  v8::internal::StubCache::CollectMatchingMaps(v8::internal::SmallMapList*, v8::internal::Handle<v8::internal::Name>, unsigned int, v8::internal::Handle<v8::internal::Context>, v8::internal::Zone*)
      1    0.4%    0.4%  v8::internal::String::ToCString(v8::internal::AllowNullsFlag, v8::internal::RobustnessFlag, int, int, int*)
      1    0.4%    0.4%  v8::internal::StoreBuffer::FindPointersToNewSpaceInRegion(unsigned char*, unsigned char*, void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      1    0.4%    0.4%  v8::internal::StaticMarkingVisitor<v8::internal::MarkCompactMarkingVisitor>::MarkInlinedFunctionsCode(v8::internal::Heap*, v8::internal::Code*)
      1    0.4%    0.4%  v8::internal::Runtime_AddNamedProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    0.4%    0.4%  v8::internal::RootMarkingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      1    0.4%    0.4%  v8::internal::RelocIterator::RelocIterator(v8::internal::CodeDesc const&, int)
      1    0.4%    0.4%  v8::internal::RelocIterator::RelocIterator(v8::internal::Code*, int)
      1    0.4%    0.4%  v8::internal::RelocInfoWriter::Write(v8::internal::RelocInfo const*)
      1    0.4%    0.4%  v8::internal::PointersUpdatingVisitor::VisitDebugTarget(v8::internal::RelocInfo*)
      1    0.4%    0.4%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseRegExpLiteral(bool, v8::internal::ExpressionClassifier*, bool*)
      1    0.4%    0.4%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParsePrimaryExpression(v8::internal::ExpressionClassifier*, bool*)
      1    0.4%    0.4%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseMemberWithNewPrefixesExpression(v8::internal::ExpressionClassifier*, bool*)
      1    0.4%    0.4%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseExpression(bool, v8::internal::ExpressionClassifier*, bool*)
      1    0.4%    0.4%  v8::internal::Parser::SkipLazyFunctionBody(int*, int*, bool*, v8::internal::Scanner::BookmarkScope*)
      1    0.4%    0.4%  v8::internal::Parser::ParseFunctionLiteral(v8::internal::AstRawString const*, v8::internal::Scanner::Location, v8::internal::FunctionNameValidity, v8::internal::FunctionKind, int, v8::internal::FunctionLiteral::FunctionType, v8::internal::FunctionLiteral::ArityRestriction, v8::internal::LanguageMode, bool*)
      1    0.4%    0.4%  v8::internal::Parser::BuildAssertIsCoercible(v8::internal::Variable*)
      1    0.4%    0.4%  v8::internal::Operand::Operand(v8::internal::Operand const&, int)
      1    0.4%    0.4%  v8::internal::MarkCompactCollector::MigrateObjectMixed(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::SlotsBuffer**)
      1    0.4%    0.4%  v8::internal::Map::ReconfigureExistingProperty(v8::internal::Handle<v8::internal::Map>, int, v8::internal::PropertyKind, PropertyAttributes)
      1    0.4%    0.4%  v8::internal::LookupIterator::GetInterceptor() const
      1    0.4%    0.4%  v8::internal::LiveEditFunctionTracker::~LiveEditFunctionTracker()
      1    0.4%    0.4%  v8::internal::LCodeGenBase::Abort(v8::internal::BailoutReason)
      1    0.4%    0.4%  v8::internal::LChunk::AddInstruction(v8::internal::LInstruction*, v8::internal::HBasicBlock*)
      1    0.4%    0.4%  v8::internal::LAllocator::ResolvePhis(v8::internal::HBasicBlock*)
      1    0.4%    0.4%  v8::internal::LAllocator::ProcessInstructions(v8::internal::HBasicBlock*, v8::internal::BitVector*)
      1    0.4%    0.4%  v8::internal::LAllocator::PopulatePointerMaps()
      1    0.4%    0.4%  v8::internal::LAllocator::AllocateRegisters()
      1    0.4%    0.4%  v8::internal::JSObject::MigrateFastToFast(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::Map>)
      1    0.4%    0.4%  v8::internal::JSObject::GetFastElementsUsage()
      1    0.4%    0.4%  v8::internal::InnerPointerToCodeCache::GetCacheEntry(unsigned char*)
      1    0.4%    0.4%  v8::internal::IncrementalMarking::ResetStepCounters()
      1    0.4%    0.4%  v8::internal::IC::FindTargetMaps()
      1    0.4%    0.4%  v8::internal::HeapObject::IterateBody(v8::internal::InstanceType, int, v8::internal::ObjectVisitor*)
      1    0.4%    0.4%  v8::internal::HeapIterator::next()
      1    0.4%    0.4%  v8::internal::HInferRepresentationPhase::Run()
      1    0.4%    0.4%  v8::internal::HEnvironment::HasExpressionAt(int) const
      1    0.4%    0.4%  v8::internal::HCheckMapValue::Canonicalize()
      1    0.4%    0.4%  v8::internal::FullCodeGenerator::EmitLiteralCompareNil(v8::internal::CompareOperation*, v8::internal::Expression*, v8::internal::NilValue)
      1    0.4%    0.4%  v8::internal::FrameDescription::ComputeParametersCount()
      1    0.4%    0.4%  v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.4%    0.4%  v8::internal::FixedBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedBodyDescriptor<24, 40, 40>, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.4%    0.4%  v8::internal::CodeFactory::KeyedLoadIC(v8::internal::Isolate*, v8::internal::LanguageMode)
      1    0.4%    0.4%  v8::internal::BytecodeArray::Disassemble(std::ostream&)
      1    0.4%    0.4%  v8::internal::BodyVisitorBase<v8::internal::IncrementalMarkingMarkingVisitor>::IterateBodyUsingLayoutDescriptor(v8::internal::Heap*, v8::internal::HeapObject*, int, int)
      1    0.4%    0.4%  v8::internal::AstVisitor::VisitDeclarations(v8::internal::ZoneList<v8::internal::Declaration*>*)
      1    0.4%    0.4%  v8::internal::AstValueFactory::GetTwoByteStringInternal(v8::internal::Vector<unsigned short const>)
      1    0.4%    0.4%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::FastHoleySmiElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)1> >::Slice(v8::internal::Handle<v8::internal::JSObject>, v8::internal::Handle<v8::internal::FixedArrayBase>, unsigned int, unsigned int)
      1    0.4%    0.4%  v8::base::OS::GetSharedLibraryAddresses()
      1    0.4%    0.4%  std::basic_ios<char, std::char_traits<char> >::_M_cache_locale(std::locale const&)
      1    0.4%    0.4%  std::__cxx11::basic_string<char, std::char_traits<char>, std::allocator<char> >::_M_create(unsigned long&, unsigned long)
      1    0.4%    0.4%  node::TTYWrap::Initialize(v8::Local<v8::Object>, v8::Local<v8::Value>, v8::Local<v8::Context>)
      1    0.4%    0.4%  node::StreamWrap::UpdateWriteQueueSize()
      1    0.4%    0.4%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.204]
      1    0.4%    0.4%  __vsnprintf_chk
      1    0.4%    0.4%  __new_sem_post
      1    0.4%    0.4%  __lll_trylock_elision
      1    0.4%    0.4%  __lll_lock_elision
      1    0.4%    0.4%  _IO_vfprintf

 [Summary]:
   ticks  total  nonlib   name
     16    6.5%    6.8%  JavaScript
    210   85.7%   89.0%  C++
     66   26.9%   28.0%  GC
      9    3.7%          Shared libraries
     10    4.1%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     16   19.5%    6.5%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     12   14.6%    4.9%  v8::internal::Runtime_AddNamedProperty(int, v8::internal::Object**, v8::internal::Isolate*)
     11   13.4%    4.5%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     10   12.2%    4.1%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
      9   11.0%    3.7%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      6    7.3%    2.4%  v8::internal::Runtime_MessageGetStartPosition(int, v8::internal::Object**, v8::internal::Isolate*)
      4    4.9%    1.6%  v8::internal::Builtins::InvokeApiFunction(v8::internal::Handle<v8::internal::JSFunction>, v8::internal::Handle<v8::internal::Object>, int, v8::internal::Handle<v8::internal::Object>*)
      2    2.4%    0.8%  v8::internal::Runtime_LoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    2.4%    0.8%  v8::internal::Runtime_KeyedStoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    2.4%    0.8%  v8::internal::Runtime_CompileOptimized(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.4%  v8::internal::Runtime_StoreCallbackProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.4%  v8::internal::Runtime_DeleteProperty_Sloppy(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.4%  v8::internal::Runtime_CreateObjectLiteral(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.4%  v8::internal::Runtime_CompileString(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.2%    0.4%  v8::internal::Parser::BuildAssertIsCoercible(v8::internal::Variable*)
      1    1.2%    0.4%  v8::internal::LookupIterator::Next()
      1    1.2%    0.4%  v8::internal::IC::Clear(v8::internal::Isolate*, unsigned char*, unsigned char*)
      1    1.2%    0.4%  node::TTYWrap::Initialize(v8::Local<v8::Object>, v8::Local<v8::Value>, v8::Local<v8::Context>)

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
     17    6.9%  syscall

     16    6.5%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
     16  100.0%    v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
     16  100.0%      LazyCompile: ~runInThisContext node.js:899:28
     16  100.0%        LazyCompile: ~NativeModule.compile node.js:980:44
     16  100.0%          LazyCompile: ~NativeModule.require node.js:914:34
      4   25.0%            Function: ~<anonymous> module.js:1:11
      3   18.8%            LazyCompile: ~startup node.js:13:19
      3   18.8%            Function: ~<anonymous> stream.js:1:11
      2   12.5%            LazyCompile: ~startup.globalVariables node.js:207:37
      1    6.3%            LazyCompile: ~startup.globalTimeouts node.js:217:36
      1    6.3%            Function: ~<anonymous> tty.js:1:11
      1    6.3%            Function: ~<anonymous> timers.js:1:11
      1    6.3%            Function: ~<anonymous> assert.js:1:11

     13    5.3%  v8::internal::MarkCompactCollector::IsSlotInBlackObjectSlow(v8::internal::Page*, unsigned char*)

     13    5.3%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)

     10    4.1%  UNKNOWN

      8    3.3%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      1   12.5%    v8::internal::Runtime_MessageGetStartPosition(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: *exports.enroll timers.js:150:26
      1  100.0%        Function: ~<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%          LazyCompile: ~Module._compile module.js:377:37
      1  100.0%            LazyCompile: ~Module._extensions..js module.js:413:37

      8    3.3%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::MarkTransitionArray(v8::internal::Heap*, v8::internal::TransitionArray*)
      2   25.0%    v8::internal::Runtime_MessageGetStartPosition(int, v8::internal::Object**, v8::internal::Isolate*)
      1   50.0%      LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
      1  100.0%        LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%          LazyCompile: ~Module._compile module.js:377:37
      1  100.0%            LazyCompile: ~Module._extensions..js module.js:413:37
      1   50.0%      LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%        LazyCompile: ~Module._compile module.js:377:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:413:37
      1  100.0%            LazyCompile: ~Module.load module.js:345:33

      8    3.3%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)

      7    2.9%  v8::internal::MarkCompactCollector::MigrateObjectTagged(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::SlotsBuffer**)

      6    2.4%  write
      3   50.0%    v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      1   33.3%      LazyCompile: ~ReadableState _stream_readable.js:15:23
      1  100.0%        LazyCompile: ~Readable _stream_readable.js:80:18
      1  100.0%          LazyCompile: ~Duplex _stream_duplex.js:23:16
      1  100.0%            LazyCompile: ~Socket net.js:109:16
      1   33.3%      LazyCompile: ~NativeModule node.js:904:24
      1  100.0%        LazyCompile: ~NativeModule.require node.js:914:34
      1  100.0%          LazyCompile: ~startup.globalVariables node.js:207:37
      1  100.0%            LazyCompile: ~startup node.js:13:19
      1   33.3%      LazyCompile: Join native array.js:100:14
      1  100.0%        LazyCompile: ~InnerArrayJoin native array.js:317:24
      1  100.0%          LazyCompile: ~join native array.js:332:19
      1  100.0%            LazyCompile: ~posix.resolve path.js:411:25
      1   16.7%    v8::internal::Runtime_CompileString(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: ~cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1  100.0%        LazyCompile: ~wrapper timers.js:275:19
      1  100.0%          LazyCompile: ~unrefdHandle timers.js:312:22
      1   16.7%    v8::internal::IC::Clear(v8::internal::Isolate*, unsigned char*, unsigned char*)
      1  100.0%      LazyCompile: ~<anonymous> node.js:294:49
      1  100.0%        LazyCompile: ~Revive native json.js:18:16
      1  100.0%          LazyCompile: ~Revive native json.js:18:16
      1  100.0%            LazyCompile: ~Revive native json.js:18:16

      5    2.0%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      1   20.0%    v8::internal::Runtime_MessageGetStartPosition(int, v8::internal::Object**, v8::internal::Isolate*)
      1  100.0%      LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      1  100.0%        LazyCompile: ~Module._compile module.js:377:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:413:37
      1  100.0%            LazyCompile: ~Module.load module.js:345:33
```
