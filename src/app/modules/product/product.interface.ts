import { Model, Types } from "mongoose";

export type IProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  quantity: number;
  seller?: Types.ObjectId | string;
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
