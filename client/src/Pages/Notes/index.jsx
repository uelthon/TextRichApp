import React, { lazy } from 'react'
import Card from 'react-bootstrap/Card'

import styles from './Notes.module.css'
import { usePanelStore } from '../../stores/usePanelStore'

const NormalNotes = lazy(() => import('../../Components/NotesGalleries/NormalNotes'))
const PinNotes = lazy(() => import('../../Components/NotesGalleries/PinNotes'))
const Editor = lazy(() => import('../../Components/Editor'))

const Notes = () => {
  const show = usePanelStore((state) => state.value)
  return (
    <div className={`${styles.container} ${show && styles.containerMargin}`}>
      <div className={styles.wrapper}>
        <div className={styles.containerEditor}>
          <div className={styles.wrapperEditor}>
            <Card className={styles.cardEditor}>
              <Editor />
            </Card>
          </div>
        </div>
        <div>
          <div className={styles.title}>PIN</div>
          <PinNotes />
        </div>
        <div>
          <div className={styles.title}>OTHERS</div>
          <NormalNotes />
        </div>
      </div>
    </div>
  )
}

export default Notes
