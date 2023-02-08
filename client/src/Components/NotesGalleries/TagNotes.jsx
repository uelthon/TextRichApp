import React from 'react'
import Loader from '../Loader'
import NotesGallery from '../../ui/NotesGallery'
import useGetAllNotesQuery from '../../Hooks/useGetAllNotesQuery'

const TagNotes = ({ tag }) => {
  const { data, error, isLoading } = useGetAllNotesQuery({
    variables: {
      tag
    }
  })

  if (!tag) return null
  if (isLoading) return <Loader height='50vh' />
  if (error) return <p>{error.message}</p>

  return (
    <div>
      <NotesGallery
        notes={data.rows}
        emptyMessage={`Your notes tagged ${tag} will appear here`}
      />

    </div>
  )
}

export default TagNotes
