import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./../../assets/LogoBlanc.png";
import ListePresta from "./ListePresta";
import ListeContact from "./ListeContact";
import Loupe from "./../../assets/svg/Loupe";
import Research from "./../../components/Research/Research";

export default function NavBar() {
  const [showPrestaList, setShowPrestaList] = useState(false);
  const [showContactList, setShowContactList] = useState(false);
  const [showResearch, setShowResearch] = useState(false);

  const handleLoupeClick = () => {
    setShowResearch(true);
  };

  return (
    <nav>
      <div className="Navbar">
        <Link to="/">
          <img src={Logo} alt="logo" className="Logo" />
        </Link>
        <Link to="/">Accueil</Link>
        <Link to="/presentation">Qui sommes-nous</Link>
        <Link
          to="/prestations"
          onMouseEnter={() => setShowPrestaList(true)}
          onMouseLeave={() => setShowPrestaList(false)}
        >
          Prestations
          {showPrestaList && <ListePresta />}
        </Link>
        <Link to="https://projet-wal.fr/">Réalisations</Link>
        <Link
          to="/contacts"
          onMouseEnter={() => setShowContactList(true)}
          onMouseLeave={() => setShowContactList(false)}
        >
          Contacts
          {showContactList && <ListeContact />}
        </Link>
        <div className="Loupe" onClick={handleLoupeClick}>
          <Loupe />
        </div>
        {showResearch && <Research />}
      </div>
    </nav>
  );
}
