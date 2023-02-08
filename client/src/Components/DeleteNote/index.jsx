import React, { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FiTrash } from 'react-icons/fi'
import useDeleteNoteMutation from '../../Hooks/useDeleteNoteMutation'
import Tooltips from '../../ui/Tooltips'

const DeleteNote = ({ noteId }) => {
  const [show, setShow] = useState(false)
  const { mutate: deleteNote, isLoading } = useDeleteNoteMutation()

  const handleClick = () => {
    deleteNote({
      noteId
    }, {
      onSuccess: () => setShow(false)
    })
  }
  return (
    <div
      onClick={(e) => e.stopPropagation()}
    >
      <Tooltips label='Delete'>
        <Button
          onClick={() => setShow(true)}
          size='sm'
          variant='danger'
        >
          <FiTrash />
        </Button>
      </Tooltips>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Body>
          Do you really remove the note?
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
    </div>
  )
}

export default DeleteNote
