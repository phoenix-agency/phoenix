import design from "../../assets/design.png";
import développement from "../../assets/développement.png";
import { Link } from "react-router-dom";
const DesignDeveloppement = () => {
  return (
    <div>
      <h2 className="text-secondary  text-3xl md:text-4xl text-center capitalize font-extrabold mb-16">
        Parce que les deux font la paire
      </h2>
      <div className="grid grid-flow-row gap-y-8 gap-x-16 mx-6  sm:mx-16 mb-16 md:grid-cols-2">
        <div>
          <img src={design} className="h-80 w-full mx-auto" alt="design" />
          <h3 className="text-primary text-2xl font-extrabold text-center my-6">
            Web Design
          </h3>
          <p className="text-gray-dark text-center leading-8">
            Nous allons donner vie à vos idées avec toute la créativité de notre
            pôle design. Nous vous aiderons à concevoir votre logo, votre charte
            graphique, vos images et vos infographies qui seront partagés
            partout sur le web.
          </p>
        </div>
        <div>
          <img
            src={développement}
            className="h-80 mx-auto"
            alt="développement"
          />
          <h3 className="text-primary text-2xl font-extrabold text-center my-6">
            Développement Web
          </h3>
          <p className="text-gray-dark text-center leading-8">
            Avec notre savoir-faire nous allons vous apporter un réel renfort
            technique et technologique et nous vous aiderons à concevoir la
            meilleure technologie web qui saura donner vie à votre projet.
          </p>
        </div>
      </div>
      <div className="grid grid-flow-row gap-y-8 mb-8 mx-6  sm:mx-16 gap-x-16 md:grid-flow-col">
        <Link
          to="https://prontopro.fr/"
          className="uppercase text-xl text-primary text-center hover:scale-105"
          target="_blank"
        >
          Retrouvez notre interview en cliquant sur ce lien
        </Link>
        <Link
          to="https://prontopro.fr/roubaix-agence-de-communication#pro-interview"
          className="uppercase text-xl text-primary text-center hover:scale-105"
          target="_blank"
        >
          Vous souhaitez en savoir plus sur nous ?
        </Link>
      </div>
    </div>
  );
};

export default DesignDeveloppement;
