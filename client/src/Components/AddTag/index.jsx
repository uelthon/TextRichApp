import React from 'react'
import Form from 'react-bootstrap/Form'
import useUpdateUserMutation from '../../Hooks/useUpdateUserMutation'
import { usePanelStore } from '../../stores/usePanelStore'
import { useUserStore } from '../../stores/userStore'

const AddTag = () => {
  const show = usePanelStore((state) => state.value)
  const user = useUserStore((state) => state.value)
  const addTag = useUserStore((state) => state.addTag)
  const { mutate: updateUser } = useUpdateUserMutation()

  if (!show) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const { tag } = e.target
    if (user.myTags.includes(tag.value)) {
      return console.log('error')
    }
    updateUser({
      userId: user.id,
      myTags: [...user.myTags, tag.value]
    })
    addTag(tag.value)
  }

  return (
    <Form
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr'
      }}
      onSubmit={handleSubmit}
    >
      <Form.Control
        placeholder='Add Tag'
        maxLength={10}
        minLength={3}
        size='sm'
        style={{
          border: 'none'
        }}
        name='tag'
        required
      />
    </Form>
  )
}

export default AddTag
