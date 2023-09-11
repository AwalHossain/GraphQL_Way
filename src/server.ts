import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


const typeDefs = `#graphql

type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}
`


const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    }
]


const resolvers = {
    Query: {
        books: () => books,
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

