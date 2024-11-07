import { ISectionsOptions, ISectionsRows } from "../../Common/Types";
export declare class SectionsBuilder {
    displayText: string | null;
    sections: {
        title: string;
        rows: ISectionsRows[];
    }[];
    constructor(opts?: ISectionsOptions);
    setDisplayText(text: string): this;
    addSection(content: {
        title: string;
        rows: ISectionsRows[];
    }): this;
    build(): {
        name: string;
        buttonParamsJson: string;
    };
}
//# sourceMappingURL=Sections.d.ts.map