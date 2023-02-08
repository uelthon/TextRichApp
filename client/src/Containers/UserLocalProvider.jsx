import React, { useEffect } from 'react'
import { setToken } from '../services/api'
import { useUserStore } from '../stores/userStore'

const UserLocalProvider = ({ children }) => {
  const add = useUserStore((state) => state.add)

  useEffect(() => {
    const auth = JSON.parse(window.localStorage.getItem('note-rich-user'))
    if (auth) {
      add(auth.user)
      setToken(auth.token)
    }
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default UserLocalProvider
