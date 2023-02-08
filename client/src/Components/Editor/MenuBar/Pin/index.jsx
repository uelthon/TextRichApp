import React from 'react'
import Button from 'react-bootstrap/Button'
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const Pin = () => {
  const { note, pin } = useEditorStateValue()

  if (note) return null

  return (
    <Tooltips label={pin.value ? 'Unpin' : 'Pin'}>
      <Button
        size='sm'
        variant='light'
        onClick={() => pin.setValue(!pin.value)}
      >
        {pin.value ? <BsPinAngleFill /> : <BsPinAngle />}
      </Button>
    </Tooltips>
  )
}

export default Pin
