import { NextFunction, Request, Response } from "express"
import {customerService} from './customer.service'

class CustomerController {

    public async createCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const customerPayload = await customerService.createCustomer(req.body)

            res.status(200).json({
                message: "created user sucessfully",
                data: customerPayload
            })
        } catch (error) {
            console.log('error in creating customer')
        }
        
    }

    public async getAllCustomers(req: Request, res: Response, next: NextFunction) {
        try {
            const customers = await customerService.getAll()
            res.status(200).json({
                message: 'get all of users sucessfully',
                data: customers,
            })
        } catch (error) {
            console.log('error on finding all users')
        }
    }

    public async getOneCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const customer = await customerService.getUniqueCustomer(parseInt(req.params.id))
            res.status(200).json({
                message: 'get one specific customer successfully', 
                data: customer
            })
        } catch (error) {
            console.log('error finding this customer')
        }
    }

    public async updateCustomer(req: Request, res: Response, next: NextFunction) {
        const customer = await customerService.updateCustomer(parseInt(req.params.id), req.body)
        
        return res.status(200).json({
            message: "Update customer sucessfully",
            data: customer
        })
    }

    public async deleteCustomer(req: Request, res: Response, next: NextFunction) {
        const customerDeleted = await customerService.deleteCustomer(parseInt(req.params.id))

        return res.status(200).json({
            message: 'user deleted sucessfully',
            data: customerDeleted
        })
    }
    
}

export const customerController: CustomerController = new CustomerController()
