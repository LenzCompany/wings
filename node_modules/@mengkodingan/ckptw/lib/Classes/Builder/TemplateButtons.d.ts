/**
 * @deprecated Use Button Builder instead!
 */
export declare class TemplateButtonsBuilder {
    array: Array<any>;
    index: number;
    constructor(opts?: {
        array: Array<any>;
    });
    addURL(opts: {
        displayText: string;
        url: string;
    }): this;
    addCall(opts: {
        displayText: string;
        phoneNumber: string;
    }): this;
    addQuickReply(opts: {
        displayText: string;
        id: string;
    }): this;
    build(): any[];
}
//# sourceMappingURL=TemplateButtons.d.ts.map