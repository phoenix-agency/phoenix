import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Presentation from './pages/Presentation';
import Prestations from './pages/Prestations';
import Relalisations from './pages/Relalisations';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/presentation' element={<Presentation />} />
        <Route path='/prestations' element={<Prestations />} />
        <Route path='/relalisations' element={<Relalisations />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>

    </div>
  );
}

export default App;
