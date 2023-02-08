import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import Dropdown from 'react-bootstrap/Dropdown'
import { setToken } from '../../../../services/api'
import { useUserStore } from '../../../../stores/userStore'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
  const user = useUserStore((state) => state.value)
  const removeUser = useUserStore((state) => state.remove)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  if (!user) return null

  const handleClick = () => {
    removeUser()
    window.localStorage.removeItem('note-rich-user')
    setToken('')
    queryClient.clear()
    navigate('/')
  }

  return (
    <Dropdown.Item onClick={handleClick}>
      Log out
    </Dropdown.Item>
  )
}

export default LogOut
