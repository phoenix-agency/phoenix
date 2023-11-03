import "./App.css";
//Import Router
import { Routes, Route } from "react-router-dom";
//Import Pages
import Accueil from "./pages/Accueil/Accueil";
import Presentation from "./pages/Presentation/Presentation";
import Prestations from "./pages/Prestations/Prestations";
import Realisations from "./pages/Realisations/Realisations";
import Contacts from "./pages/Contact/Contacts";
import RendezVous from "./pages/RendezVous/RendezVous";
import Candidature from "./pages/Candidature/Candidature";
//Import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bonjour
        </a>
      </header>
    </div>
  );
}

export default App;
