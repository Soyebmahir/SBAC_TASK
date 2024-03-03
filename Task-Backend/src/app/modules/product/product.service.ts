import { TProduct } from "./product.interface";
import Product from "./product.model"

const createProductIntoDb = async (payload: TProduct) => {
    const result = await Product.create(payload)
    return result
}
const getAllProductsFromDb = async () => {
    const result = await Product.find();
    return result;
}
const getSingleProductsFromDb = async (id: string) => {
    const result = await Product.findById(id);
    return result;
}

export const ProductServices = {
    getAllProductsFromDb,
    getSingleProductsFromDb,
    createProductIntoDb
}