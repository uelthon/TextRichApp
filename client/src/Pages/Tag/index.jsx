import React, { lazy } from 'react'
import { useMatch } from 'react-router-dom'
import { usePanelStore } from '../../stores/usePanelStore'

import styles from './Tag.module.css'

const TagNotes = lazy(() => import('../../Components/NotesGalleries/TagNotes'))

const Tag = () => {
  const show = usePanelStore((state) => state.value)
  const match = useMatch('/tag/:id')
  const tag = match.params.id

  if (!tag) return null

  return (
    <div className={`${styles.container} ${show ? styles.containerMargin : null}`}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.title}>{tag}</div>
          <TagNotes tag={tag} />
        </div>
      </div>
    </div>
  )
}

export default Tag
