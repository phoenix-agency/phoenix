import NosClients from "../../components/Home/NosClients";
import Society from "./Components/Society.jsx";
import CloseToC from "./Components/CloseToC.jsx";
import SiDifferent from "./Components/SiDifferent.jsx"

export default function Accueil() {
  return (
    <div>
      <Society />
      <CloseToC />
      <SiDifferent />
      <NosClients />
    </div>
  );
}
