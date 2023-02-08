import { graphqlApi } from './api'
import { createUser, updateUser } from '../graphql/mutations'

const create = (variables) => {
  return graphqlApi(createUser, variables)
}

const update = (variables) => {
  return graphqlApi(updateUser, variables)
}

export default {
  create,
  update
}
