import { Navigate, Outlet } from 'react-router';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/useAuth';

function Layout() {
  const { accessToken } = useAuth();

  if (!accessToken) return <Navigate to="/" />;

  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
}

export default Layout;
