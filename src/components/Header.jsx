import logoTechno from '../assets/logo-techno.png';

function Header() {
  return (
    <div className="p-4 bg-white w-full max-w-md mx-auto shadow-md">
      <img src={logoTechno} alt="header techno" width={150} />
    </div>
  );
}

export default Header;
