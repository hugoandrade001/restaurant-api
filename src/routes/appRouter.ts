import { Application } from "express";
import customerRoute from "../features/customers/customer.route";
import menuRoutes from "../features/menu-itens/menu.routes";

function appRoutes(app:Application ) {
    app.use('/api/restaurant/customers', customerRoute)
    app.use('/api/restaurant/menu', menuRoutes)

}

export default appRoutes