export const mutations = `
createUser(
  username: String!
  password: String!
):User

updateUser(
  userId: ID!
  username: String
  myTags: [String]
):User
`
