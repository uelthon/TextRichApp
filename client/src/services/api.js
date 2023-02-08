import axios from 'axios'

let token = ''

const setToken = (value) => {
  token = `Bearer ${value}`
}

const graphqlApi = async (query, variables) => {
  const { data } = await axios.post('/api/graphql', {
    query,
    variables
  }, {
    headers: {
      Authorization: token
    }
  })
  if (data.errors) {
    throw new Error(data.errors[0].message)
  }
  return data
}

export {
  graphqlApi,
  setToken
}
