import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export class OrderService {
  async createOrder(data: {customerId: number;items: { menuItemId: number; quantity?: number }[];}) {

    const order = await prisma.order.create({
      data: {
        customerId: data.customerId,
        items: {
          create: data.items.map(item => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity ?? 1, 
          })),
        },
      },
      include: {
        items: {
          include: {
            menuItem: true,
          },
        },
        customer: true,
      },
    });
    return order;
  }
}

export const orderService = new OrderService();
