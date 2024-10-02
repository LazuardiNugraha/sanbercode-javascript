import express, { request, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";

const PORT = 3000;

function init() {
  const app = express();

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.json());

  let categories = [
    { id:  1, name: 'Elektronik' },
    { id:  2, name: 'Perabotan' },
  ];

  let products = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' },
  ];

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!"
    });
  });

  app.get("/user", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        id: 1,
        name: "Budi",
        username: "budidu",
        email: "budidu@mail.com"
      }
    });
  });

  // CRUD Category
  app.get("/categories", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch categories",
      data: categories
    });
  });

  app.get("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(cat => cat.id === categoryId);

    if (category) {
      res.status(200).json({
        message: "Success fetch category",
        data: category
      });
    } else {
      res.status(404).json({
        message: "Category not found"
      });
    }
  });

  app.post("/categories", (req: Request, res: Response) => {
    const newCategory = {
      id: categories.length + 1,
      name: req.body.name
    };

    categories.push(newCategory);

    res.status(201).json({
      message: "Category added successfully",
      data: newCategory
    });
  });

  app.put("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(cat => cat.id === categoryId);

    if (categoryIndex > -1) {
      categories[categoryIndex].name = req.body.name;
      res.status(200).json({
        message: "Category updated successfully",
        data: categories[categoryIndex]
      });
    } else {
      res.status(404).json({
        message: "Category not found"
      });
    }
  });

  app.delete("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex((cat) => cat.id === categoryId);

    if (categoryIndex > -1) {
      const deleteCategory = categories.splice(categoryIndex, 1);
      res.status(200).json({
        message: "Category deleted successfully",
        data: deleteCategory,
      });
    } else {
      res.status(404).json({
        message: "Category not found",
      });
    }
  });

  app.get("/products", (req: Request, res: Response) => {
    const searchTerm = req.query.name?.toString().toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm || "")
    );

    res.status(200).json({
      message: "Success fetch products",
      data: filteredProducts,
    });
  });

  app.get("/categories/:category/products", (req: Request, res: Response) => {
    const categoryName = req.params.category;
    const searchTerm = req.query.name?.toString().toLowerCase();

    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase() === categoryName.toLowerCase() &&
      product.name.toLowerCase().includes(searchTerm || '')
    );

    res.status(200).json({
      message: "Success fetch products by category",
      data: filteredProducts,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Serving static files from:', path.join(__dirname, '../public'));
  });
}

init();
