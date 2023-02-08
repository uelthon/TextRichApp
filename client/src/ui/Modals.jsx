import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import styles from './Modals.module.css'

export const ModalEditor = ({ children, btnLabel }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div
        onClick={() => setShow(true)}
        className={`${styles.mansoryItem} ${!show ? styles.show : ''}`}
      >
        {btnLabel}
      </div>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className={styles.bodyMansory}>
          {children}
        </Modal.Body>
      </Modal>
    </>
  )
}

const Modals = ({ children, show, setShow, btnLabel, title }) => {
  return (
    <>
      <OverlayTrigger
        placement='bottom'
        overlay={
          <Tooltip>
            {title}
          </Tooltip>
        }
      >
        <Button size='sm' variant='light' onClick={() => setShow(true)}>
          {btnLabel}
        </Button>
      </OverlayTrigger>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Modals
