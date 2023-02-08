export const loginMutation = `
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      id
      username
      myTags
      isAdmin
    }
  }
}
`

export const createUser = `
mutation CreateUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    username
    myTags
    isAdmin
    id
  }
}
`

export const createNote = `
mutation CreateNote($title: String!, $content: String!, $pin: Boolean, $color: String, $background: String, $tags: [String]) {
  createNote(title: $title, content: $content, pin: $pin, color: $color, background: $background, tags: $tags) {
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
`

export const updateNote = `
mutation UpdateNote($noteId: ID!, $title: String, $content: String, $pin: Boolean, $color: String, $background: String, $tags: [String]) {
  updateNote(noteId: $noteId, title: $title, content: $content, pin: $pin, color: $color, background: $background, tags: $tags) {
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
`

export const updateUser = `
mutation UpdateUser($userId: ID!, $myTags: [String], $username: String) {
  updateUser(userId: $userId, myTags: $myTags, username: $username) {
    username
    myTags
    isAdmin
    id
  }
}
`

export const deleteNote = `
mutation DeleteNote($noteId: ID!) {
  deleteNote(noteId: $noteId) {
    title
    content
    id
  }
}
`
