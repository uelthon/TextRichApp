import { graphqlApi } from './api'
import { myNotes } from '../graphql/queries'
import { createNote, updateNote, deleteNote } from '../graphql/mutations'

const getAll = (variables) => {
  return graphqlApi(myNotes, variables)
}

const create = (variables) => {
  return graphqlApi(createNote, variables)
}

const update = (variables) => {
  return graphqlApi(updateNote, variables)
}

const deleteUserNote = (variables) => {
  return graphqlApi(deleteNote, variables)
}

export default {
  getAll,
  create,
  update,
  deleteUserNote
}
