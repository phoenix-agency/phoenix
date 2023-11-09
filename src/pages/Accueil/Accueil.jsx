import NosClients from "../../components/Home/NosClients";
import Society from "./Components/Society.jsx";
import CloseToC from "./Components/CloseToC.jsx";
import Partner from "./Components/Partner.jsx";
import Responsive from "./Components/Responsive.jsx";
import NosPrestations from "../../components/Home/NosPrestations.jsx";
import SiDifferent from "./Components/SiDifferent.jsx"
import ReaAgence from "./Components/ReaAgence.jsx";

export default function Accueil() {
  return (
    <div>
      <Society />
      <CloseToC />
      <NosPrestations />
      <SiDifferent />
      <Partner />
      <Responsive />
      <ReaAgence />
      <NosClients />
    </div>
  );
}
