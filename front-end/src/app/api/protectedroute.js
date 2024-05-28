import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state.auth);

  // show unauthorized screen if no user is found in redux store
  if (!user) {
    toast.error('Please sign in to access this page');
    return <Navigate to='/signin' />;
  }

  // returns child route elements
  return <Outlet />;
};
export default ProtectedRoute;
