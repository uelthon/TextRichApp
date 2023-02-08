import React from 'react'
import Button from 'react-bootstrap/Button'
import { BsCode } from 'react-icons/bs'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const Code = () => {
  const { editor } = useEditorStateValue()
  return (
    <Tooltips label='Code'>
      <Button
        variant='light'
        size='sm'
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <BsCode />
      </Button>
    </Tooltips>
  )
}

export default Code
