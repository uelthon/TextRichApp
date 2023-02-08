import { useQuery } from '@tanstack/react-query'
import notesServices from '../services/notes'

const useGetAllNotesQuery = ({ variables }) => {
  return useQuery({
    queryKey: ['Notes', JSON.stringify(variables)],
    queryFn: async () => {
      const data = await notesServices.getAll(variables)
      return data.data.myNotes
    },
    staleTime: Infinity,
    cacheTime: 60000
  })
}

export default useGetAllNotesQuery
