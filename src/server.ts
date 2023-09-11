import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';


const app = express();


const schema = buildSchema(`  
    type Query{
        description: String
        price: Float
    }
`)

const root = {
    description: `A simple Red T-Shirt`,
    price: 123.45
}


app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    pretty: true,
    graphiql: true
}))



app.listen(3000,()=>{
    
    console.log('Server is running on port 3000');

}  );