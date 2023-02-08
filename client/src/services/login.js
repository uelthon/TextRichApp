import { loginMutation } from '../graphql/mutations'
import { graphqlApi } from './api'

const login = async (variables) => {
  return graphqlApi(loginMutation, variables)
}

export default login
