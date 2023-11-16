import rocket from "../../assets/rocket.png";
import Arrow from "../../assets/svg/Arrow";
const Mission = () => {
  return (
    <div className="grid grid-flow-row">
      <img src={rocket} alt="Fusée" />
      <div className="grid grid-flow-row">
        <h3 className="text-gray-dark text-center">
          VOTRE RÊVE. NOTRE MISSION.
        </h3>
        <h2 className="text-4xl font-extrabold text-secondary text-center">
          Confiez Nous Votre Projet, Nous Ferons De Votre Rêve Une Réalité.
        </h2>
        <p className="text-gray-dark text-center">
          Nous savons à quel point votre projet vous est cher ; c&apos;est
          pourquoi nous mettrons en place un véritable renfort technique et
          technologique pour la réalisation de ce dernier. Nous aimons les défis
          et le travail acharné alors qu&apos;attendez-vous pour nous proposer
          votre projet ?
        </p>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <span className="mr-2">Nos prestations</span>
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default Mission;
