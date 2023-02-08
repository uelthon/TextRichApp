import { useMutation, useQueryClient } from '@tanstack/react-query'
import notesServices from '../services/notes'

const useUpdateNoteMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (variables) => notesServices.update(variables),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['Notes'])
    },
    onMutate: (variables) => {
      if (variables?.pin !== undefined) {
        const notes = queryClient.getQueryData(['Notes', JSON.stringify({
          pin: !variables.pin
        })])
        if (notes && notes.rows && notes.count > 0) {
          const newNotes = {
            count: notes.count - 1,
            rows: notes.rows.filter(n => n.id !== variables.noteId)
          }
          const note = {
            ...notes.rows.find(n => n.id === variables.noteId),
            pin: variables.pin
          }
          queryClient.setQueryData(['Notes', JSON.stringify({
            pin: !variables.pin
          })], newNotes)
          queryClient.setQueryData(['Notes', JSON.stringify({
            pin: variables.pin
          })], (oldData) => ({
            count: oldData.count + 1,
            rows: [...oldData.rows, note]
          }))
        }
      }
    }
  })
}

export default useUpdateNoteMutation
