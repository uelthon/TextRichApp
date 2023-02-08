import { Note } from './Note/index.js'
import { User } from './User/index.js'
import { Login } from './Login/index.js'

const typeDefs = `

${Note.types}
${User.types}
${Login.types}

type Query {
  ${Note.queries}
  ${User.queries}
}

type Mutation {
  ${User.mutations}
  ${Note.mutations}
  ${Login.mutations}
}

`

export default typeDefs
