import Attributor from './attributor';
import { FormatTable } from '../blots';
declare class AttributorStore {
    private attributes;
    private domNode;
    constructor(domNode: HTMLElement);
    attribute(attribute: Attributor, value: any): void;
    build(): void;
    copy(target: FormatTable): void;
    move(target: FormatTable): void;
    values(): {
        [key: string]: any;
    };
}
export default AttributorStore;
