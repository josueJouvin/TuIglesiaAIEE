import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../stores/auth.store';

const ProtectedRoute = () => {
  const user = useUserStore(state => state.user);

  if (!user) {
    return <Navigate to="/login"/>;
  }

  return <Outlet />;
};

export default ProtectedRoute;