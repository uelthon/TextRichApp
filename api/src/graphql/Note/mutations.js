export const mutations = `
createNote(
  title: String!
  content: String!
  pin: Boolean
  color: String
  background: String
  tags: [String]
):Note

updateNote(
  noteId: ID!
  title: String
  content: String
  pin: Boolean
  color: String
  background: String
  tags: [String]
):Note

deleteNote(
  noteId: ID!
):Note
` //eslint-disable-line
