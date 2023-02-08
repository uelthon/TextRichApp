export const queries = `
noteCount(
  pin: Boolean
): Int!
allNotes(
  pin: Boolean
): [Note]!
myNotes(
  pin: Boolean
  offset: Int
  limit: Int
  tag: String
  search: String
):myNote!
`
