import React from 'react'
import Card from 'react-bootstrap/Card'
import background from '../assets'
import DeleteNote from '../Components/DeleteNote'
import PinNote from '../Components/PinNote'
import styles from './Cards.module.css'

const Cards = ({ note }) => {
  function getMarkup () {
    return { __html: note.content } // The HTML string you want to set
  }

  const color = note.color && !note.background
    ? {
        backgroundColor: note.color
      }
    : null

  const image = note.background
    ? {
        backgroundImage: `url(${background[note.background]})`,
        backgroundAttachment: 'scroll',
        backgroundOrigin: 'padding-box',
        backgroundClip: 'border-box',
        backgroundPositionX: 'right',
        backgroundPositionY: 'bottom',
        backgroundSize: 'cover'
      }
    : null

  return (
    <Card
      className={styles.cardContainer}
      style={{
        position: 'relative',
        boxShadow: '0 3px 5px rgba(0,0,0,.30)',
        ...color,
        ...image
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={`${styles.overlay}`}>
        <DeleteNote noteId={note.id} />
        <PinNote noteId={note.id} pin={note.pin} />
      </div>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <div className={styles.content} dangerouslySetInnerHTML={getMarkup()} />
      </Card.Body>
    </Card>
  )
}

export default Cards
