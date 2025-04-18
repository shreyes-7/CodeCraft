import * as monaco from "monaco-editor";

export interface Theme {
  id: string;
  label: string;
  color: string;
}

export interface Language {
  id: string;
  label: string;
  logoPath: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
}

export interface LanguageRuntime {
  language: string;
  version: string;
}

export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

export interface ExecutionResult {
  code: string;
  output: string;
  error: string | null;
}

export interface CodeEditorState {
  language: string;
  fontSize: number;
  theme: string;
  output: string;
  error: string | null;
  isRunning: boolean;
  editor: monaco.editor.IStandaloneCodeEditor | null;
  executionResult: {
    code: string;
    output: string;
    error: string | null;
  } | null;

  getCode: () => string;
  setEditor: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  setTheme: (theme: string) => void;
  setFontSize: (size: number) => void;
  setLanguage: (lang: string) => void;
  runCode: () => Promise<void>;
}

export interface Snippet {
  _id: string;
  language: string;
  _creationTime: string | number | Date;
  title: string;
  userId: string;
  userName: string;
  code: string;
}