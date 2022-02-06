//Importamos el modelo de producto
//const Product = require("../models/Product");
//Ya no importamos el modelo, ahota vamos a importar el controlador que es el quye va a tener el modelo
const productController = require("../controllers/product.controller");

//Creamos la ruta con fastify, para ello creamos un objeto
// y le pasamos como parámetros la url de la ruta, el método
// y el handler que será la función con la lógica de lo que nos va a devolver.
//Al tener múltiples rutas se pasan éstas mediante un array de rutas
const routes = [
  {
    url: "/products",
    method: "GET",
    handler: productController.getProducts,
  },
  {
    url: "/products/:id",
    method: "GET",
    handler: productController.getProduct,
  },
  {
    url: "/products",
    method: "POST",
    handler: productController.createProduct,
  },
  {
    url: "/products/:id",
    method: "DELETE",
    handler: productController.deleteProduct,
  },
  {
    url: "/products/:id",
    method: "PUT",
    handler: productController.updateProduct,
  },
];

//Le pasamos la ruta creada a fastify
// a través de su método route y se le añade al archivo index.js

module.exports = routes;
