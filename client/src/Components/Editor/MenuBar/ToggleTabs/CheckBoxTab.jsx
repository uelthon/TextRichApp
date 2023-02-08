import React from 'react'
import Form from 'react-bootstrap/Form'

import { useEditorStateValue } from '../../EditorState'
import useUpdateNoteMutation from '../../../../Hooks/useUpdateNoteMutation'

const CheckBoxTab = ({ label }) => {
  const { tags, note } = useEditorStateValue()
  const { mutate: updateNote } = useUpdateNoteMutation()

  const handleChange = (e) => {
    if (tags.value.includes(label)) {
      const newTags = tags.value.filter(t => t !== label)
      if (note) {
        tags.setValue(newTags)
        return updateNote({
          noteId: note.id,
          tags: newTags
        })
      }
      return tags.setValue(newTags)
    }
    const newTags = [...tags.value, label]
    tags.setValue(newTags)
    if (note) {
      updateNote({
        noteId: note.id,
        tags: newTags
      })
    }
  }

  return (
    <Form.Check
      type='checkbox'
      label={label}
      onChange={handleChange}
      defaultChecked={tags.value.includes(label)}
    />
  )
}

export default CheckBoxTab
