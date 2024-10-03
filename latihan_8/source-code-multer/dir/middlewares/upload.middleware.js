"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiple = exports.single = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const storage = multer_1.default.memoryStorage();
const upload = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.default,
    params: {
        folder: 'uploads',
        allowed_formats: ['jpeg', 'png', 'jpg'],
    },
});
// export const single = upload.single('file');
// export const multiple = upload.array('files', 10);
exports.single = (0, multer_1.default)({ storage: upload }).single('file');
exports.multiple = (0, multer_1.default)({ storage: upload }).array('files', 10);
exports.default = {
    single: exports.single,
    multiple: exports.multiple,
};
