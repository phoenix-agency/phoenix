import NosClients from "../../components/Home/NosClients";
import Society from "./Components/Society.jsx";
import CloseToC from "./Components/CloseToC.jsx";
import Partner from "./Components/Partner.jsx";
import Responsive from "./Components/Responsive.jsx";

export default function Accueil() {
  return (
    <div>
      <Society />
      <CloseToC />
      <Partner />
      <Responsive />
      <NosClients />
    </div>
  );
}
