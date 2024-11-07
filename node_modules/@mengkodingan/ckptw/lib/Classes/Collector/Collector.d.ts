/// <reference types="node" />
import { Collection } from "@discordjs/collection";
import { ICollectorOptions, IMessageInfo } from "../../Common/Types";
import { EventEmitter } from "events";
export declare class Collector extends EventEmitter {
    [x: string]: any;
    isRun: any;
    filter: (args: any, collector: Collection<any, any>) => boolean;
    time: number;
    max?: number;
    maxProcessed?: number;
    collector: Collection<unknown, unknown>;
    received: any;
    constructor(options?: ICollectorOptions);
    collect(t: IMessageInfo): Promise<void>;
    stop(r?: string): void;
}
//# sourceMappingURL=Collector.d.ts.map