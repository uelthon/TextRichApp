export const types = `
type UserAuth{
  id: ID!
  username: String!
  myTags: [String]!
  isAdmin: Boolean!
}
type Auth {
  token: String!
  user: UserAuth!
}
`
