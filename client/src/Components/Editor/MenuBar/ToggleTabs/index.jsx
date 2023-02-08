import React, { useState } from 'react'
import { AiOutlineTags } from 'react-icons/ai'
import Modals from '../../../../ui/Modals'
import CheckBoxesTabs from './CheckBoxesTabs'

const ToggleTabs = () => {
  const [show, setShow] = useState(false)
  return (
    <Modals title='Tags' btnLabel={<AiOutlineTags />} {...{ show, setShow }}>
      <CheckBoxesTabs />
    </Modals>
  )
}

export default ToggleTabs
