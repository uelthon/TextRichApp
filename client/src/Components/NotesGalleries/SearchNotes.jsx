import React from 'react'
import Loader from '../Loader'
import NotesGallery from '../../ui/NotesGallery'
import useGetAllNotesQuery from '../../Hooks/useGetAllNotesQuery'

const SearchNotes = ({ keyword }) => {
  const { data, error, isLoading } = useGetAllNotesQuery({
    variables: {
      search: keyword
    }
  })

  if (!keyword) return null
  if (isLoading) return <Loader height='50vh' />
  if (error) return <p>{error.message}</p>

  return (
    <div>
      <NotesGallery
        notes={data.rows}
        emptyMessage={`There are no results for the search ${keyword}`}
      />
    </div>
  )
}

export default SearchNotes
