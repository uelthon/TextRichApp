import React from 'react'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { BsPalette } from 'react-icons/bs'

import SelectColor from '../SelectColor'
import SelectFont from '../SelectFont'

const popover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Select Theme</Popover.Header>
    <Popover.Body>
      <div>
        <SelectColor />
        <SelectFont />
      </div>
    </Popover.Body>
  </Popover>
)

const Theme = () => {
  return (
    <OverlayTrigger trigger='click' placement='auto' overlay={popover}>
      <Button size='sm' variant='light'><BsPalette /></Button>
    </OverlayTrigger>
  )
}

export default Theme
