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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db"));
const Category_1 = __importDefault(require("./models/Category"));
const Product_1 = __importDefault(require("./models/Product"));
const app = (0, express_1.default)();
const PORT = 3000;
// Koneksi MongoDB
(0, db_1.default)();
// Middleware untuk JSON parsing
app.use(body_parser_1.default.json());
// ------------- CRUD Category ------------- //
// GET: Ambil semua kategori
app.get('/categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category_1.default.find();
        res.status(200).json({ message: 'Success fetch categories', data: categories });
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching categories', error: err });
    }
}));
// GET: Ambil kategori berdasarkan ID
app.get('/categories/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield Category_1.default.findById(req.params.id);
        if (category) {
            res.status(200).json({ message: 'Success fetch category', data: category });
        }
        else {
            res.status(404).json({ message: 'Category not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching category', error: err });
    }
}));
// POST: Tambah kategori baru
app.post('/categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCategory = new Category_1.default({ name: req.body.name });
        yield newCategory.save();
        res.status(201).json({ message: 'Category added successfully', data: newCategory });
    }
    catch (err) {
        res.status(500).json({ message: 'Error adding category', error: err });
    }
}));
// PUT: Update kategori berdasarkan ID
app.put('/categories/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCategory = yield Category_1.default.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
        if (updatedCategory) {
            res.status(200).json({ message: 'Category updated successfully', data: updatedCategory });
        }
        else {
            res.status(404).json({ message: 'Category not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating category', error: err });
    }
}));
// DELETE: Hapus kategori berdasarkan ID
app.delete('/categories/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCategory = yield Category_1.default.findByIdAndDelete(req.params.id);
        if (deletedCategory) {
            res.status(200).json({ message: 'Category deleted successfully', data: deletedCategory });
        }
        else {
            res.status(404).json({ message: 'Category not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error deleting category', error: err });
    }
}));
// ------------- CRUD Product ------------- //
// GET: Ambil semua produk
app.get('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.find().populate('category');
        res.status(200).json({ message: 'Success fetch products', data: products });
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching products', error: err });
    }
}));
// GET: Ambil produk berdasarkan ID
app.get('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product_1.default.findById(req.params.id).populate('category');
        if (product) {
            res.status(200).json({ message: 'Success fetch product', data: product });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching product', error: err });
    }
}));
// POST: Tambah produk baru
app.post('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = new Product_1.default({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        });
        yield newProduct.save();
        res.status(201).json({ message: 'Product added successfully', data: newProduct });
    }
    catch (err) {
        res.status(500).json({ message: 'Error adding product', error: err });
    }
}));
// PUT: Update produk berdasarkan ID
app.put('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield Product_1.default.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        }, { new: true }).populate('category');
        if (updatedProduct) {
            res.status(200).json({ message: 'Product updated successfully', data: updatedProduct });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating product', error: err });
    }
}));
// DELETE: Hapus produk berdasarkan ID
app.delete('/products/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield Product_1.default.findByIdAndDelete(req.params.id);
        if (deletedProduct) {
            res.status(200).json({ message: 'Product deleted successfully', data: deletedProduct });
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error deleting product', error: err });
    }
}));
// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
