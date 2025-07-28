import { PrismaClient } from "../../generated/prisma"
const prisma = new PrismaClient()

export class MenuService {

    public async createItem(RequestBody: any) {
        const {name, description, price} = RequestBody
        const item = await prisma.menuItem.create({
            data: {
                name, 
                description,
                price
            }
        })
        
        return item
    }

    public async getAllItems() {

        const items = await prisma.menuItem.findMany()

        return items

    }
}

export const menuService: MenuService = new MenuService()
