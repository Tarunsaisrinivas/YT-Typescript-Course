"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Database Error :", error);
    }
};
exports.ConnectDB = ConnectDB;
//# sourceMappingURL=db.js.map