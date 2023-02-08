import React, { createContext, useState, useContext } from 'react'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Placeholder from '@tiptap/extension-placeholder'
import useUpdateNoteMutation from '../../Hooks/useUpdateNoteMutation'

const EditorStateContext = createContext()

const customLink = Link.configure({
  HTMLAttributes: {
    class: 'my-links'
  }
})

let timer = null

const EditorProvider = ({ children, note }) => {
  const [title, setTitle] = useState(note ? note?.title : '')
  const [color, setColor] = useState(note ? note?.color : '')
  const [font, setFont] = useState(note ? note?.background : '')
  const [pin, setPin] = useState(false)
  const [tags, setTags] = useState(note ? note?.tags : [])
  const { mutate: updateNote } = useUpdateNoteMutation()

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Add a note...',
        showOnlyWhenEditable: false,
        showOnlyCurrent: false
      }),
      customLink,
      Image,
      TaskList,
      TaskItem.configure({
        nested: true
      })
    ],
    content: note ? note?.content : '',
    editorProps: {
      attributes: {
        class: 'my-custom-container'
      }
    },
    onUpdate: ({ editor }) => {
      if (note) {
        const variables = {
          noteId: note.id,
          content: editor.getHTML()
        }
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          updateNote(variables)
        }, 500)
      }
    }
  })
  return (
    <EditorStateContext.Provider value={{
      editor,
      title: {
        value: title,
        setValue: setTitle
      },
      note: note || null,
      font: {
        value: font,
        setValue: setFont
      },
      color: {
        value: color,
        setValue: setColor
      },
      pin: {
        value: pin,
        setValue: setPin
      },
      tags: {
        value: tags,
        setValue: setTags
      }
    }}
    >
      {children}
    </EditorStateContext.Provider>
  )
}

export const useEditorStateValue = () => useContext(EditorStateContext)

export default EditorProvider
