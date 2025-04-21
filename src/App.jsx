import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
