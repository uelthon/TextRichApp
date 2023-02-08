import React from 'react'
import Button from 'react-bootstrap/Button'
import { AiOutlineOrderedList } from 'react-icons/ai'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const OrderList = () => {
  const { editor } = useEditorStateValue()

  return (
    <Tooltips label='Order List'>
      <Button
        size='sm'
        variant='light'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <AiOutlineOrderedList />
      </Button>
    </Tooltips>
  )
}

export default OrderList
