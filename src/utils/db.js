//Importar mongoose para hacer la conexion a la base de datos
const mongoose = require("mongoose");

//Crear la conexión a la base de datos de mongodb
//mediante el método connect
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true , useUnifiedTopology:true }, () =>
  console.log("MongoDB Connected")
);
