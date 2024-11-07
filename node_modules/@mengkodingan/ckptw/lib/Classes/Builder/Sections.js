"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionsBuilder = void 0;
class SectionsBuilder {
    constructor(opts) {
        this.displayText = (opts === null || opts === void 0 ? void 0 : opts.displayText) || null;
        this.sections = (opts === null || opts === void 0 ? void 0 : opts.sections) || [];
    }
    setDisplayText(text) {
        this.displayText = text;
        return this;
    }
    addSection(content) {
        this.sections.push(content);
        return this;
    }
    build() {
        return {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({ title: this.displayText, sections: this.sections })
        };
    }
}
exports.SectionsBuilder = SectionsBuilder;
