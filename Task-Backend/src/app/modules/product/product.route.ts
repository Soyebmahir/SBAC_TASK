import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";
import { ProductControllers } from "./product.controller";
import { productValidations } from "./product.validator";

const router = Router()

router
    .route('/')
    .post(validateRequest(productValidations.productValidationSchema), ProductControllers.createProduct)
    .get(ProductControllers.getAllProducts)
router
    .route('/:id')
    .get(ProductControllers.getSingleAllProducts)

export const ProductRoutes = router