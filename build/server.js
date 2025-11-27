"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.server = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
require("dotenv/config");
const routes_1 = require("./controllers/services/routes");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
const server = (0, express_1.default)();
exports.server = server;
server.use(express_1.default.json());
server.use(routes_1.router);
server.listen(3000, () => {
    console.log("🚀 Servidor rodando em http://localhost:3000");
    console.log("📘 Swagger disponível em http://localhost:3000/api-docs");
});
