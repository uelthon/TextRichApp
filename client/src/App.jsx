import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar'
import Panel from './Components/Panel'
import UserLocalProvider from './Containers/UserLocalProvider'
import UserRouteProtected from './Containers/UserRouteProtected'
import HomeProtected from './Containers/HomeProtected'
import SuspenseHook from './Containers/SuspenseHook'
import Footer from './Components/Footer'

const Notes = lazy(() => import('./Pages/Notes'))
const Home = lazy(() => import('./Pages/Home'))
const Tag = lazy(() => import('./Pages/Tag'))
const Search = lazy(() => import('./Pages/Search'))

const App = () => {
  return (
    <>
      <UserLocalProvider>
        <NavBar />
        <Panel />
        <div style={{ marginTop: '58px' }}>
          <Routes>
            <Route element={<HomeProtected />}>
              <Route path='/' element={<SuspenseHook component={<Home />} />} />
            </Route>
            <Route element={<UserRouteProtected />}>
              <Route path='/notes' element={<SuspenseHook component={<Notes />} />} />
              <Route path='/tag/:id' element={<SuspenseHook component={<Tag />} />} />
              <Route path='/search/:keyword' element={<SuspenseHook component={<Search />} />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </UserLocalProvider>
    </>
  )
}

export default App
