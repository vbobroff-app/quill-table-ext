
import Attributor from './attributor/attributor';
import ClassAttributor from './attributor/class';
import StyleAttributor from './attributor/style';
import AttributorStore from './attributor/store';
import * as Registry from './registry';
declare let Parchment: {
    Scope: typeof Registry.Scope;
    create: typeof Registry.create;
    find: typeof Registry.find;
    register: typeof Registry.register;
    Attributor: {
        Attribute: typeof Attributor;
        Class: typeof ClassAttributor;
        Style: typeof StyleAttributor;
        Store: typeof AttributorStore;
    };
};
export default Parchment;
