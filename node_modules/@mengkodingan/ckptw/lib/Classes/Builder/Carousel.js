"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselBuilder = void 0;
const Functions_1 = require("../../Common/Functions");
class CarouselBuilder {
    constructor(opts) {
        this.cards = (opts === null || opts === void 0 ? void 0 : opts.cards) || [];
    }
    addCard(content) {
        this.cards.push((0, Functions_1.makeRealInteractiveMessage)(content));
        return this;
    }
    build() {
        return this.cards;
    }
}
exports.CarouselBuilder = CarouselBuilder;
