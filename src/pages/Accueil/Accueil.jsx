import NosClients from "../../components/NosClients/NosClients";
import Society from "./Components/Society.jsx";
import CloseToC from "./Components/CloseToC.jsx";
import Partner from "./Components/Partner.jsx";
import Responsive from "./Components/Responsive.jsx";
import NosPrestationsWebDigitales from "../../components/NosPrestationsPageAccueil/NosPrestationsWebDigitales.jsx";
import SiDifferent from "./Components/SiDifferent.jsx";
import ReaAgence from "./Components/ReaAgence.jsx";

export default function Accueil() {
  return (
    <div>
      <Society />
      <CloseToC />
      <NosPrestationsWebDigitales />
      <SiDifferent />
      <Partner />
      <Responsive />
      <ReaAgence />
      <NosClients />
    </div>
  );
}
