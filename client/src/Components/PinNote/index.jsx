import React from 'react'
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
import useUpdateNoteMutation from '../../Hooks/useUpdateNoteMutation'
import Tooltips from '../../ui/Tooltips'

const index = ({ noteId, pin }) => {
  const { mutate: updateNote } = useUpdateNoteMutation()
  const handleClick = (e) => {
    e.stopPropagation()
    updateNote({
      noteId,
      pin: !pin
    })
  }
  return (
    <Tooltips label={pin ? 'Unpin' : 'Pin'}>
      <Button
        size='sm'
        onClick={handleClick}
      >
        {pin ? <BsPinAngleFill /> : <BsPinAngle />}
      </Button>
    </Tooltips>
  )
}

export default index
