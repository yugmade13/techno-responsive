import api from './apiInstance';

export const getMenu = async ({ signal }) => {
  const showAll = { show_all: 1 };
  
  const res = await api.post('/api/menu', showAll, { signal });
  return res.data;
};
