"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const not_found_1 = __importDefault(require("./app/middleware/not-found"));
const router_1 = __importDefault(require("./app/router"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1', router_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(globalErrorHandler_1.default);
app.use(not_found_1.default);
exports.default = app;
