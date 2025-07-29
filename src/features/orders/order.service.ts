import {PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()

export class OrderService {

    async createOrder(data: {
        customerId: number, 
        items: { menuItemId: number; quantity?: number }[]
    }) {

    }
}

export const orderService = new OrderService();