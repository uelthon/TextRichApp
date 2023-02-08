import React, { useCallback, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { AiOutlineLink } from 'react-icons/ai'
import { useEditorStateValue } from '../../EditorState'
import Tooltips from '../../../../ui/Tooltips'

const AddLink = () => {
  const { editor } = useEditorStateValue()
  const [show, setShow] = useState(false)
  const [url, setUrl] = useState('')

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    setShow(true)
    setUrl(previousUrl)
  }, [editor])

  const handleClick = () => {
    // cancelled
    if (url === null) {
      setShow(false)
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()
      setShow(false)
      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url, text: url }).run()
    setShow(false)
  }

  return (
    <>
      <Tooltips label='Copy Url'>
        <Button size='sm' variant='light' onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
          <AiOutlineLink />
        </Button>
      </Tooltips>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Copy your link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            className='mb-3'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder='URL'
          />
          <Button type='button' onClick={handleClick}>Submit</Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddLink
