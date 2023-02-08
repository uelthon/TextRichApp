export const myNotes = `
query MyNotes($pin: Boolean, $offset: Int, $limit: Int, $tag: String, $search: String) {
  myNotes(pin: $pin, offset: $offset, limit: $limit, tag: $tag, search: $search) {
    count
    rows {
      id
      title
      content
      pin
      color
      background
      tags
      createdAt
      updatedAt
    }
  }
}
`
