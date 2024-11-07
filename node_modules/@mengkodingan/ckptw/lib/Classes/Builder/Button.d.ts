import { ButtonType } from "../../Common/Types";
export declare class ButtonBuilder {
    id: string | null;
    displayText: string | null;
    type: ButtonType;
    merhcant_url: string | null;
    url: string | null;
    copy_code: string | null;
    constructor(opts?: {
        id: null;
        displayText: null;
        type: 'quick_reply';
        merhcant_url: null;
        url: null;
        copy_code: null;
    });
    setId(id: string): this;
    setDisplayText(text: string): this;
    setType(type?: ButtonType): this;
    setMerchantURL(url: string): this;
    setURL(url: string): this;
    setCopyCode(content: string): this;
    build(): {
        name: ButtonType;
        buttonParamsJson: string;
    };
}
//# sourceMappingURL=Button.d.ts.map