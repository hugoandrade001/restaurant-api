import { Customer, PrismaClient } from '../../generated/prisma'
import { NotFoundExcepton } from '../../globals/cores/error'
const prisma = new PrismaClient()
export class CustomerService {

    public async createCustomer(RequestBody: any) {
        const {name, email, phone} = RequestBody

        const customer = await prisma.customer.create({
            data: {
                name,
                email, 
                phone
            }
        })
        return customer
    }

    public async getAll() {
        const customers = await prisma.customer.findMany()
        return customers
    }

    public async getUniqueCustomer(id: number) {
        const customer = await prisma.customer.findUnique({
            where: {id}
        })
        if (!customer) {
            throw new NotFoundExcepton('candidate profile not found')
        }
        return customer
    }

    public async updateCustomer(id: number, RequestBody: Customer) {
        const {name, email, phone} = RequestBody
        this.getUniqueCustomer(id)

        const customer: Customer = await prisma.customer.update({
            where: {id},
            data: {
                name,
                email,
                phone
            }
        })

        return customer
    }

    public async deleteCustomer(id: number) {
        this.getUniqueCustomer(id)

        const customerDeleted = await prisma.customer.delete({
            where: {id}
        })

        return customerDeleted

    }
}

export const customerService: CustomerService = new CustomerService()
