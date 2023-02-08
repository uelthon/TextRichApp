import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import { useUserStore } from '../../../stores/userStore'
import styles from './SearchBar.module.css'

let timer = null

const SearchBar = () => {
  const [show, setShow] = useState(false)
  const user = useUserStore((state) => state.value)
  const navigate = useNavigate()

  if (!user) return null

  const handleClick = () => {
    setShow(!show)
  }
  const handleChange = (e) => {
    e.preventDefault()
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      if (e.target.value.length === 0) return navigate('/notes')
      navigate(`/search/${e.target.value}`)
    }, 500)
  }
  return (
    <>
      <div onClick={handleClick} className={`${styles.container} ${show ? styles.show : ''}`}>
        <Form.Control
          placeholder='Search'
          type='text'
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <div onClick={handleClick} className={styles.searchIcon}>
        <AiOutlineSearch size='1.5rem' color='#f2f2f2' />
      </div>
    </>
  )
}

export default SearchBar
