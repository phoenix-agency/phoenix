import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './NavbarPictures/Logo.png';
import ListePresta from './ListePresta';
import ListeContact from './ListeContact';


export default function NavBar() {
  const [showPrestaList, setShowPrestaList] = useState(false);
  const [showContactList, setShowContactList] = useState(false);

  return (
    <nav>
      <ul className="Navbar">

        <li>
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </li>

        <li>
          <Link to="/">Accueil</Link>
        </li>

        <li>
          <Link to="/presentation">Présentation</Link>
        </li>

        <li
          onMouseEnter={() => setShowPrestaList(true)}
          onMouseLeave={() => setShowPrestaList(false)}
        >
          <Link to='/prestations'>Prestations</Link>
          {showPrestaList && <ListePresta />}
        </li>

        <Link to="/realisations">Réalisations</Link>

        <li
          onMouseEnter={() => setShowContactList(true)}
          onMouseLeave={() => setShowContactList(false)}
        >
          <Link to="/contacts">Contacts</Link>
          {showContactList && <ListeContact />}
        </li>
      </ul>
    </nav>
  );
}
