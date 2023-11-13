import NosClients from "../../components/NosClients/NosClients";
import Society from "../../components/Society/Society.jsx";
import CloseToC from "../../components/CloseToC/CloseToC.jsx";
import Partner from "../../components/Partner/Partner.jsx";
import Responsive from "../../components/Responsive/Responsive.jsx";
import NosPrestations from "../../components/NosPrestations/NosPrestations.jsx";
import SiDifferent from "../../components/SiDifferent/SiDifferent.jsx";
import ReaAgence from "../../components/ReaAgence/ReaAgence.jsx";

export default function Accueil() {
  return (
    <div>
      <Society />
      <CloseToC />
      <NosPrestationsWebDigitales />
      <SiDifferent />
      <Partner />
      <Responsive />
      <NosClients />
    </div>
  );
}
