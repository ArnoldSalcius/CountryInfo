"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCountryNames = exports.getCountry = exports.getRandomCountry = void 0;
const ninjas_1 = __importDefault(require("../api/ninjas"));
const ninjaApi_1 = require("../utils/ninjaApi");
const getRandomCountry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Request: ' + Math.floor(Math.random() * 1000));
    const country = (0, ninjaApi_1.randomCountry)();
    console.log(country);
    const response = yield ninjas_1.default.get('/country', {
        params: {
            name: country.code
        }
    });
    return res.json(response.data[0]);
});
exports.getRandomCountry = getRandomCountry;
const searchCountryNames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const search = req.query.name;
    if (search.length > 2) {
        if (typeof search !== 'string') {
            return res.status(500).json({ error: 'Invalid search query. (Strings only)' });
        }
        const countries = (0, ninjaApi_1.findCountry)(search);
        return res.json({ success: true, results: countries.length, data: countries, });
    }
    else {
        return res.status(400).json({ error: 'Please provide at least 3 character for name parameter' });
    }
});
exports.searchCountryNames = searchCountryNames;
const getCountry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const countryCode = req.params.countryCode;
    if (countryCode.length !== 2) {
        return res.status(400).json({ error: 'Country code provided must be of length 2.' });
    }
    if ((0, ninjaApi_1.countryExists)(countryCode)) {
        try {
            const resp = yield ninjas_1.default.get('/country', {
                params: {
                    name: countryCode
                }
            });
            const countryInfo = resp.data;
            return res.json({ success: true, data: countryInfo });
        }
        catch (e) {
            return res.json({ error: 'Something went wrong retrieving country info' });
        }
    }
    else {
        return res.status(400).json({ error: 'Cannot find this country code on file.' });
    }
});
exports.getCountry = getCountry;
//# sourceMappingURL=ninjaController.js.map