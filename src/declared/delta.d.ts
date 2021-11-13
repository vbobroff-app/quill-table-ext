import AttributeMap from "./AttributeMap";
import Op from "./op";

declare class Delta {
    static Op: typeof Op;
    static AttributeMap: typeof AttributeMap;
    ops: Op[];
    constructor(ops?: Op[] | {
        ops: Op[];
    });
    insert(arg: string | object, attributes?: AttributeMap): this;
    delete(length: number): this;
    retain(length: number, attributes?: AttributeMap): this;
    push(newOp: Op): this;
    chop(): this;
    filter(predicate: (op: Op, index: number) => boolean): Op[];
    forEach(predicate: (op: Op, index: number) => void): void;
    map<T>(predicate: (op: Op, index: number) => T): T[];
    partition(predicate: (op: Op) => boolean): [Op[], Op[]];
    reduce<T>(predicate: (accum: T, curr: Op, index: number) => T, initialValue: T): T;
    changeLength(): number;
    length(): number;
    slice(start?: number, end?: number): Delta;
    compose(other: Delta | Object): Delta;
    concat(other: Delta | Object): Delta;
    diff(other: Delta, cursor?: number ): Delta;
    eachLine(predicate: (line: Delta, attributes: AttributeMap, index: number) => boolean | void, newline?: string): void;
    invert(base: Delta): Delta;
    transform(index: number, priority?: boolean): number;
    transform(other: Delta, priority?: boolean): Delta;
    transformPosition(index: number, priority?: boolean): number;
}

export default Delta;
