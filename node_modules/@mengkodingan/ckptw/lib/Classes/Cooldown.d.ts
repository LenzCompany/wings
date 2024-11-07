/// <reference types="node" />
import { Collection } from "@discordjs/collection";
import { ICtx } from "../Common/Types";
import EventEmitter from "events";
export declare class Cooldown extends EventEmitter {
    ms: number;
    cooldown: Collection<unknown, unknown> | undefined;
    timeout: number;
    constructor(ctx: ICtx, ms: number);
    get onCooldown(): boolean;
    get timeleft(): number;
}
//# sourceMappingURL=Cooldown.d.ts.map