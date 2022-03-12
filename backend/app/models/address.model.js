const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, Ref: "User" },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    pincode: { type: Number, required: true },
    locality: { type: String },
    address: { type: String, required: true },
    city: { type: String, required: true },
    landmark: { type: String, required: true },
    addressType: {
      type: String,
      enum: ["Home", "Work", "Other"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Address = mongoose.model("Address", AddressSchema);