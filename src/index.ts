
import {Server} from './server'

 class Restaurant {

    public run() {
        const server = new Server()
        server.start()
    }


}

const restaurant: Restaurant = new Restaurant()
restaurant.run()

