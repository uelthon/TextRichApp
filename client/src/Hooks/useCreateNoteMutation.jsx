import { useMutation, useQueryClient } from '@tanstack/react-query'
import notesServices from '../services/notes'

const useCreateNoteMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (variables) => notesServices.create(variables),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['Notes'])
    }
  })
}

export default useCreateNoteMutation
