import { Note } from './Note/index.js'
import { User } from './User/index.js'
import { Login } from './Login/index.js'

const resolvers = {
  Query: {
    ...User.resolvers.queries,
    ...Note.resolvers.queries
  },
  Mutation: {
    ...User.resolvers.mutations,
    ...Note.resolvers.mutations,
    ...Login.resolvers.mutations
  }
}

export default resolvers
