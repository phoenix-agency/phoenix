import Philosophie from "../../components/Philosophie/Philosophie";
import DesignDeveloppement from "../../components/DesignDeveloppement/DesignDeveloppement";
import Mission from "../../components/Mission/Mission";
export default function Presentation() {
  return (
    <div>
      <Philosophie />
      <Mission />
      <DesignDeveloppement />
    </div>
  );
}
