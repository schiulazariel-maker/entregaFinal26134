//importar funciones de los modelos
import { createProduct as createProductModel, getProducts as getProductsModel,
         getProductById as getProductByIdModel,
         updateProduct as updateProductModel,
         deleteProduct as deleteProductModel,} from "../models/products.js";

//renombra para no pisar la función - trae todos los productos de base de datos
export const getProducts = async (req, res) => {
  const products = await getProductsModel();
  res.json(products);
};


//trae un producto dependiendo del id (unico identificador)
export const getProductById = async (req, res) => {
  //identificador alfanumerico de firebase
  const { id } = req.params;
  
  //funcion asisncrinica porque usa firestore, importar funciones de firestore, con esa 
  //referencia va a buscar a base de datos 
  const product = await getProductByIdModel(id);
 
  //tiene que verificar si existe, 
  if (!product) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  res.json(product);
};

//crea un producto
export const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const newProduct = await createProductModel({
    name, price, stock,
  });

  res.status(201).json(newProduct);
};

//modifica un producto
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  if (!name || !price || !stock) {
    return res.status(422).json({
      message: "Faltan datos obligatorios",
    });
  }

  const updatedProduct = await updateProductModel(id, {
    name, price, stock,
  });
  
  //mensaje de error sino encuentra el producto
  if (!updatedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(updatedProduct);
};

//elimina un producto
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await deleteProductModel(id);
 //mensaje de error si el producto no es encontrado, si lo encuentra lo elimina
  if (!deletedProduct) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json({
    message: "Producto eliminado",
    product: deletedProduct,
  });
};