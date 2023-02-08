import React, { useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import useUpdateUserMutation from '../../../Hooks/useUpdateUserMutation'
import { useUserStore } from '../../../stores/userStore'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Tooltips from '../../../ui/Tooltips'

const RemoveTag = ({ tag }) => {
  const [show, setShow] = useState(false)
  const user = useUserStore((state) => state.value)
  const removeTag = useUserStore((state) => state.removeTag)
  const { mutate: updateUser, isLoading } = useUpdateUserMutation()
  const navigate = useNavigate()

  if (!user) return null

  const handleClick = () => {
    updateUser({
      userId: user.id,
      myTags: user.myTags.filter(t => t !== tag)
    }, {
      onSuccess: () => {
        removeTag(tag)
        setShow(false)
        navigate('/notes')
      }
    })
  }

  return (
    <>
      <Tooltips label='Delete'>
        <div
          onClick={(e) => {
            e.stopPropagation()
            setShow(true)
          }}
        >
          <FiTrash color='#f28b82' />
        </div>
      </Tooltips>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Body>
          Do you really remove the tag {tag}?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='primary'
            onClick={() => setShow(false)}
            disabled={isLoading}
          >Cancel
          </Button>
          <Button
            variant='danger' onClick={handleClick}
            disabled={isLoading}
          >
            {!isLoading ? 'Eliminar' : <Spinner size='sm' />}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RemoveTag
