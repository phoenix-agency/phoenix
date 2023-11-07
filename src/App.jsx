//Import Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import Pages
import Accueil from "./pages/Accueil/Accueil";
import Presentation from "./pages/Presentation/Presentation";
import Prestations from "./pages/Prestations/Prestations";
import Realisations from "./pages/Realisations/Realisations";
import Contacts from "./pages/Contact/Contacts";
import RendezVous from "./pages/RendezVous/RendezVous";
import Candidature from "./pages/Candidature/Candidature";
//Import Components
<<<<<<< HEAD
import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import PrestationsInfo from './pages/PrestationsInfo/PrestationsInfo';

function App() {
	return (
		<>
			<BrowserRouter basename='/'>
				<Header />
				<NavBar />
				<Routes>
					<Route path='/' element={<Accueil />} />
					<Route path='/presentation' element={<Presentation />} />
					<Route path='/prestations' element={<Prestations />} />
					<Route path='/realisations' element={<Realisations />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/rendezvous' element={<RendezVous />} />
					<Route path='/candidature' element={<Candidature />} />
					<Route path='/prestataire' element={<Prestataire />} />
					<Route path='/prestations-info' element={<PrestationsInfo />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</>
	);
=======
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/rendezvous" element={<RendezVous />} />
          <Route path="/candidature" element={<Candidature />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
>>>>>>> 37f53673719b44a14ecba2dfb5ca12e3d79c8028
}

export default App;
