import { Router } from "express";

const router = Router();

import { getProducts, getProductById, createProduct, updateProduct, deleteProduct} from "../controllers/products.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

// Prefijo: /api/products

//para crear productos pasa por el middleware de autenticación
router.post("/", auth, createProduct);

router.get("/", getProducts);
router.get("/:id", getProductById);
// router.get("/:sku", getProductBySKU);

//también es necesario autenticación para modificar y borrar
router.put("/:id", auth, updateProduct);

router.delete("/:id", auth, deleteProduct);

export default router;