import NosClients from "../../components/Home/NosClients";
import Society from "./Components/Society.jsx";
import CloseToC from "./Components/CloseToC.jsx";
import SiDifferent from "./Components/SiDifferent.jsx"
import ReaAgence from "./Components/ReaAgence.jsx";

export default function Accueil() {
  return (
    <div>
      <Society />
      <CloseToC />
      <SiDifferent />
      <ReaAgence />
      <NosClients />
    </div>
  );
}
