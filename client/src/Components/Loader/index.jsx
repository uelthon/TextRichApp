import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = ({ height = 'auto' }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        height
      }}
    >
      <Spinner />
    </div>
  )
}

export default Loader
