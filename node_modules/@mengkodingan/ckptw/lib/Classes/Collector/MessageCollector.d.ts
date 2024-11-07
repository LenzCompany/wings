import { ICollectorOptions, IMessageCollectorCollect, IMessageInfo } from "../../Common/Types";
import { Collector } from "./Collector";
export declare class MessageCollector extends Collector {
    constructor(clientReq: {
        self: any;
        msg: any;
    }, options?: ICollectorOptions);
    _collect(msg: IMessageInfo): IMessageCollectorCollect | null;
}
//# sourceMappingURL=MessageCollector.d.ts.map