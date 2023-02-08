import React from 'react'
import Button from 'react-bootstrap/Button'
import { FaTasks } from 'react-icons/fa'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const TaskList = () => {
  const { editor } = useEditorStateValue()
  return (
    <Tooltips label='Task List'>
      <Button
        size='sm'
        variant='light'
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={editor.isActive('taskList') ? 'is-active' : ''}
      >
        <FaTasks />
      </Button>
    </Tooltips>
  )
}

export default TaskList
