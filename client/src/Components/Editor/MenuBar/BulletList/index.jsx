import React from 'react'
import Button from 'react-bootstrap/Button'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const BulletList = () => {
  const { editor } = useEditorStateValue()

  return (
    <Tooltips label='Bullet List'>
      <Button
        size='sm'
        variant='light'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <AiOutlineUnorderedList />
      </Button>
    </Tooltips>
  )
}

export default BulletList
