import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from './NavbarPictures/LogoBlanc.png';
import ListePresta from './ListePresta';
import ListeContact from './ListeContact';


export default function NavBar() {
  const [showPrestaList, setShowPrestaList] = useState(false);
  const [showContactList, setShowContactList] = useState(false);

  return (
    <nav>
      <div className="Navbar">
        <Link to="/"><img src={Logo} alt="logo" className='Logo' /></Link> 
        <Link to="/">Accueil</Link>
        <Link to="/presentation">Présentation</Link>
        <Link to='/prestations' onMouseEnter={() => setShowPrestaList(true)}
          onMouseLeave={() => setShowPrestaList(false)}>Prestations
          {showPrestaList && <ListePresta />}
        </Link>
        <Link to="/realisations">Réalisations</Link>
        <Link to="/contacts" onMouseEnter={() => setShowContactList(true)}
        onMouseLeave={() => setShowContactList(false)}>Contacts
        {showContactList && <ListeContact />}
        </Link>       
      </div>
    </nav>
  );
}
