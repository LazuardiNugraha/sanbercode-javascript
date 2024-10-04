import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import connectDB from '../db';
import Category from '../models/Category';
import Product from '../models/Product';

const app = express();
const PORT = 3000;

// Koneksi MongoDB
connectDB();

// Middleware untuk JSON parsing
app.use(bodyParser.json());

// ------------- CRUD Category ------------- //

// GET: Ambil semua kategori
app.get('/categories', async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ message: 'Success fetch categories', data: categories });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories', error: err });
  }
});

// GET: Ambil kategori berdasarkan ID
app.get('/categories/:id', async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      res.status(200).json({ message: 'Success fetch category', data: category });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching category', error: err });
  }
});

// POST: Tambah kategori baru
app.post('/categories', async (req: Request, res: Response) => {
  try {
    const newCategory = new Category({ name: req.body.name });
    await newCategory.save();
    res.status(201).json({ message: 'Category added successfully', data: newCategory });
  } catch (err) {
    res.status(500).json({ message: 'Error adding category', error: err });
  }
});

// PUT: Update kategori berdasarkan ID
app.put('/categories/:id', async (req: Request, res: Response) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    if (updatedCategory) {
      res.status(200).json({ message: 'Category updated successfully', data: updatedCategory });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating category', error: err });
  }
});

// DELETE: Hapus kategori berdasarkan ID
app.delete('/categories/:id', async (req: Request, res: Response) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (deletedCategory) {
      res.status(200).json({ message: 'Category deleted successfully', data: deletedCategory });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category', error: err });
  }
});

// ------------- CRUD Product ------------- //

// GET: Ambil semua produk
app.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json({ message: 'Success fetch products', data: products });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
});

// GET: Ambil produk berdasarkan ID
app.get('/products/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (product) {
      res.status(200).json({ message: 'Success fetch product', data: product });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product', error: err });
  }
});

// POST: Tambah produk baru
app.post('/products', async (req: Request, res: Response) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', data: newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', error: err });
  }
});

// PUT: Update produk berdasarkan ID
app.put('/products/:id', async (req: Request, res: Response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
      },
      { new: true }
    ).populate('category');

    if (updatedProduct) {
      res.status(200).json({ message: 'Product updated successfully', data: updatedProduct });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err });
  }
});

// DELETE: Hapus produk berdasarkan ID
app.delete('/products/:id', async (req: Request, res: Response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.status(200).json({ message: 'Product deleted successfully', data: deletedProduct });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
