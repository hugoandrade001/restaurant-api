import { Order } from './order.model'
import { CreateOrderDTO } from './order.dto'
import {PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export class OrderService {
  private orders: Order[] = []
  private currentId = 1

  async createOrder(data: CreateOrderDTO): Promise<Order> {
    if (!data.items?.length) throw new Error('Items cannot be empty.')
    if (data.total <= 0) throw new Error('Total must be greater than 0.')

    const order: Order = {
      id: String(this.currentId++),
      ...data,
    }

    this.orders.push(order)
    return order
  }

  async getOrders(): Promise<Order[]> {
    return this.orders
  }

  async getTotalOrders() {
    const orders = await prisma.order.findMany()
    return orders
  }

  async getOrderById(id: number) {
    const order = await prisma.order.findUnique({
      where: {id}
    })

    if(!order) {
        console.log('didnt find one that u asked for')
    }
  }
}

export const orderService = new OrderService()
