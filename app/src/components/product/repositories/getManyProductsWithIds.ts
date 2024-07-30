import ProductModel from "../models/Product";

export async function getManyProductsWithIds(productIds: string[]) {
    return await ProductModel.find({
        _id: {
            $in: productIds
        }
    });
}