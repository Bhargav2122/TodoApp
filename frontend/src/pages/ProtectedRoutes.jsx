import { useRecoilValue } from 'recoil'
import { userAtom } from '../atoms/userAtom'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const user = useRecoilValue(userAtom)

  return user ? children : <Navigate to="/login" replace />
}

export default ProtectedRoutes
