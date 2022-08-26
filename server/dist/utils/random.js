"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomInterval = void 0;
const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomInterval = randomInterval;
//# sourceMappingURL=random.js.map