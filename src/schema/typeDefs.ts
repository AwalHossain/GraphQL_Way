


const typeDefs = `#graphql

    type User {
        id : ID!
        name: String!
        userName: String!
        nationality: Nationality!
        age: Int!
        favoriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        title: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
    type Query {
        users: [User]
        user(id: ID!): User,
        movies: [Movie!]!,
        movie(title: String!): Movie!

    }


    enum Nationality {
    #   give me 170 countries togethere in UpperCase
     USA,
        CANADA,
        MEXICO,
        GERMANY,
        FRANCE,
        SPAIN,
        ITALY,
        UK,
        CHINA,
        INDIA,
        BANGLADESH,
        BARBADOS,


    }


`

export default typeDefs;