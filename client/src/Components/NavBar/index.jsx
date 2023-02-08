import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import Login from './Login'
import Signin from './Signin'

import styles from './NavBar.module.css'
import Avatar from './Avatar'
import PanelBtn from '../Panel/PanelBtn'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' fixed='top'>
      <PanelBtn />
      <Container>
        <Navbar.Brand>TextRichNotes</Navbar.Brand>
        <SearchBar />
        <div className={styles.navbarActions}>
          <Login />
          <Signin />
          <Avatar />
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar
