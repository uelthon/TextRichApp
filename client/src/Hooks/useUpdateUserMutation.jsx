import { useMutation } from '@tanstack/react-query'

import userServices from '../services/user'

const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (variables) => userServices.update(variables),
    onSuccess: (data) => {
      const user = data.data.updateUser
      const userLocal = JSON.parse(window.localStorage.getItem('note-rich-user'))
      if (userLocal) {
        const newUserLocal = {
          ...userLocal,
          user
        }
        window.localStorage.setItem('note-rich-user', JSON.stringify(newUserLocal))
      }
    }
  })
}

export default useUpdateUserMutation
