import NosPrestations from "../../components/Prestations/NosPrestations";
import PrestationsInfo from "../../components/Prestations/PrestationsInfo";
import Prestataire from "../../components/Prestations/Prestataire";
import Mobiles from "../../components/Prestations/Mobiles";
import SavoirPlus from "../../components/Prestations/SavoirPlus";
function Prestations() {
  return (
    <div>
      <PrestationsInfo />
      <Prestataire />
      <NosPrestations />
      <Mobiles />
      <SavoirPlus />
    </div>
  );
}

export default Prestations;
