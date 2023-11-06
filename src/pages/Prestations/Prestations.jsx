import NosPrestations from "../../components/Prestations/NosPrestations";
import PrestationsInfo from "../../components/Prestations/PrestationsInfo";
import Prestataire from "../../components/Prestations/Prestataire";
function Prestations() {
  return (
    <div>
      <PrestationsInfo />
      <Prestataire />
      <NosPrestations />
    </div>
  );
}

export default Prestations;
