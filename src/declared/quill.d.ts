
import { Parent } from "./blots";
import Delta from "./delta";

export type Sources = "api" | "user" | "silent";

export type TextChangeHandler = (delta: Delta, oldContents: Delta, source: Sources) => any;

export interface RangeStatic {
    index: number;
    length: number;
}

export type ModuleType = {
    new (...args: any[]): ModuleType;
    quill: Quill;
    options: any;
  };

export type EmitterEvents = {
    EDITOR_CHANGE: string,
    SCROLL_BEFORE_UPDATE: string,
    SCROLL_BLOT_MOUNT: string,
    SCROLL_BLOT_UNMOUNT: string,
    SCROLL_OPTIMIZE: string,
    SCROLL_UPDATE: string,
    SELECTION_CHANGE: string,
    TEXT_CHANGE: string,
  };

export interface EmitterSources {
    API: "api";
    SILENT: "silent";
    USER: "user";
}

export interface EventEmitter {
    on(eventName: string, handler: TextChangeHandler): EventEmitter;
}

 declare class Quill {

  scroll: Parent;

  static import<T>(pathName: string): T;
  static register(path: string | any, target?: any, overwrite?: any): void;
  static debug(limit: boolean) : void;

  update(source?: Sources | undefined): void;
  updateContents(delta: Delta | Object, source?: any): void;
  setSelection(range: RangeStatic, source?: Sources): void;
  setSelection(index: number, length?: number, source?: Sources): void;
  setSelection(index: number, source?: Sources): void;
  getSelection(focus?: false | undefined): RangeStatic | null;
  getLine(index: number): [any, number];
 // on(...args: any): void;
  //on(eventName: string, handler: TextChangeHandler): EventEmitter;
  on(eventName: string, handler: (mutations: MutationRecord[])=>void): EventEmitter;
  once(eventName: string, handler: TextChangeHandler): void;
  static sources: EmitterSources;  
  static events: EmitterEvents;
}

export default Quill;