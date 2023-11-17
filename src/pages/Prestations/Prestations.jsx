import NosPrestations from "../../components/NosPrestations/NosPrestations";
import PrestationsInfo from "../../components/PrestationsInfo/PrestationsInfo";
import Prestataire from "../../components/Prestataire/Prestataire";
import Mobiles from "../../components/Mobiles/Mobiles";
import SavoirPlus from "../../components/SavoirPlus/SavoirPlus";
import PrestationQuiVousInteresse from "../../components/PrestationQuiVousInteresse/PrestationQuiVousInteresse";
function Prestations() {
  return (
    <div>
      <PrestationsInfo />
      <Prestataire />
      <PrestationQuiVousInteresse />
      <NosPrestations />
      <Mobiles />
      <SavoirPlus />
    </div>
  );
}

export default Prestations;
