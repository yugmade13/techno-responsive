import api from './apiInstance';

export const getMyProfile = async ({ signal }) => {
  const res = await api.get('/api/home', { signal });
  return res.data;
};
