import { NextFunction, Request, Response } from "express";
import { orderService, OrderService } from "./order.service";
import { Customer, PrismaClient } from '../../generated/prisma'
import { NotFoundExcepton } from '../../globals/cores/error'
const prisma = new PrismaClient()

export class OrderController {
    async createOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const order = await orderService.createOrder(req.body)
            res.status(200).json({
                message: 'order created successfully',
                data: order
            })
        } catch (error) {
            next()
        }
    }

    async getTotalOrders(req: Request, res: Response, next: NextFunction) {
        try {
            const orders = await orderService.getTotalOrders()
            res.status(200).json({
                message: 'get all orders created successfully',
                data: orders
            })
        } catch (error) {
            console.log('error')
        }
    }

    async getOrderById(req: Request, res: Response, next: NextFunction) {
        const orderById = await orderService.getOrderById(parseInt(req.params.id))

        res.status(200).json({
            message: 'get exactly a order by id',
            data: orderById
        })
    }
}
export const orderController: OrderController = new OrderController()