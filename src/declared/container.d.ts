//import { Blot, Parent } from "./blots";
import LinkedList from "./collection/linked-list";
import ShadowBlot from "./shadow";

//import parchment from "quill-parchment"; //} from "quill-parchment/dist/blot/abstract/blot";
import parchment  from 'quill-parchment';
declare const Container: parchment.Container;

export declare class ContainerBlot extends ShadowBlot implements Parent {
    static defaultChild: string;
    static allowedChildren: any[];
    children: LinkedList<Blot>;
    domNode: HTMLElement;
    constructor(domNode: Node);
    appendChild(other: Blot | Node): void;
    attach(): void;
    build(): void;
    deleteAt(index: number, length: number): void;
    descendant(blot: any): [Blot | null, number];
    descendant(criteria: {
        new (): Blot;
    }, index: number): [Blot | null, number];
    descendant(criteria: (blot: Blot) => boolean, index: number): [Blot | null, number];
    descendants<T>(criteria: {
        new (ars?: any): T;
    }, index?: number, length?: number): T[];
    descendants(criteria: (blot: Blot) => boolean, index: number, length: number): Blot[];
    detach(): void;
    formatAt(index: number, length: number, name: string, value: any): void;
    insertAt(index: number, value: string, def?: any): void;
    insertBefore(childBlot: Blot, refBlot?: Blot): void;
    length(): number;
    moveChildren(targetParent: Parent, refNode?: Blot): void;
    optimize(context: {
        [key: string]: any;
    }): void;
    path(index: number, inclusive?: boolean): [Blot, number][];
    removeChild(child: Blot): void;
    replace(target: Blot): void;
    split(index: number, force?: boolean): Blot;
    unwrap(): void;
    update(mutations: MutationRecord[], context: {
        [key: string]: any;
    }): void;
    // formats(): {
    //     [index: string]: any;
    //   };
    optimize(...args: any): void;
    splitAfter(child: ContainerBlot): ContainerBlot;
    create(element: any, value: any): Blot | Node | HTMLElement;
}



declare interface Container extends Parchment.Container {
    parent: Blot;
    // blotName: string;
    // tagName: string;
    // create(value: any): Node;
    // allowedChildren: any[];
    // requiredContainer: any;
    // new (domNode: HTMLElement): Container;
    //children: LinkedList<ContainerBlot>;
    // checkMerge(): boolean;
    descendants<T>(criteria: {
        new (ars?: any): T;
    }, index?: number, length?: number): T[];
    descendants<T>(criteria: (blot: T) => boolean, index?: number, length?: number): T[]
  }

  export default Container;