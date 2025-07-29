import express from "express";
// import {orderController} from './order.controller'
import { orderController, OrderController } from "./order.controller";
const orderRoute = express.Router()

orderRoute.post('/create', orderController.createOrder)

export default orderRoute