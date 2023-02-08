import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Tooltips = ({ children, label }) => {
  return (
    <OverlayTrigger
      placement='bottom'
      overlay={
        <Tooltip>
          {label}
        </Tooltip>
        }
    >
      {children}
    </OverlayTrigger>
  )
}

export default Tooltips
