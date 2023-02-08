import React from 'react'
import EditorProvider from './EditorState'
import Tiptap from './Tiptap'

const Editor = ({ note }) => {
  return (
    <EditorProvider note={note}>
      <Tiptap />
    </EditorProvider>
  )
}

export default Editor
