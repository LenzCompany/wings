export declare class VCardBuilder {
    fullName: string | null;
    org: string | null;
    number: string | null;
    constructor(opts?: {
        fullName: null;
        org: null;
        number: null;
    });
    setFullName(fullName: string): this;
    setOrg(organizationName: string): this;
    setNumber(number: string): this;
    build(): string;
}
//# sourceMappingURL=VCard.d.ts.map