import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const HomeProtected = () => {
  if (window.localStorage.getItem('note-rich-user')) return <Navigate to='/notes' />

  return <Outlet />
}

export default HomeProtected
