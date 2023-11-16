import Philosophie from "../../components/Philosophie/Philosophie";
import DesignDeveloppement from "../../components/DesignDeveloppement/DesignDeveloppement";
import Mission from "../../components/Mission/Mission";
import AgenceDigitale from "../../components/AgenceDigitale/AgenceDigitale";
import WebLover from "../../components/WebLover/WebLover";
export default function Presentation() {
  return (
    <div>
      <AgenceDigitale />
      <WebLover />
      <Philosophie />
      <Mission />
      <DesignDeveloppement />
    </div>
  );
}
