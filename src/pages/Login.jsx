import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/useAuth';
import { Navigate, useNavigate } from 'react-router';

import logoTechno from '../assets/logo-techno.png';
import { useState } from 'react';

const Login = () => {
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const { login, accessToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await login(data);
      if (res.access_token) {
        navigate('/home');
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (accessToken) return <Navigate to="/home" />;

  return (
    <div className="min-h-screen flex flex-col justify-start items-center">
      <div className="mb-46 mt-24">
        <img src={logoTechno} alt="logo techno" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
        <div className="mb-6">
          <label className="block text-sm mb-1 text-center">Username</label>
          <input
            type="username"
            placeholder="Username"
            className="w-[300px] px-3 py-2 rounded-lg bg-white shadow-2xl"
            {...register('username', {
              required: 'Username wajib diisi',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Format username tidak valid',
              },
            })}
          />
          {errors.username && (
            <p className="text-sm text-red-600 mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="mb-8">
          <label className="block text-sm mb-1 text-center">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-[300px] px-3 py-2 rounded-lg bg-white shadow-2xl"
            {...register('password', {
              required: 'Password wajib diisi',
              minLength: {
                value: 6,
                message: 'Password minimal 6 karakter',
              },
            })}
          />
          {errors.password && (
            <p className="text-sm text-red-600 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-[200px] py-2 rounded-lg bg-white shadow-2xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Login'}
          </button>
        </div>
        {message && (
          <div className="text-center text-red-500 mt-4">{message}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
