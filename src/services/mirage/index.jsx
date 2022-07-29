import { faker } from "@faker-js/faker"
import { createServer, Factory, Model } from "miragejs"
import cartItems from "../../cartItems"

export function makeServer() {
  return createServer({
    models: {
      product: Model,
      cart: Model,
    },

    factories: {
      product: Factory.extend({
        id() {
          return faker.datatype.uuid()
        },

        title() {
          return faker.commerce.productName()
        },

        price() {
          return faker.commerce.price()
        },
      }),
    },

    seeds(server) {
      server.createList("product", 20)
    },

    routes() {
      this.urlPrefix = "http://localhost:3001"
      this.namespace = "api"
      this.timing = 750

      this.get("/products", (schema, request) => {
        return schema.products.all()
      })
      // this.passthrough("http://course-api.com/react-useReducer-cart-project")

      this.get("/cart", (schema, request) => {
        return cartItems
      })
    },
  })
}
