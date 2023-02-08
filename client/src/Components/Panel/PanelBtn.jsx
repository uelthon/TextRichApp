import React from 'react'
import { Button } from 'react-bootstrap'
import { FiMenu } from 'react-icons/fi'
import { usePanelStore } from '../../stores/usePanelStore'
import { useUserStore } from '../../stores/userStore'

const PanelBtn = () => {
  const toggle = usePanelStore((state) => state.toggle)
  const user = useUserStore((state) => state.value)
  if (!user) return null
  return (
    <Button className='ms-3' onClick={() => toggle()}>
      <FiMenu size='1.375rem' />
    </Button>
  )
}

export default PanelBtn
