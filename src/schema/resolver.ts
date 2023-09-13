import { db } from "./db";



const resolver = {
    Query: {
        users: () => db.userList,
        user: (parent: any, args: { id: string }) => db.userList.find(user => user.id === args.id),
        movies: () => db.movies,
        movie: (parent: any, args: { title: string }) => db.movies.find(movie => movie.title === args.title),
    },
    User: {
        favoriteMovies: () => {
            return db.movies.filter(movie => movie.yearOfPublication > 2000);
        }
    }
}

export default resolver;