//Importamos fastify
const fastify = require("fastify")({
  logger: true,
});
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

//Importamos la ruta de los productos
const productRoutes = require("./routes/products.routes");
const swagger = require("./utils/swagger");

//Importar la conexión a la base de datos
require("./utils/db");

const PORT = process.env.PORT || 3001;

fastify.register(require("fastify-swagger"), swagger.options);
//Creamos una ruta con el método get the fastify
fastify.get("/", (req, res) => res.send({ hello: "world" }));

//Importamos el endpoit para productos
//fastify.route(productRoute);
// Al ser varias rutas hay que recorrer el arreglo y crear las rutas
//mediante el método forEach
productRoutes.forEach((route) => {
  fastify.route(route);
});

//creamos una función para iniciar el servidor y que escuche en el puerto
const start = async () => {
  await fastify.listen(PORT);
  fastify.log.info(`Server listening on ${fastify.server.address().port}`);
};

//ejecutamos la función
start();
