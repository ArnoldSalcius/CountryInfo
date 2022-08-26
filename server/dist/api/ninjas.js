"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const apiKey = process.env.API_KEY;
const config = {
    baseURL: 'https://api.api-ninjas.com/v1',
    headers: { 'X-Api-Key': apiKey }
};
exports.default = axios_1.default.create(config);
//# sourceMappingURL=ninjas.js.map