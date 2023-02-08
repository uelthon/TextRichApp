import React from 'react'
import Form from 'react-bootstrap/Form'
import useUpdateNoteMutation from '../../../../Hooks/useUpdateNoteMutation'
import { useEditorStateValue } from '../../EditorState'
import styles from '../MenuBar.module.css'

const SelectColor = () => {
  const { color, note } = useEditorStateValue()
  const { mutate: updateNote } = useUpdateNoteMutation()
  const handleChangeColor = (e) => {
    e.preventDefault()
    if (note) {
      color.setValue(e.target.value)
      const variables = {
        noteId: note.id,
        color: e.target.value
      }
      return updateNote(variables)
    }
    color.setValue(e.target.value)
  }
  return (
    <Form.Select size='sm' value={color.value} className={styles.menuSelect} onChange={handleChangeColor}>
      <option value=''>Color</option>
      <option value='#f28b82'>red</option>
      <option value='#fbbc04'>orange</option>
      <option value='#fff475'>yellow</option>
      <option value='#ffff99'>post it</option>
      <option value='#ccff90'>green</option>
      <option value='#a7ffeb'>bluishgreen</option>
      <option value='#cbf0f8'>azul</option>
      <option value='#aecbfa'>drakblue</option>
      <option value='#d7aefb'>purple</option>
      <option value='#fdcfe8'>pink</option>
      <option value='#e6c9a8'>brown</option>
      <option value='#e8eaed'>gris</option>
    </Form.Select>
  )
}

export default SelectColor
