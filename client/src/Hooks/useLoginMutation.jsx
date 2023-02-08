import { useMutation } from '@tanstack/react-query'

import { useUserStore } from '../stores/userStore'
import { setToken } from '../services/api'
import login from '../services/login'

const useLoginMutation = () => {
  const add = useUserStore((state) => state.add)

  return useMutation({
    mutationFn: (varibles) => login(varibles),
    onSuccess: (data) => {
      add(data.data.login.user)
      setToken(data.data.login.token)
      window.localStorage.setItem('note-rich-user', JSON.stringify(data.data.login))
    }
  })
}

export default useLoginMutation
