import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BiImageAdd } from 'react-icons/bi'
import styles from './ImageUp.module.css'
import supabase from '../../../../services/supabase'
import Modals from '../../../../ui/Modals'
import { useEditorStateValue } from '../../EditorState'
import Spinner from 'react-bootstrap/Spinner'

const ImageUp = () => {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('')
  const [imgs, setImgs] = useState(null)
  const [img, setImg] = useState(null)
  const [loading, setLoading] = useState(false)
  const { editor } = useEditorStateValue()

  const handleChange = (e) => {
    e.preventDefault()
    setImgs(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0])
    setImg(url)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (imgs) {
      const { data, error } = await supabase.storage
        .from('images')
        .upload('public/' + title + imgs.name, imgs)
      if (data) {
        const url = `https://ajukivxzgclzxkwneebs.supabase.co/storage/v1/object/public/images/${data.path}`
        editor.chain().focus().setImage({ src: url }).run()
        setShow(false)
        setTitle('')
        setImgs(null)
        setImg(null)
      } else {
        console.log(error)
      }
    }
    setLoading(false)
  }

  return (
    <Modals show={show} setShow={setShow} btnLabel={<BiImageAdd />} title='Upload'>
      <form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Images title</Form.Label>
          <Form.Control type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Select your local image</Form.Label>
          <Form.Control type='file' onChange={handleChange} accept='image/png, image/jpeg' required />
        </Form.Group>
        {img &&
          <div className={styles.containerImg}>
            <img src={img} />
          </div>}
        <Button type='submit' disabled={!imgs || !title || loading}>
          {!loading ? 'Submit' : <Spinner size='sm' />}
        </Button>
      </form>
    </Modals>
  )
}

export default ImageUp
