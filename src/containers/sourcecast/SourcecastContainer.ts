import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Input, IPlaybackData, PlaybackStatus } from 'src/components/sourcecast/sourcecastShape';
import {
  beginDebuggerPause,
  beginInterruptExecution,
  browseReplHistoryDown,
  browseReplHistoryUp,
  changeActiveTab,
  changeEditorHeight,
  changeEditorWidth,
  changeSideContentHeight,
  chapterSelect,
  clearReplOutput,
  debuggerReset,
  debuggerResume,
  evalEditor,
  evalRepl,
  fetchSourcecastIndex,
  recordAudioUrl,
  setCodeDeltasToApply,
  setEditorBreakpoint,
  setEditorReadonly,
  setInputToApply,
  setSourcecastData,
  setSourcecastDuration,
  setSourcecastStatus,
  setWebsocketStatus,
  toggleEditorAutorun,
  updateEditorValue,
  updateReplValue,
  WorkspaceLocation
} from '../../actions';
import Sourcecast, { IDispatchProps, IStateProps } from '../../components/sourcecast/Sourcecast';
import { IState } from '../../reducers/states';

const mapStateToProps: MapStateToProps<IStateProps, {}, IState> = state => ({
  activeTab: state.workspaces.sourcecast.sideContentActiveTab,
  audioUrl: state.workspaces.sourcereel.audioUrl,
  codeDeltasToApply: state.workspaces.sourcecast.codeDeltasToApply,
  title: state.workspaces.sourcecast.title,
  description: state.workspaces.sourcecast.description,
  editorReadonly: state.workspaces.sourcecast.editorReadonly,
  editorWidth: state.workspaces.sourcecast.editorWidth,
  editorValue: state.workspaces.sourcecast.editorValue!,
  isEditorAutorun: state.workspaces.sourcecast.isEditorAutorun,
  inputToApply: state.workspaces.sourcecast.inputToApply,
  breakpoints: state.workspaces.sourcecast.breakpoints,
  highlightedLines: state.workspaces.sourcecast.highlightedLines,
  isRunning: state.workspaces.sourcecast.isRunning,
  isDebugging: state.workspaces.sourcecast.isDebugging,
  enableDebugging: state.workspaces.sourcecast.enableDebugging,
  output: state.workspaces.sourcecast.output,
  playbackDuration: state.workspaces.sourcecast.playbackDuration,
  playbackData: state.workspaces.sourcereel.playbackData,
  playbackStatus: state.workspaces.sourcecast.playbackStatus,
  replValue: state.workspaces.sourcecast.replValue,
  sideContentHeight: state.workspaces.sourcecast.sideContentHeight,
  sourcecastIndex: state.workspaces.sourcecast.sourcecastIndex,
  sourceChapter: state.workspaces.sourcecast.context.chapter,
  websocketStatus: state.workspaces.playground.websocketStatus
});

const location: WorkspaceLocation = 'sourcecast';

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      handleBrowseHistoryDown: () => browseReplHistoryDown(location),
      handleBrowseHistoryUp: () => browseReplHistoryUp(location),
      handleChangeActiveTab: (activeTab: number) => changeActiveTab(activeTab, location),
      handleChapterSelect: (chapter: number) => chapterSelect(chapter, location),
      handleEditorEval: () => evalEditor(location),
      handleEditorValueChange: (val: string) => updateEditorValue(val, location),
      handleEditorHeightChange: (height: number) => changeEditorHeight(height, location),
      handleEditorWidthChange: (widthChange: number) => changeEditorWidth(widthChange, location),
      handleEditorUpdateBreakpoints: (breakpoints: string[]) =>
        setEditorBreakpoint(breakpoints, location),
      handleFetchSourcecastIndex: fetchSourcecastIndex,
      handleInterruptEval: () => beginInterruptExecution(location),
      handleRecordAudioUrl: recordAudioUrl,
      handleReplEval: () => evalRepl(location),
      handleReplOutputClear: () => clearReplOutput(location),
      handleReplValueChange: (newValue: string) => updateReplValue(newValue, location),
      handleSetCodeDeltasToApply: setCodeDeltasToApply,
      handleSetEditorReadonly: (editorReadonly: boolean) =>
        setEditorReadonly(location, editorReadonly),
      handleSetInputToApply: (inputToApply: Input) => setInputToApply(location, inputToApply),
      handleSetSourcecastData: (title: string, description: string, playbackData: IPlaybackData) =>
        setSourcecastData(title, description, playbackData),
      handleSetSourcecastDuration: (duration: number) => setSourcecastDuration(duration),
      handleSetSourcecastStatus: (playbackStatus: PlaybackStatus) =>
        setSourcecastStatus(playbackStatus),
      handleSetWebsocketStatus: (websocketStatus: number) =>
        setWebsocketStatus(location, websocketStatus),
      handleSideContentHeightChange: (heightChange: number) =>
        changeSideContentHeight(heightChange, location),
      handleToggleEditorAutorun: () => toggleEditorAutorun(location),
      handleDebuggerPause: () => beginDebuggerPause(location),
      handleDebuggerResume: () => debuggerResume(location),
      handleDebuggerReset: () => debuggerReset(location)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sourcecast);
