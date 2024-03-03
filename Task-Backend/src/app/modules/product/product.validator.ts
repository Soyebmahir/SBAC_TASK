import { z } from 'zod';





const productValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        price: z.number(),
        categoryId: z.string(),
        image: z.string(),
        createdBy: z.string(),


    })
});







export const productValidations = {
    productValidationSchema
}