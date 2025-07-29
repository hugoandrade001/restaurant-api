import express from "express";
// import {orderController} from './order.controller'
import { orderController } from "./order.controller";
const orderRoute = express.Router()

orderRoute.post('/create', orderController.createOrder)
orderRoute.get('/getall', orderController.getTotalOrders)

export default orderRoute