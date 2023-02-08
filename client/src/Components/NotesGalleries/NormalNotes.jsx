import React from 'react'
import Loader from '../Loader'
import NotesGallery from '../../ui/NotesGallery'
import useGetAllNotesQuery from '../../Hooks/useGetAllNotesQuery'

const NormalNotes = () => {
  const { data, error, isLoading } = useGetAllNotesQuery({
    variables: {
      pin: false
    }
  })
  if (isLoading) return <Loader height='25vh' />
  if (error) return <p>{error.message}</p>
  return (
    <div>
      <NotesGallery
        notes={data.rows}
        emptyMessage='Your notes will appear here'
      />
    </div>
  )
}

export default NormalNotes
