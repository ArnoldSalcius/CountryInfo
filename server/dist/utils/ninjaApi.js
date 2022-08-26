"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryExists = exports.findCountry = exports.randomCountry = void 0;
const countryNames_1 = __importDefault(require("./countryNames"));
const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomCountry = () => {
    const random = randomInterval(0, countryNames_1.default.length - 1);
    const randomCountry = countryNames_1.default[random];
    return randomCountry;
};
exports.randomCountry = randomCountry;
const findCountry = (search, limit = 0) => {
    const foundCountries = countryNames_1.default.filter(country => {
        //check if any of the countries include the search term
        //improve to return more relevant results
        return country.name.toLowerCase().includes(search.toLowerCase());
    });
    return foundCountries;
};
exports.findCountry = findCountry;
const countryExists = (search) => {
    return countryNames_1.default.find(country => country.code.toLowerCase() === search.toLowerCase()) !== undefined;
};
exports.countryExists = countryExists;
//# sourceMappingURL=ninjaApi.js.map