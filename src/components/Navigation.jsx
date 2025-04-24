import { Link } from 'react-router';
import homeImage from '../assets/home.png';
import menuImage from '../assets/Menu.svg';

function Navigation() {
  return (
    <nav className="fixed bottom-0 w-full z-2">
      <div className="w-full max-w-md mx-auto p-4 bg-white flex justify-evenly items-center rounded-t-xl shadow-lg">
        <Link to="/home">
          <img src={homeImage} alt="home" />
        </Link>
        <Link to="/menu">
          <img src={menuImage} alt="menu" />
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
