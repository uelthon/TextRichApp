import React, { lazy } from 'react'
import { useMatch } from 'react-router-dom'
import { usePanelStore } from '../../stores/usePanelStore'

import styles from './Search.module.css'

const SearchNotes = lazy(() => import('../../Components/NotesGalleries/SearchNotes'))

const Search = () => {
  const show = usePanelStore((state) => state.value)
  const match = useMatch('/search/:keyword')
  const keyword = match.params.keyword

  return (
    <div className={`${styles.container} ${show ? styles.containerMargin : null}`}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.title}>Search {keyword}</div>
          <SearchNotes keyword={keyword} />
        </div>
      </div>
    </div>
  )
}

export default Search
