
const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
  {
    orderId: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productList: {
      type: Array,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);
const order = mongoose.model("BookStoreOrderDetail", orderSchema);