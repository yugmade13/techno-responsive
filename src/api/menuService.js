import api from './apiInstance';

export const postMenu = async ({ showAll }) => {
  const res = await api.post('/api/menu', { show_all: showAll });
  return res.data;
};
