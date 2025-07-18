"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequiest_1 = __importDefault(require("../../middleware/validateRequiest"));
const userZodValidation_1 = require("./userZodValidation");
const route = express_1.default.Router();
route.post('/create-user', (0, validateRequiest_1.default)(userZodValidation_1.zodValidationSchema.createUserZodSchema), user_controller_1.userController.createUser);
route.get('/', user_controller_1.userController.getAllUser);
route.get('/:id', user_controller_1.userController.getSingleUser);
route.patch('/:_id', user_controller_1.userController.updateUser);
route.delete('/:_id', user_controller_1.userController.deleteUser);
route.delete('/:_id', user_controller_1.userController.deleteUser);
route.delete('/:_id', user_controller_1.userController.deleteUser);
exports.userRouter = route;
