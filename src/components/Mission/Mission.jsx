import rocket from "../../assets/rocket.png";
import Arrow from "../../assets/svg/Arrow";
import { Link } from "react-router-dom";
const Mission = () => {
  return (
    <div className="mx-4 lg:mx-10 xl:mx-28 2xl:mx-56 my-32 grid grid-flow-row gap-y-4 gap-x-16 lg:grid-flow-col">
      <img src={rocket} className="mx-auto " alt="Fusée" />
      <div className="grid grid-flow-row gap-2">
        <h3 className="text-lg text-gray-dark text-center lg:text-left">
          VOTRE RÊVE. NOTRE MISSION.
        </h3>
        <h2 className="text-2xl font-extrabold text-secondary text-center lg:text-left md:text-3xl lg:text-4xl">
          Confiez Nous Votre Projet, Nous Ferons De Votre Rêve Une Réalité.
        </h2>
        <p className="text-gray-dark text-left leading-8">
          Nous savons à quel point votre projet vous est cher ; c&apos;est
          pourquoi nous mettrons en place un véritable renfort technique et
          technologique pour la réalisation de ce dernier.
        </p>
        <p className="text-gray-dark text-left leading-8">
          Nous aimons les défis et le travail acharné alors
          qu&apos;attendez-vous pour nous proposer votre projet ?
        </p>
        <div className="mx-auto mt-4 lg:mx-0">
          <Link to="/prestations">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <span className="mr-2">Nos prestations</span>
              <Arrow />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mission;
