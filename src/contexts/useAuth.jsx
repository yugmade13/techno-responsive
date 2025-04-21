import { createContext, useContext, useState, useMemo } from 'react';
import api from '../api/apiInstance';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken') || null
  );

  const login = async (username, password) => {
    try {
      const res = await api.post('/oauth/token', { username, password });      

      localStorage.setItem('accessToken', res.data.access_token);
      setAccessToken(res.data.access_token);

      return res.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const authContextValue = useMemo(() => {
    return {
      accessToken,
      login,
    };
  }, [accessToken]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
