import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useUserStore } from '../../../stores/userStore'
import LogOut from './LogOut'

const Avatar = () => {
  const user = useUserStore((state) => state.value)

  if (!user) return null

  return (
    <Dropdown>
      <Dropdown.Toggle variant='primary' id='dropdown-basic'>
        {user.username}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href='#/action-1'>Perfil</Dropdown.Item>
        <LogOut />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Avatar
