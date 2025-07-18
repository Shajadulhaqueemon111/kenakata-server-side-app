"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'block'],
        default: 'active',
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.UserSchema.pre(/^find/, function (next) {
    this.where({ isDeleted: false });
    next();
});
const UserModel = (0, mongoose_1.model)('User', exports.UserSchema);
exports.default = UserModel;
