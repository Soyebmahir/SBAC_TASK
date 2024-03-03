import express from 'express'

import { ProductRoutes } from '../modules/product/product.route'

import { UserRoutes } from '../modules/user/user.route'
import { FormDataRoutes } from '../modules/formData/formaData.route'

const router = express.Router()

const moduleRoutes = [

  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/formData',
    route: FormDataRoutes,
  },
]
moduleRoutes.forEach((routes) => {
  router.use(routes.path, routes.route)
})
export default router
