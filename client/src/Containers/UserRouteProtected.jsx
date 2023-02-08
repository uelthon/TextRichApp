import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const UserRouteProtected = () => {
  if (!window.localStorage.getItem('note-rich-user')) return <Navigate to='/' />

  return <Outlet />
}

export default UserRouteProtected
