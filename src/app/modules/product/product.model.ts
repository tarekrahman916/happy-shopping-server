import { Schema, model } from "mongoose";
import { IProduct, ProductModel } from "./product.interface";

const ProductSchema = new Schema<IProduct, ProductModel>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    seller: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Product = model<IProduct, ProductModel>("Product", ProductSchema);

export default Product;
