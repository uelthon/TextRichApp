import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { usePanelStore } from '../../stores/usePanelStore'

import styles from './Panel.module.css'

const ItemPanel = ({ children, href }) => {
  const show = usePanelStore((state) => state.value)
  const location = useLocation()
  const navigate = useNavigate()

  const select = location.pathname === href
  return (
    <div className={`${styles.containerItem} ${show ? styles.showLabelItem : ''} ${select ? styles.select : null}`} onClick={() => navigate(href)}>
      {children}
    </div>
  )
}

export default ItemPanel
