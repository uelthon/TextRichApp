export const types = `
type Note{
  id: ID!
  title: String!
  userId: ID!
  content: String!
  pin: Boolean!
  color: String!
  background: String!
  tags: [String]
  createdAt: String!
  updatedAt: String!
}

type myNote{
  count: Int!
  rows:[Note]!
}

`
