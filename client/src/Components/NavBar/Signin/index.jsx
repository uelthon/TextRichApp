import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { VscSignIn } from 'react-icons/vsc'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import Modals from '../../../ui/Modals'
import { useUserStore } from '../../../stores/userStore'
import useCreateUserMutation from '../../../Hooks/useCreateUserMutation'
import useLoginMutation from '../../../Hooks/useLoginMutation'
import Spinner from 'react-bootstrap/Spinner'
import { useNavigate } from 'react-router-dom'
import { useSigninToggle } from '../../../stores/useSigninToggle'

const Signin = () => {
  const { show, setShow } = useSigninToggle((state) => ({
    show: state.value,
    setShow: state.toggle
  }))
  const [showPassword, setShowPassword] = useState(false)
  const user = useUserStore((state) => state.value)
  const { mutate: createUser, isLoading, error } = useCreateUserMutation()
  const { mutate: loginUser, isLoading: loginLoading, error: loginError } = useLoginMutation()
  const navigate = useNavigate()

  if (user) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = e.target
    createUser({
      username: username.value,
      password: password.value
    }, {
      onSuccess: () => {
        loginUser({
          username: username.value,
          password: password.value
        }, {
          onSuccess: () => {
            setShow(false)
            navigate('/notes')
          }
        })
      }
    })
  }

  return (
    <Modals btnLabel={<span>Sign In <VscSignIn /></span>} title='Sign In' {...{ show, setShow }}>
      <Form onSubmit={handleSubmit}>
        {error && <p className='mb-3 text-danger'>{error.message}</p>}
        {loginError && <p className='mb-3 text-danger'>{loginError.message}</p>}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Enter username' name='username' disabled={isLoading || loginLoading} />
          <Form.Text className='text-muted'>
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-1' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type={!showPassword ? 'password' : 'text'} placeholder='Password' name='password' disabled={isLoading || loginLoading} />
        </Form.Group>
        <Button size='sm' className='mb-3' onClick={() => setShowPassword(!showPassword)}>
          {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </Button><br />
        <Button variant='primary' type='submit' disabled={isLoading || loginLoading}>
          {!(isLoading || loginLoading) ? 'Submit' : <Spinner size='sm' />}
        </Button>
      </Form>
    </Modals>
  )
}

export default Signin
