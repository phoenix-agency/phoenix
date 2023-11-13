import NosPrestations from "../../components/NosPrestations/NosPrestations";
import PrestationsInfo from "../../components/PrestationsInfo/PrestationsInfo";
import Prestataire from "../../components/Prestataire/Prestataire";
import Mobiles from "../../components/Mobiles/Mobiles";
import SavoirPlus from "../../components/SavoirPlus/SavoirPlus";
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
