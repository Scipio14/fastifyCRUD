//Importamos el Schema y el modelo de mongoose
const { Schema, model } = require("mongoose");

//Creamos el Schema y lo llamamos productSchema para pasarselo al modelo
const productSchema = new Schema(
  {
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Product", productSchema);
