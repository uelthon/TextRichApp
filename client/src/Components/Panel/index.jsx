import React from 'react'
import { GoLightBulb } from 'react-icons/go'
import { BiTagAlt } from 'react-icons/bi'

import ItemPanel from './ItemPanel'
import { useUserStore } from '../../stores/userStore'
import { usePanelStore } from '../../stores/usePanelStore'
import styles from './Panel.module.css'
import AddTag from '../AddTag'
import RemoveTag from './RemoveTag'

const Panel = () => {
  const user = useUserStore((state) => state.value)
  const show = usePanelStore((state) => state.value)
  if (!user) return null
  return (
    <div className={`${styles.containerPanel} ${show ? styles.show : null}`}>
      <ItemPanel href='/notes'>
        <GoLightBulb size='1.375rem' />
        <span>Notes</span>
      </ItemPanel>
      {user.myTags.map(t =>
        <ItemPanel key={t} href={`/tag/${t}`}>
          <BiTagAlt size='1.375rem' />
          <span>{t} <RemoveTag tag={t} /></span>
        </ItemPanel>
      )}
      <AddTag />
    </div>
  )
}

export default Panel
