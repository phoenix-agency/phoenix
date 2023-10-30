import './App.css';
//Import Router
import { Routes, Route } from 'react-router-dom';
//Import Pages
import Accueil from './pages/Accueil/Accueil';
import Presentation from './pages/Presentation/Presentation';
import Prestations from './pages/Prestations/Prestations';
import Realisations from './pages/Realisations/Realisations';
import Contacts from './pages/Contact/Contacts';
//Import Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/presentation' element={<Presentation />} />
        <Route path='/prestations' element={<Prestations />} />
        <Route path='/realisations' element={<Realisations />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
