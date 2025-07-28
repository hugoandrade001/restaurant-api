import express from "express";
import {customerController} from './customer.controller'
const customerRoute = express.Router()

customerRoute.post('/create',customerController.createCustomer)
customerRoute.get('/getall',customerController.getAllCustomers)
customerRoute.get('/getunique/:id',customerController.getOneCustomer)
customerRoute.patch('/update/:id',customerController.updateCustomer)
customerRoute.delete('/delete/:id', customerController.deleteCustomer)





export default customerRoute