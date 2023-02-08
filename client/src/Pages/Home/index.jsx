import React from 'react'
import { Button } from 'react-bootstrap'

import { useSigninToggle } from '../../stores/useSigninToggle'
import styles from './Home.module.css'

const Home = () => {
  const setShowSignin = useSigninToggle((state) => state.toggle)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className='display-3'>Welcome to the Note App!</h1>
        <p className='lead'>Keep all of your notes organized in one place.</p>
        <hr className='my-2' />
        <p>With this app, you can easily create, edit, and delete notes to stay on top of your tasks and thoughts.</p>
        <p className='lead'>
          <Button
            onClick={() => setShowSignin(true)}
            variant='primary'
          >Get Started
          </Button>
        </p>
      </div>
    </div>
  )
}

export default Home
