import React from 'react'
import Button from 'react-bootstrap/Button'
import { AiOutlineRedo } from 'react-icons/ai'
import Tooltips from '../../../../ui/Tooltips'
import { useEditorStateValue } from '../../EditorState'

const Redo = () => {
  const { editor } = useEditorStateValue()
  return (
    <Tooltips label='Redo'>
      <Button
        size='sm'
        variant='light'
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <AiOutlineRedo />
      </Button>
    </Tooltips>
  )
}

export default Redo
