"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes/routes"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pause = 500;
app.use((req, res, next) => {
    console.log('Pause of ' + pause + 'ms' + Math.random());
    console.log(req.url);
    setTimeout(() => {
        next();
    }, pause);
});
app.use('/api/v1', routes_1.default);
app.use('/', (req, res) => {
    res.json({ success: true });
});
app.listen(PORT, () => {
    console.log('server running on Port ' + PORT);
});
//# sourceMappingURL=app.js.map