import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const typeDefs = `#graphql
    type Product {
        id: ID!
        description: String
        reviews: [Review]
        price: Float!
    }

    type Review {
        id: ID!
        rating: Int
        comment: String
    }

    type Order {
        id: ID!
        date: String!
        subTotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product
        quantity: Int!
    }

    type Query {
        product: [Product]
        order: [Order]
        orderItem: [OrderItem]
    }
    # type 
`

const review = [
    {
        id: 1,
        rating: 5,
        comment: 'A great shoe'

    },
    {
        id: 2,
        rating: 4,
        comment: 'A well suited shoe'
    }
]

const products = [
    {
        id: 1,
        description: 'A nice Red Shoe',
        price: 100.00,
        reviews: [review[0]]
    },
    {
        id: 2,
        description: 'A nice Blue Shoe',
        price: 120.00,
        reviews: [review[1]]
    }
]



const orderItem = [
    {
        products: products[0],
        quantity: 1
    },
    {
        products: products[1],
        quantity: 1
    }
]

const orders = [
    {
        id: 1,
        date: '2020-01-01',
        subTotal: 225.00,
        items: orderItem

    }
]




const resolvers = {
    Query: {
        product: () => products,
        order: () => orders,
        orderItem: () => orderItem
    }

}



const server = new ApolloServer({ typeDefs, resolvers })


async function bootstrap() {

    const { url } = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    })

    console.log(`Server ready at ${url}`)

}
bootstrap()

