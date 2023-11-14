import NosClients from "../../components/NosClients/NosClients";
import Society from "../../components/Society/Society.jsx";
import CloseToC from "../../components/CloseToC/CloseToC.jsx";
import Partner from "../../components/Partner/Partner.jsx";
import Responsive from "../../components/Responsive/Responsive.jsx";
import NosPrestationsWebDigitales from "../../components/NosPrestationsPageAccueil/NosPrestationsWebDigitales.jsx";
import SiDifferent from "../../components/SiDifferent/SiDifferent.jsx";
import ReaAgence from "../../components/ReaAgence/ReaAgence.jsx";
import NosAvis from "../../components/NosAvis/NosAvis.jsx";

export default function Accueil() {
  return (
    <div>
      <Society />
      <CloseToC />
      <NosPrestationsWebDigitales />
      <SiDifferent />
      <ReaAgence />
      <Partner />
      <Responsive />
      <NosClients />
      <NosAvis />
    </div>
  );
}
