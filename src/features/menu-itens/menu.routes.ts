import express from "express";
import { menuController } from "./menu.controller";
const menuRoutes = express.Router()

menuRoutes.post('/createitem', menuController.createItem)
menuRoutes.get('/getallitems', menuController.getAllItems)


export default menuRoutes