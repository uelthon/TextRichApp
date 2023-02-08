import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { FiLogIn } from 'react-icons/fi'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import Modals from '../../../ui/Modals'
import useLoginMutation from '../../../Hooks/useLoginMutation'
import { useUserStore } from '../../../stores/userStore'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [show, setShow] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const user = useUserStore((state) => state.value)
  const { isLoading, error, mutate: loginUser } = useLoginMutation()
  const navigate = useNavigate()

  if (user) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = e.target
    loginUser({
      username: username.value,
      password: password.value
    }, {
      onSuccess: () => {
        setShow(false)
        navigate('/notes')
      }
    }
    )
  }

  return (
    <Modals btnLabel={<span>Login <FiLogIn /></span>} title='Login' {...{ show, setShow }}>
      <Form onSubmit={handleSubmit}>
        {error && <p className='mb-3 text-danger'>{error.message}</p>}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Enter username' name='username' required />
          <Form.Text className='text-muted'>
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-1' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type={!showPassword ? 'password' : 'text'} placeholder='Password' name='password' required />
        </Form.Group>
        <Button size='sm' className='mb-3' onClick={() => setShowPassword(!showPassword)}>
          {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </Button><br />
        <Button variant='primary' type='submit' disabled={isLoading}>
          {!isLoading ? 'Submit' : <Spinner size='sm' />}
        </Button>
      </Form>
    </Modals>
  )
}

export default Login
