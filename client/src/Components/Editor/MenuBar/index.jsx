import React from 'react'

import ImageUp from './ImageUp'
import AddLink from './AddLink'
import ImageLink from './ImageLink'
import SelectColor from './SelectColor'
import SelectFont from './SelectFont'
import Code from './Code'
import CodeBlock from './CodeBlock'
import Undo from './Undo'
import Redo from './Redo'

import styles from './MenuBar.module.css'
import CreateNote from './CreateNote'
import BulletList from './BulletList'
import OrderList from './OrderList'
import TaskList from './TaskList'
import Pin from './Pin'
import ToggleTabs from './ToggleTabs'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className={styles.container}>
      <Code />
      <CodeBlock />
      <BulletList />
      <OrderList />
      <TaskList />
      <AddLink />
      <ImageLink />
      <ImageUp />
      <ToggleTabs />
      <Pin />
      <Undo />
      <Redo />
      <div className={styles.actions}>
        <SelectFont />
        <SelectColor />
        <CreateNote />
      </div>
    </div>
  )
}

export default MenuBar
