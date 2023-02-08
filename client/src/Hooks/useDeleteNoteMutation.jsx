import { useMutation, useQueryClient } from '@tanstack/react-query'
import notesServices from '../services/notes'

const useDeleteNoteMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (variables) => notesServices.deleteUserNote(variables),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['Notes'])
    }
  })
}

export default useDeleteNoteMutation
