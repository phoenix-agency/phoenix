import NosPrestations from "../../components/Prestations/NosPrestations";
import PrestationsInfo from "../../components/Prestations/PrestationsInfo";
import Prestataire from "../../components/Prestations/Prestataire";
import Mobiles from "../../components/Prestations/Mobiles";
function Prestations() {
  return (
    <div>
      <PrestationsInfo />
      <Prestataire />
      <NosPrestations />
      <Mobiles />
    </div>
  );
}

export default Prestations;
