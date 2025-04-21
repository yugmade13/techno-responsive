import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/useAuth';

import logoTechno from '../assets/logo-techno.png';

const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center">
      <div className="mb-46 mt-24">
        <img src={logoTechno} alt="logo techno" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
        <div className="mb-6">
          <label className="block text-sm mb-1 text-center">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-[300px] px-3 py-2 rounded-lg bg-white shadow-2xl"
            {...register('email', {
              required: 'Email wajib diisi',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Format email tidak valid',
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
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
      </form>
    </div>
  );
};

export default Login;
