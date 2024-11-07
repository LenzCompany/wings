"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBuilder = void 0;
class ButtonBuilder {
    constructor(opts) {
        this.id = (opts === null || opts === void 0 ? void 0 : opts.id) || null;
        this.displayText = (opts === null || opts === void 0 ? void 0 : opts.displayText) || null;
        this.type = (opts === null || opts === void 0 ? void 0 : opts.type) || 'quick_reply';
        this.merhcant_url = (opts === null || opts === void 0 ? void 0 : opts.merhcant_url) || null;
        this.url = (opts === null || opts === void 0 ? void 0 : opts.url) || null;
        this.copy_code = (opts === null || opts === void 0 ? void 0 : opts.copy_code) || null;
    }
    setId(id) {
        this.id = id;
        return this;
    }
    setDisplayText(text) {
        this.displayText = text;
        return this;
    }
    setType(type = 'quick_reply') {
        this.type = type;
        return this;
    }
    setMerchantURL(url) {
        this.merhcant_url = url;
        return this;
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    setCopyCode(content) {
        this.copy_code = content;
        return this;
    }
    build() {
        return {
            name: this.type,
            buttonParamsJson: JSON.stringify({ display_text: this.displayText, id: this.id, copy_code: this.copy_code, merhcant_url: this.merhcant_url, url: this.url })
        };
    }
}
exports.ButtonBuilder = ButtonBuilder;
