test3.js on `master @ 0b43c08` with [`2ccde01...27d1f58`](https://github.com/Fishrock123/node/compare/2ccde01...27d1f58) and the following applied:

```diff
diff --git a/lib/timers.js b/lib/timers.js
index 24dc7e1..ce34b53 100644
--- a/lib/timers.js
+++ b/lib/timers.js
@@ -110,7 +110,7 @@ function listOnTimeout() {
   debug('%d list empty', msecs);
   assert(L.isEmpty(list));
   list.close();
-  delete lists[msecs];
+  lists[msecs] = undefined;
 }
```


```
node --prof test4.js
```

Relevant `--prof` data:

```
Statistical profiling result from test4-1-timers-improve.log, (214 ticks, 7 unaccounted, 0 excluded).

 [Shared libraries]:
   ticks  total  nonlib   name
      2    0.9%          /lib/x86_64-linux-gnu/libc-2.21.so
      1    0.5%          [vdso]

 [JavaScript]:
   ticks  total  nonlib   name
      5    2.3%    2.4%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      3    1.4%    1.4%  Stub: LoadDictionaryElementStub
      3    1.4%    1.4%  Stub: CEntryStub
      2    0.9%    0.9%  LazyCompile: *unrefTimeout timers.js:532:22
      2    0.9%    0.9%  LazyCompile: *exports.setTimeout.exports.setInterval.exports._unrefActive timers.js:600:32
      1    0.5%    0.5%  Stub: RecordWriteStub {1}
      1    0.5%    0.5%  Stub: RecordWriteStub
      1    0.5%    0.5%  Stub: JSEntryStub
      1    0.5%    0.5%  LazyCompile: ~unrefTimeout timers.js:532:22
      1    0.5%    0.5%  LazyCompile: ~remove internal/linkedlist.js:28:16
      1    0.5%    0.5%  LazyCompile: ~bind native v8natives.js:1224:22
      1    0.5%    0.5%  LazyCompile: *cancelTimers /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:27:34
      1    0.5%    0.5%  Handler: An IC handler from the snapshot
      1    0.5%    0.5%  Function: ~<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11

 [C++]:
   ticks  total  nonlib   name
     18    8.4%    8.5%  syscall
     14    6.5%    6.6%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)
     12    5.6%    5.7%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)
     10    4.7%    4.7%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
      9    4.2%    4.3%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      8    3.7%    3.8%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)
      7    3.3%    3.3%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)
      6    2.8%    2.8%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)
      4    1.9%    1.9%  write
      4    1.9%    1.9%  void v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::EvacuateObject<(v8::internal::ScavengingVisitor<(v8::internal::MarksHandling)1, (v8::internal::LoggingAndProfiling)0>::ObjectContents)1, (v8::internal::AllocationAlignment)0>(v8::internal::Map*, v8::internal::HeapObject**, v8::internal::HeapObject*, int)
      4    1.9%    1.9%  v8::internal::Scavenger::ScavengeObject(v8::internal::HeapObject**, v8::internal::HeapObject*)
      4    1.9%    1.9%  v8::internal::MarkCompactCollector::DiscoverAndEvacuateBlackObjectsOnPage(v8::internal::NewSpace*, v8::internal::NewSpacePage*)
      4    1.9%    1.9%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)1, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.200] [clone .constprop.245]
      3    1.4%    1.4%  void v8::internal::FlexibleBodyVisitor<v8::internal::IncrementalMarkingMarkingVisitor, v8::internal::JSObject::BodyDescriptor, void>::VisitSpecialized<32>(v8::internal::Map*, v8::internal::HeapObject*)
      3    1.4%    1.4%  v8::internal::IncrementalMarking::Step(long, v8::internal::IncrementalMarking::CompletionAction, v8::internal::IncrementalMarking::ForceMarkingAction, v8::internal::IncrementalMarking::ForceCompletionAction)
      2    0.9%    0.9%  v8::internal::String::CalculateLineEnds(v8::internal::Handle<v8::internal::String>, bool)
      2    0.9%    0.9%  v8::internal::StoreBuffer::Compact()
      2    0.9%    0.9%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunction(v8::internal::Map*, v8::internal::HeapObject*)
      2    0.9%    0.9%  v8::internal::PointersUpdatingVisitor::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      2    0.9%    0.9%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseBinaryExpression(int, bool, v8::internal::ExpressionClassifier*, bool*)
      2    0.9%    0.9%  v8::internal::Parser::ParseFunctionLiteral(v8::internal::AstRawString const*, v8::internal::Scanner::Location, v8::internal::FunctionNameValidity, v8::internal::FunctionKind, int, v8::internal::FunctionLiteral::FunctionType, v8::internal::FunctionLiteral::ArityRestriction, v8::internal::LanguageMode, bool*)
      2    0.9%    0.9%  v8::internal::LookupIterator::Next()
      2    0.9%    0.9%  v8::internal::KeyedGetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode) [clone .constprop.46]
      2    0.9%    0.9%  v8::internal::HashTable<v8::internal::SeededNumberDictionary, v8::internal::SeededNumberDictionaryShape, unsigned int>::FindEntry(v8::internal::Isolate*, unsigned int)
      2    0.9%    0.9%  v8::internal::Deserializer::ReadData(v8::internal::Object**, v8::internal::Object**, int, unsigned char*)
      2    0.9%    0.9%  int v8::internal::Sweep<(v8::internal::SweepingMode)0, (v8::internal::MarkCompactCollector::SweepingParallelism)0, (v8::internal::SkipListRebuildingMode)1, (v8::internal::FreeSpaceTreatmentMode)0>(v8::internal::PagedSpace*, v8::internal::FreeList*, v8::internal::Page*, v8::internal::ObjectVisitor*) [clone .isra.204]
      2    0.9%    0.9%  __lll_lock_elision
      1    0.5%    0.5%  void v8::internal::Code::CodeIterateBody<v8::internal::IncrementalMarkingMarkingVisitor>(v8::internal::Heap*)
      1    0.5%    0.5%  v8::internal::TypeFeedbackOracle::CallIsUninitialized(v8::internal::VectorSlot<1>)
      1    0.5%    0.5%  v8::internal::StringTableCleaner<false>::VisitPointers(v8::internal::Object**, v8::internal::Object**)
      1    0.5%    0.5%  v8::internal::StoreBuffer::IteratePointersToNewSpace(void (*)(v8::internal::HeapObject**, v8::internal::HeapObject*))
      1    0.5%    0.5%  v8::internal::Script::GetLineNumber(v8::internal::Handle<v8::internal::Script>, int)
      1    0.5%    0.5%  v8::internal::Scope::Scope(v8::internal::Zone*, v8::internal::Scope*, v8::internal::ScopeType, v8::internal::AstValueFactory*, v8::internal::FunctionKind)
      1    0.5%    0.5%  v8::internal::Scope::Initialize()
      1    0.5%    0.5%  v8::internal::Scope::DeclarationScope()
      1    0.5%    0.5%  v8::internal::Scanner::ScanIdentifierOrKeyword()
      1    0.5%    0.5%  v8::internal::Runtime::GetObjectProperty(v8::internal::Isolate*, v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>, v8::internal::LanguageMode)
      1    0.5%    0.5%  v8::internal::RootMarkingVisitor::VisitPointer(v8::internal::Object**)
      1    0.5%    0.5%  v8::internal::PerIsolateAssertScope<(v8::internal::PerIsolateAssertType)0, true>::IsAllowed(v8::internal::Isolate*)
      1    0.5%    0.5%  v8::internal::ParserBase<v8::internal::ParserTraits>::ParseMemberExpressionContinuation(v8::internal::Expression*, v8::internal::ExpressionClassifier*, bool*)
      1    0.5%    0.5%  v8::internal::Parser::ParseStatementListItem(bool*)
      1    0.5%    0.5%  v8::internal::Object::ReadAbsentProperty(v8::internal::LookupIterator*, v8::internal::LanguageMode)
      1    0.5%    0.5%  v8::internal::MigrateDeprecated(v8::internal::Handle<v8::internal::Object>)
      1    0.5%    0.5%  v8::internal::MarkCompactCollector::EvacuateNewSpaceAndCandidates()
      1    0.5%    0.5%  v8::internal::Map::RawCopy(v8::internal::Handle<v8::internal::Map>, int)
      1    0.5%    0.5%  v8::internal::LInstructionGap::CompileToNative(v8::internal::LCodeGen*)
      1    0.5%    0.5%  v8::internal::LCodeGen::DoStoreContextSlot(v8::internal::LStoreContextSlot*)
      1    0.5%    0.5%  v8::internal::LChunk::LookupConstant(v8::internal::LSubKindOperand<(v8::internal::LOperand::Kind)2, 128>*) const
      1    0.5%    0.5%  v8::internal::LAllocator::ResolvePhis(v8::internal::HBasicBlock*)
      1    0.5%    0.5%  v8::internal::LAllocator::MeetConstraintsBetween(v8::internal::LInstruction*, v8::internal::LInstruction*, int)
      1    0.5%    0.5%  v8::internal::Isolate::RegisterCancelableTask(v8::internal::Cancelable*)
      1    0.5%    0.5%  v8::internal::InnerPointerToCodeCache::GetCacheEntry(unsigned char*)
      1    0.5%    0.5%  v8::internal::IC::UpdateState(v8::internal::Handle<v8::internal::Object>, v8::internal::Handle<v8::internal::Object>)
      1    0.5%    0.5%  v8::internal::IC::ComputeHandler(v8::internal::LookupIterator*, v8::internal::Handle<v8::internal::Object>)
      1    0.5%    0.5%  v8::internal::HeapIterator::next()
      1    0.5%    0.5%  v8::internal::Heap::AllocateFixedArray(int, v8::internal::PretenureFlag)
      1    0.5%    0.5%  v8::internal::HValue::SetOperandAt(int, v8::internal::HValue*)
      1    0.5%    0.5%  v8::internal::HPhi::opcode() const
      1    0.5%    0.5%  v8::internal::HOptimizedGraphBuilder::VisitCountOperation(v8::internal::CountOperation*)
      1    0.5%    0.5%  v8::internal::HBasicBlock::UpdateEnvironment(v8::internal::HEnvironment*)
      1    0.5%    0.5%  v8::internal::HBasicBlock::CreateSimulate(v8::internal::BailoutId, v8::internal::RemovableSimulate)
      1    0.5%    0.5%  v8::internal::FullCodeGenerator::EmitVariableAssignment(v8::internal::Variable*, v8::internal::Token::Value, v8::internal::VectorSlot<1>)
      1    0.5%    0.5%  v8::internal::FlexibleBodyVisitor<v8::internal::MarkCompactMarkingVisitor, v8::internal::FixedArray::BodyDescriptor, void>::Visit(v8::internal::Map*, v8::internal::HeapObject*)
      1    0.5%    0.5%  v8::internal::Builtins::MakeQuadragenarianCodeYoungAgainOddMarking()
      1    0.5%    0.5%  v8::internal::AstValueFactory::GetString(unsigned int, bool, v8::internal::Vector<unsigned char const>)
      1    0.5%    0.5%  v8::internal::AstTyper::VisitIfStatement(v8::internal::IfStatement*)
      1    0.5%    0.5%  v8::internal::(anonymous namespace)::ElementsAccessorBase<v8::internal::(anonymous namespace)::DictionaryElementsAccessor, v8::internal::(anonymous namespace)::ElementsKindTraits<(v8::internal::ElementsKind)6> >::GetEntryForIndex(v8::internal::JSObject*, v8::internal::FixedArrayBase*, unsigned int)
      1    0.5%    0.5%  v8::Value::IsExternal() const
      1    0.5%    0.5%  uv_update_time
      1    0.5%    0.5%  node::TimerWrap::Now(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.5%    0.5%  node::Binding(v8::FunctionCallbackInfo<v8::Value> const&)
      1    0.5%    0.5%  mmap
      1    0.5%    0.5%  __clock_gettime

 [Summary]:
   ticks  total  nonlib   name
     24   11.2%   11.4%  JavaScript
    180   84.1%   85.3%  C++
     56   26.2%   26.5%  GC
      3    1.4%          Shared libraries
      7    3.3%          Unaccounted

 [C++ entry points]:
   ticks    cpp   total   name
     14   21.9%    6.5%  v8::internal::Runtime_CompileLazy(int, v8::internal::Object**, v8::internal::Isolate*)
     10   15.6%    4.7%  v8::internal::Runtime_CompileForOnStackReplacement(int, v8::internal::Object**, v8::internal::Isolate*)
     10   15.6%    4.7%  v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      9   14.1%    4.2%  v8::internal::Runtime_KeyedGetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      6    9.4%    2.8%  v8::internal::Runtime_StoreIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      5    7.8%    2.3%  v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      2    3.1%    0.9%  v8::internal::Runtime_KeyedLoadIC_Miss(int, v8::internal::Object**, v8::internal::Isolate*)
      2    3.1%    0.9%  v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.6%    0.5%  v8::internal::Runtime_TryInstallOptimizedCode(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.6%    0.5%  v8::internal::Runtime_SetProperty(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.6%    0.5%  v8::internal::Runtime_KeyedStoreIC_MissFromStubFailure(int, v8::internal::Object**, v8::internal::Isolate*)
      1    1.6%    0.5%  v8::Value::IsExternal() const
      1    1.6%    0.5%  uv_update_time
      1    1.6%    0.5%  __clock_gettime

 [Bottom up (heavy) profile]:
  Note: percentage shows a share of a particular caller in the total
  amount of its parent calls.
  Callers occupying less than 2.0% are not shown.

   ticks parent  name
     18    8.4%  syscall

     14    6.5%  v8::internal::MarkCompactCollector::IsSlotInBlackObject(v8::internal::Page*, unsigned char*, v8::internal::HeapObject**)

     12    5.6%  v8::internal::IncrementalMarking::AdvanceIncrementalMarking(long, double, v8::internal::IncrementalMarking::StepActions)

     10    4.7%  node::ContextifyScript::New(v8::FunctionCallbackInfo<v8::Value> const&)
     10  100.0%    v8::internal::Builtin_HandleApiCallConstruct(int, v8::internal::Object**, v8::internal::Isolate*)
      9   90.0%      LazyCompile: ~runInThisContext node.js:884:28
      9  100.0%        LazyCompile: ~NativeModule.compile node.js:965:44
      9  100.0%          LazyCompile: ~NativeModule.require node.js:899:34
      3   33.3%            LazyCompile: ~startup node.js:13:19
      2   22.2%            Function: ~<anonymous> tty.js:1:11
      1   11.1%            LazyCompile: ~startup.globalVariables node.js:192:37
      1   11.1%            LazyCompile: ~<anonymous> node.js:213:48
      1   11.1%            Function: ~<anonymous> timers.js:1:11
      1   11.1%            Function: ~<anonymous> module.js:1:11
      1   10.0%      LazyCompile: ~exports.runInThisContext vm.js:52:36
      1  100.0%        LazyCompile: ~Module._compile module.js:367:37
      1  100.0%          LazyCompile: ~Module._extensions..js module.js:403:37
      1  100.0%            LazyCompile: ~Module.load module.js:335:33

      9    4.2%  v8::internal::StaticMarkingVisitor<v8::internal::IncrementalMarkingMarkingVisitor>::VisitJSFunctionStrongCode(v8::internal::Heap*, v8::internal::HeapObject*)
      3   33.3%    v8::internal::Runtime_AllocateInTargetSpace(int, v8::internal::Object**, v8::internal::Isolate*)
      3  100.0%      LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      3  100.0%        LazyCompile: ~Module._compile module.js:367:37
      3  100.0%          LazyCompile: ~Module._extensions..js module.js:403:37
      3  100.0%            LazyCompile: ~Module.load module.js:335:33

      8    3.7%  v8::internal::IncrementalMarkingMarkingVisitor::VisitFixedArrayIncremental(v8::internal::Map*, v8::internal::HeapObject*)

      7    3.3%  v8::internal::MarkCompactCollector::RecordMigratedSlot(v8::internal::Object*, unsigned char*, v8::internal::SlotsBuffer**)

      7    3.3%  UNKNOWN

      6    2.8%  v8::internal::MarkCompactCollector::MigrateObject(v8::internal::HeapObject*, v8::internal::HeapObject*, int, v8::internal::AllocationSpace, v8::internal::SlotsBuffer**)

      5    2.3%  LazyCompile: *<anonymous> /home/jeremiah/Documents/node-perf-results/pr-4007/test4/test4.js:1:11
      5  100.0%    LazyCompile: ~Module._compile module.js:367:37
      5  100.0%      LazyCompile: ~Module._extensions..js module.js:403:37
      5  100.0%        LazyCompile: ~Module.load module.js:335:33
      5  100.0%          LazyCompile: Module._load module.js:272:24
      5  100.0%            LazyCompile: ~Module.runMain module.js:428:26

```
