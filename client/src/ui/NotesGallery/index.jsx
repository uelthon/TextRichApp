import React from 'react'
import { ModalEditor } from '../Modals'
import Cards from '../Cards'
import Editor from '../../Components/Editor'
import styles from './NotesGallery.module.css'

const NotesGallery = ({ notes, emptyMessage }) => {
  if (notes.length === 0) return <h1 style={{ textAlign: 'center' }}>{emptyMessage}</h1>
  return (
    <div className={styles.wrapper}>
      {notes.map(n =>
        <ModalEditor key={n.id} btnLabel={<Cards note={n} />}>
          <Editor note={n} />
        </ModalEditor>
      )}
    </div>
  )
}

export default NotesGallery
