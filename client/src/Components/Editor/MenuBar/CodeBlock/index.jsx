import React from 'react'
import Button from 'react-bootstrap/Button'
import { BiCodeBlock } from 'react-icons/bi'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const CodeBlock = () => {
  const { editor } = useEditorStateValue()
  return (
    <Tooltips label='Code Block'>
      <Button
        size='sm'
        variant='light'
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <BiCodeBlock />
      </Button>
    </Tooltips>
  )
}

export default CodeBlock
