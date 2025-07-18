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
exports.userService = void 0;
const user_modle_1 = __importDefault(require("./user.modle"));
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_modle_1.default.create(payload);
    return result;
});
const getAllUserIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_modle_1.default.find();
    return result;
});
const getSingleUserIntoDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_modle_1.default.findById(_id);
    return result;
});
const updateUserIntoDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_modle_1.default.findByIdAndUpdate(_id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteUserIntoDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_modle_1.default.findByIdAndUpdate(_id, { isDeleted: true }, { new: true });
    return result;
});
exports.userService = {
    createUserIntoDB,
    getAllUserIntoDB,
    getSingleUserIntoDB,
    updateUserIntoDB,
    deleteUserIntoDB,
};
