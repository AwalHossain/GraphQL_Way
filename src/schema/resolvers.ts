import { db } from './userList';

const resolver = {
    Query: {
        users: () => db.userList,
        user: (parent: any, args: { id: number }) => db.userList.find(user => Number(user.id) === Number(args.id)),
        movies: () => db.movies,
        movie: (parent: any, args: { title: string }) => db.movies.find(movie => movie.title === args.title)
    }
}

export default resolver;