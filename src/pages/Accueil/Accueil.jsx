import NosClients from "../../components/Home/NosClients";
import Society from "./Components/Society.jsx";
import CloseToC from "./Components/CloseToC.jsx";
import Partner from "./Components/Partner.jsx";
import Responsive from "./Components/Responsive.jsx";
import NosPrestations from "../../components/Home/NosPrestations.jsx";

export default function Accueil() {
  return (
    <div>
      <Society />
      <CloseToC />
      <NosPrestations />
      <Partner />
      <Responsive />
      <NosClients />
    </div>
  );
}
