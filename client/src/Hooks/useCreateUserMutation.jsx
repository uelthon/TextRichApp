import { useMutation } from '@tanstack/react-query'

import userServices from '../services/user'

const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: (variables) => userServices.create(variables)
  })
}

export default useCreateUserMutation
