import React from 'react'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'

const Links = ({ label, href }) => {
  return (
    <LinkContainer to={href}>
      <Button>{label}</Button>
    </LinkContainer>
  )
}

export default Links
