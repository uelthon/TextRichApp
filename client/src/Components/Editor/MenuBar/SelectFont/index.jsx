import React from 'react'
import Form from 'react-bootstrap/Form'
import useUpdateNoteMutation from '../../../../Hooks/useUpdateNoteMutation'
import { useEditorStateValue } from '../../EditorState'

import styles from '../MenuBar.module.css'

const SelectFont = () => {
  const { font, note } = useEditorStateValue()
  const { mutate: updateNote } = useUpdateNoteMutation()
  const handleChangeFont = (e) => {
    e.preventDefault()
    if (note) {
      font.setValue(e.target.value)
      const variables = {
        noteId: note.id,
        background: e.target.value
      }
      return updateNote(variables)
    }
    font.setValue(e.target.value)
  }
  return (
    <Form.Select size='sm' value={font.value} className={styles.menuSelect} onChange={handleChangeFont}>
      <option value=''>Font</option>
      <option value='supermarket'>supermarket</option>
      <option value='food'>food</option>
      <option value='musica'>musica</option>
      <option value='recipes'>recipes</option>
      <option value='notes'>notes</option>
      <option value='places'>places</option>
      <option value='travels'>travel</option>
      <option value='video'>video</option>
      <option value='celebration'>celebration</option>
    </Form.Select>
  )
}

export default SelectFont
