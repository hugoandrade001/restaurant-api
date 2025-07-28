import { NextFunction, Response, Request } from "express";
import { menuService } from "./menu.service";

class MenuController {


    public async createItem(req: Request, res: Response, next: NextFunction) {
        const item = await menuService.createItem(req.body)

        res.status(200).json({
            message: 'item created sucessfully',
            data: item
        })

    }

    public async getAllItems(req: Request, res: Response, next: NextFunction) {
        const itens = await menuService.getAllItems()

        res.status(200).json({
            message: 'all itens have shown sucessfully',
            data: itens
        })
    }
}

export const menuController: MenuController = new MenuController()
