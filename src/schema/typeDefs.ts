
// import gql from apollo server


const typeDefs = `#graphql

type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
        favoriteMovies: [Movie]
}


    type Movie {
        id: ID!
        title: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }



type Query{
    users: [User!]!
    user(id: ID): User!
    movies: [Movie!]!
    movie(title: String): Movie!
}
`


export default typeDefs;