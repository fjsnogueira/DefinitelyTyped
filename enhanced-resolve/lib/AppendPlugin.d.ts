import Resolver = require('./Resolver');
declare class AppendPlugin {
    source: string;
    appending: string;
    target: string;

    constructor(source: string, appending: string, target: string);

    apply(resolver: Resolver): void;
}
export = AppendPlugin;
