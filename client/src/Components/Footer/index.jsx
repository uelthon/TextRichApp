import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'

function Footer () {
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll () {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      setShowFooter(true)
    } else {
      setShowFooter(false)
    }
  }

  return (
    <>{
      showFooter &&
      (
        <Navbar bg='primary' variant='dark' fixed='bottom'>
          <Container>
            <Row>
              <Col>
                <Nav className='justify-content-center'>
                  <Nav.Link href='#'>Contact</Nav.Link>
                  <Nav.Link href='#'>About</Nav.Link>
                  <Nav.Link href='#'>FAQ</Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
      )
}
    </>

  )
}

export default Footer
