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
exports.getCountry = exports.getRandomCountry = void 0;
const ninjas_1 = __importDefault(require("../api/ninjas"));
const ninjaApi_1 = require("../utils/ninjaApi");
const getRandomCountry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getRandomCountry = getRandomCountry;
const getCountry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const country = req.query.country;
    if (req.query.country) {
        const country = req.query.country;
    }
    else {
        const country = (0, ninjaApi_1.RandomCountry)();
        const response = yield ninjas_1.default.get('/country', {
            params: {
                name: country.code
            }
        });
        return res.json(response.data);
    }
});
exports.getCountry = getCountry;
//# sourceMappingURL=ninjaController.js.map