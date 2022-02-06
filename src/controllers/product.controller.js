//Importamos el modelo de producto para poder llevar a cabo la lógica de programación
//con la base de datos de mongoose
const Product = require("../models/Product");

//Creamos nuestras funciones del CRUD que pasaremos al archivo routes
// en la propiedad handler
const getProducts = async (request, reply) => {
  const products = await Product.find();
  return products;
};

const getProduct = async (request, reply) => {
  const product = await Product.findById(request.params.id);
  if (product) {
    return reply.send(product);
  } else {
    return reply.code(204).send("No product");
  }
};

const createProduct = async (request, reply) => {
  const newProduct = new Product(request.body);
  await newProduct.save();
  reply.code(201).send(newProduct);
};

const deleteProduct = async (request, reply) => {
  await Product.findByIdAndDelete(request.params.id);
  reply.code(204).send("Product deleted");
};

const updateProduct = async (request, reply) => {
  const newProduct = await Product.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
    }
  );
  reply.send(newProduct);
};

//Exportamos las funciones a través de un objeto y lo va a recibir el archivo products.routes.js
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
