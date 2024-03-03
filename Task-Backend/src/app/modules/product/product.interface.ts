import { Types } from "mongoose"

export type TProduct = {
    name: string,
    price: number,
    categoryId: Types.ObjectId,
    image: string,
    createdBy: Types.ObjectId,
    updatedBy?: Types.ObjectId,

}