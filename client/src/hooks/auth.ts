/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useEffect } from 'react'
import axios from '../lib/axios'

interface User {
  email_verified_at?: string;
  // Add other user fields
}

interface ErrorType {
  [key: string]: string[];
}

interface RegisterProps {
  setErrors: (errors: ErrorType) => void;
  // Add other props
}

interface LoginProps {
  setErrors: (errors: ErrorType) => void;
  setStatus: (status: string | null) => void;
  // Add other props
}

interface ForgotPasswordProps {
  setErrors: (errors: ErrorType) => void;
  setStatus: (status: string | null) => void;
  email: string;
}

interface ResetPasswordProps {
  setErrors: (errors: ErrorType) => void;
  setStatus: (status: string | null) => void;
  // Add other props
}

interface ResendEmailVerificationProps {
  setStatus: (status: string) => void;
}

interface UseAuthProps {
  middleware?: string;
  redirectIfAuthenticated?: string;
}

const useAuth = ({
  middleware,
  redirectIfAuthenticated
}: UseAuthProps = {}) => {
  const router = useRouter()

  const { data: user, error, mutate } = useSWR<User>('/api/user', () =>
    axios
      .get('/api/user')
      .then(res => res.data)
      .catch(err => {
        if (err.response.status !== 409) throw err
        router.push('/verify-email')
      })
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, ...props }: RegisterProps) => {
    await csrf()
    setErrors({})
    // Implementation
  }

  const login = async ({ setErrors, setStatus, ...props }: LoginProps) => {
    await csrf()
    setErrors({})
    setStatus(null)
    // Implementation
  }

  const forgotPassword = async ({
    setErrors,
    setStatus,
    email
  }: ForgotPasswordProps) => {
    await csrf()
    setErrors({})
    setStatus(null)
    // Implementation
  }

  const resetPassword = async ({ setErrors, setStatus, ...props }: ResetPasswordProps) => {
    await csrf()
    setErrors({})
    setStatus(null)
    // Implementation
  }

  const resendEmailVerification = ({ setStatus }: ResendEmailVerificationProps) => {
    // Implementation
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }
    window.location.pathname = '/login'
  }

  useEffect(() => {
    // Your existing useEffect logic
  }, [user, error])

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout
  }
}

export default useAuth
