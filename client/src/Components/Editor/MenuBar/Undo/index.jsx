import React from 'react'
import Button from 'react-bootstrap/Button'
import { AiOutlineUndo } from 'react-icons/ai'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const Undo = () => {
  const { editor } = useEditorStateValue()
  return (
    <Tooltips label='Undo'>
      <Button
        size='sm'
        variant='light'
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <AiOutlineUndo />
      </Button>
    </Tooltips>
  )
}

export default Undo
