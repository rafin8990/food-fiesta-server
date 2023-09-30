import express from 'express'
import userRoute from '../modules/user/user.route'
import cowRoute from '../modules/cow/cow.route'
import OrderRoute from '../modules/order/order.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/cows',
    route: cowRoute,
  },
  {
    path: '/orders',
    route: OrderRoute,
  },
]
moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
