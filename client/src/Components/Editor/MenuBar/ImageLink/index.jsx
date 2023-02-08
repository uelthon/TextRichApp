import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { TbExternalLink } from 'react-icons/tb'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const ImageLink = () => {
  const { editor } = useEditorStateValue()
  const [show, setShow] = useState(false)
  const [url, setUrl] = useState('')
  const addImage = () => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
      setShow(false)
      setUrl('')
    }
  }
  return (
    <>
      <Tooltips label='Url Img'>
        <Button size='sm' variant='light' onClick={() => setShow(true)}><TbExternalLink /></Button>
      </Tooltips>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Copy your Image link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            className='mb-3'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='Image URL'
          />
          <Button type='button' onClick={addImage}>Submit</Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ImageLink
