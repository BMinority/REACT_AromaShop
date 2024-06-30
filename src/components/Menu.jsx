import { useState } from 'react';
import '../css/menuStyle.css';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <ul className={`menu-list ${menuOpen ? 'active' : ''}`}>
        <li><a href="#perfumes">Perfumes</a></li>
        <li><a href="#colognes">Colônias</a></li>
        <li><a href="#deodorants">Desodorantes</a></li>
        <li><a href="#gift-sets">Kits de Presente</a></li>
        <li><a href="#essential-oils">Óleos Essenciais</a></li>
        <li><a href="#scented-candles">Velas Aromáticas</a></li>
      </ul>

      <button className={`open-menu ${menuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <button className={`close-menu ${!menuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <i className="far fa-times-circle"></i>
      </button>
    </div>
  );
}

export default Menu;
