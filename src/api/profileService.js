import api from './apiInstance';

export const getMyProfile = async () => {
  const res = await api.get('/api/home');
  return res.data;
};
