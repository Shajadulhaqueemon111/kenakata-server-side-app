"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const router = (0, express_1.Router)();
const moduleRouter = [
    {
        path: '/user',
        route: user_route_1.userRouter,
    },
    {
        path: '/',
        route: router,
    },
];
moduleRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
