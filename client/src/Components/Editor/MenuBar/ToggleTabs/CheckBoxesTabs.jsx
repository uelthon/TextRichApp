import React from 'react'
import { useUserStore } from '../../../../stores/userStore'
import CheckBoxTab from './CheckBoxTab'

const CheckBoxesTabs = () => {
  const myTags = useUserStore((state) => state.value.myTags)
  return (
    <div>{
      myTags && myTags.map(t =>
        <CheckBoxTab key={`editor-tag-${t}`} label={t} />
      )
      }
    </div>
  )
}

export default CheckBoxesTabs
