import { faker } from "@faker-js/faker"
import { createServer, Factory, Model } from "miragejs"

export function makeServer() {
  return createServer({
    models: {
      product: Model,
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
      this.namespace = "api"
      this.timing = 750

      this.get("/products", (schema, request) => {
        return schema.products.all()
      })
    },
  })
}
