const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
      author: String,
      title: String,
      image: String,
      price: String,
      description: String,
    },
    {
      timestamps: true,
    }
  );
  
  const products = mongoose.model("Product", productSchema);

  