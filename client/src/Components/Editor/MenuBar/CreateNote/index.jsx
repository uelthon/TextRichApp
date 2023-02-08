import React from 'react'
import Button from 'react-bootstrap/Button'
import useCreateNoteMutation from '../../../../Hooks/useCreateNoteMutation'
import { useEditorStateValue } from '../../EditorState'

const CreateNote = () => {
  const { editor, title, color, font, pin, note, tags } = useEditorStateValue()
  const { mutate: createNote, isLoading } = useCreateNoteMutation()

  if (note) return null

  const AddNote = () => {
    const variables = {
      title: title.value,
      content: editor.getHTML(),
      color: color.value,
      background: font.value,
      ...(pin.value !== undefined && { pin: pin.value }),
      ...(tags.value.length && { tags: tags.value })
    }
    createNote(variables, {
      onSuccess: (data) => {
        title.setValue('')
        color.setValue('')
        font.setValue('')
        pin.setValue(false)
        tags.setValue([])
        editor.commands.clearContent()
      }
    })
  }

  return (
    <Button
      size='sm'
      variant='light'
      onClick={() => AddNote()}
      disabled={isLoading}
    >Add
    </Button>
  )
}

export default CreateNote
