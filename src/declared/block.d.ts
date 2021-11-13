import * as Registry from './registry';
import Parchment from './parchment';
import { Blot, FormatTable, Parent } from './blots';
import { ContainerBlot } from './container';
import AttributorStore from './attributor/store';

declare class FormatBlot extends ContainerBlot implements FormatTable {
  protected attributes: AttributorStore;
  static formats(domNode: HTMLElement): any;
  constructor(domNode: Node);
  format(name: string, value: any): void;
  // formats(): {
  //     [index: string]: any;
  // };
  replaceWith(name: string | Blot, value?: any): Blot;
  update(mutations: MutationRecord[], context: {
      [key: string]: any;
  }): void;
  wrap(name: string | Parent, value?: any): Parent;
}

declare class BlockBlot extends FormatBlot {
    static blotName: string;
    static scope: Registry.Scope;
    static tagName: string;
    static formats(domNode: HTMLElement): any;
    format(name: string, value: any): void;
    formatAt(index: number, length: number, name: string, value: any): void;
    insertAt(index: number, value: string, def?: any): void;
    update(mutations: MutationRecord[], context: {
        [key: string]: any;
    }): void;
}

declare interface Block extends BlockBlot {
  blotName: string;
  tagName: string;
  requiredContainer: any;
  new (domNode: HTMLElement): Block;
  format(name: string, value: any): void;
  formatAt(index: number, length: number, name: string, value: any): void;
  insertAt(index: number, value: string, def?: any): void;
  update(
    mutations: MutationRecord[],
    context: {
      [key: string]: any;
    },
  ): void;
  create(element: any, value: any): BlockBlot | Node | HTMLElement;
  create(input?: Node | string | typeof Parchment.Scope, value?: any): BlockBlot | Node | HTMLElement;
}

export default Block;
