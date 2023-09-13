import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolver from './schema/resolver';
import typeDefs from './schema/typeDefs';




const server = new ApolloServer({ typeDefs, resolvers: resolver })


async function bootstrap() {

    const { url } = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    })

    console.log(`Server ready at ${url}`)

}
bootstrap()

