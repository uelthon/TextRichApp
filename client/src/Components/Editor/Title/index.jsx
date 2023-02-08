import React from 'react'
import Form from 'react-bootstrap/Form'
import useUpdateNoteMutation from '../../../Hooks/useUpdateNoteMutation'
import { useEditorStateValue } from '../EditorState'

let timer = null

const Title = () => {
  const { title, note } = useEditorStateValue()
  const { mutate: updateNote } = useUpdateNoteMutation()

  const handleChange = (e) => {
    e.preventDefault()
    if (!note) {
      return title.setValue(e.target.value)
    }

    title.setValue(e.target.value)
    const variables = {
      noteId: note.id,
      title: e.target.value
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      updateNote(variables)
    }, 500)
  }

  return (
    <Form.Control
      style={{ backgroundColor: 'inherit', border: 'none' }}
      type='text'
      value={title.value}
      placeholder='Title'
      onChange={handleChange}
    />
  )
}

export default Title
