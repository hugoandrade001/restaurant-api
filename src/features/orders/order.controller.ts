import { NextFunction, Request, Response } from "express";
import { orderService, OrderService } from "./order.service";

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
}