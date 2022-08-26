"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCountry = exports.RandomCountry = void 0;
const countryNames_1 = __importDefault(require("./countryNames"));
const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const RandomCountry = () => {
    const random = randomInterval(0, countryNames_1.default.length - 1);
    console.log(random);
    const randomCountry = countryNames_1.default[random];
    console.log(countryNames_1.default[random]);
    return randomCountry;
};
exports.RandomCountry = RandomCountry;
const findCountry = (limit = 0) => {
    const foundCountries = countryNames_1.default.filter(country => {
    });
};
exports.findCountry = findCountry;
//# sourceMappingURL=ninjaApi.js.map