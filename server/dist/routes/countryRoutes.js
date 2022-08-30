"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ninjaController_1 = require("../controllers/ninjaController");
router.get('/', ninjaController_1.getRandomCountry);
router.get('/search', ninjaController_1.searchCountryNames);
router.get('/:countryCode', ninjaController_1.getCountry);
exports.default = router;
//# sourceMappingURL=countryRoutes.js.map