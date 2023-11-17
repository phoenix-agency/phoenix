import marketingMediasSociaux from "../../assets/marketingMediasSociaux.png";
import Button3 from "../Button/Button3";
const PrestationQuiVousInteresse = () => {
  return (
    <div className=" lg:hidden">
      <h3 className="text-secondary text-3xl text-center">
        Choisissez la prestation qui vous intéresse
      </h3>
      <div className="grid grid-flow-row md:grid-cols-3">
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 pb-0 mx-auto block h-auto w-full"
            alt=""
          />
          <div className="bg-gray-100 mx-2 mb-2">
            <h2 className="text-secondary text-2xl text-center">
              Création de site internet WordPress
            </h2>
            <p className="text-gray-dark text-center">
              Wordpress est un outil puissant qui vous permettra
              d&apos;administrer simplement votre site internet.
            </p>
            <Button3 link="#" />
          </div>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Création de site internet E-commerce
          </h2>
          <p className="text-gray-dark text-center">
            Vous souhaitez lancer votre business en ligne ? Nous avons ce
            qu&apos;il vous faut.
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Refonte de site internet
          </h2>
          <p className="text-gray-dark text-center">
            Votre site internet peine à être visible sur internet ? Il rame ou
            il est truffé de bogue et de virus ? Nous vous accompagnerons pour
            la refonte de ce dernier.
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Développement Web
          </h2>
          <p className="text-gray-dark text-center">
            Vous recherchez une agence web pour développer votre projet ?
            Découvrez nos compétences.
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Marketing Mobile & Responsive Design
          </h2>
          <p className="text-gray-dark text-center">
            Nos outils sont optimisés à la navigations mobile ( création de
            sites web responsive design et plus encore)
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Référencement Naturel SEO
          </h2>
          <p className="text-gray-dark text-center">
            Votre entreprise est invisible sur internet ? C&apos;est sans doute
            un problème de référencement naturel. Nous avons des forfaits
            adaptables à vos besoin
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Marketing des Médias Sociaux
          </h2>
          <p className="text-gray-dark text-center">
            Besoin d&apos;une agence webmarketing pour lancer votre entreprise
            sur internet par le biais des réseaux sociaux ?
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Gestion des Campagnes Publicitaires - SEA
          </h2>
          <p className="text-gray-dark text-center">
            Vous souhaitez rapidement faire connaitre votre entreprise ou votre
            produit sur internet ? Nous lançons pour vous la ou les campagnes
            publicitaires (Référencement payant SEA)
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Hébergement Web & Maintenance
          </h2>
          <p className="text-gray-dark text-center">
            Vous avez besoin d&apos;une infogérance, d&apos;une maintenance ou
            d&apos;un hébergement web ? Nous sommes là pour vous.
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Mise en conformité au RGPD
          </h2>
          <p className="text-gray-dark text-center">
            Vous avez besoin de rendre conforme votre site internet, votre
            portail, votre plateforme web etc.. Découvrez notre offres de 300 HT
            / ans pour la mise en conformité au RGPD pas de coûts cachés.
          </p>
        </div>
        <div className="border border-gray-200 m-4 ">
          <img
            src={marketingMediasSociaux}
            className="p-2 mx-auto block h-auto w-full"
            alt=""
          />
          <h2 className="text-secondary text-2xl text-center">
            Audit Parc Informatique
          </h2>
          <p className="text-gray-dark text-center">
            Votre parc informatique est vieillissant, il tombe souvent en panne
            ou il est tombé en panne, découvrez notre devis interactif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrestationQuiVousInteresse;
