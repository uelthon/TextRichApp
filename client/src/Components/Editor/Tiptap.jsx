import React from 'react'
import { EditorContent } from '@tiptap/react'

import MenuBar from './MenuBar'
import Title from './Title'
import './Editor.css'
import background from '../../assets'
import { useEditorStateValue } from './EditorState'

const Tiptap = () => {
  const { color, font, editor } = useEditorStateValue()
  const styleFont = {
    ...(color?.value && !font?.value ? { backgroundColor: color.value } : null),
    ...(font?.value
      ? {
          backgroundImage: `url(${background[font.value]})`,
          backgroundAttachment: 'scroll',
          backgroundOrigin: 'padding-box',
          backgroundClip: 'border-box',
          backgroundPositionX: 'right',
          backgroundPositionY: 'bottom',
          backgroundSize: 'cover'
        }
      : null)
  }
  return (
    <div
      className='wrapper-tiptap'
      style={styleFont}
    >
      <div style={{
        backgroundColor: 'inherit',
        padding: '1rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.375rem'
      }}
      >
        <Title />
        <EditorContent editor={editor} />
      </div>
      <div
        style={{ ...(color?.value ? { backgroundColor: color.value } : null), padding: '1rem' }}
      >
        <MenuBar editor={editor} />
      </div>
    </div>
  )
}

export default Tiptap
