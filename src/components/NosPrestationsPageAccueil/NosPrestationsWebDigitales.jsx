import conception from "../../assets/conception.png";
import developpement from "../../assets/developpement.png";
import referencement from "../../assets/referencement.png";
import marketing from "../../assets/marketing.png";
import Button from "../Button/Button";
const NosPrestationsWebDigitales = () => {
  return (
    <div>
      <h2 className="mt-16 capitalize text-center font-bold text-secondary text-5xl">
        Nos prestations web et digitales
      </h2>
      <p className="mx-72 text-center text-gray-dark my-4">
        Nous offrons un éventail varié de services en web marketing, en
        développement web et marketing numérique (E-commerce). Nos prestations
        englobent le référencement (SEO-SEA), la conception de site internet, le
        marketing des réseaux sociaux (Social Média Marketing) et bien plus
        encore.
      </p>
      <div className="text-center mx-6 pt-9 grid grid-flow-row gap-8 md:grid-cols-2">
        <div className="p-14 border border-gray-200 grid grid-flow-row justify-items-center hover:border-primary duration-300">
          <img
            className="h-52 hover:scale-105 duration-200"
            src={conception}
            alt="Conception"
          />
          <h3 className="text-2xl uppercase text-secondary font-semibold my-4">
            Conception de site internet
          </h3>
          <p className="text-gray-dark">
            Posséder un site internet inimitable est un incontournable. Il
            représente votre entreprise et vos valeurs. Il est un incroyable
            accélérateur de business.
          </p>
          <Button color="bg-primary" title="En savoir plus" link="#" />
        </div>
        <div className="p-14 border border-gray-200 grid grid-flow-row justify-items-center hover:border-primary duration-300">
          <img
            className="h-52 hover:scale-105 duration-200"
            src={developpement}
            alt="développement"
          />
          <h3 className="text-2xl uppercase text-secondary font-semibold my-4">
            Développement web
          </h3>
          <p className="text-gray-dark">
            Nous serons un renfort technique et technologique pour la
            communication de votre entreprise au travers le déploiement de
            technologies modernes, robustes et sécurisées.
          </p>
          <Button color="bg-primary" title="En savoir plus" link="#" />
        </div>
        <div className="p-14 border border-gray-200 grid grid-flow-row justify-items-center hover:border-primary duration-300">
          <img
            className="h-52 hover:scale-105 duration-200"
            src={referencement}
            alt="Référencement"
          />
          <h3 className="text-2xl uppercase text-secondary font-semibold my-4">
            Optimisation seo
          </h3>
          <p className="text-gray-dark">
            Webagencelille.com est destinée aux clients qui ont la nécessité
            d&apos;un accompagnement intensif et complet en référencement
            naturel, Accélération d&apos;affichage du site, optimisation du code
            source et plus encore..
          </p>
          <Button color="bg-primary" title="En savoir plus" link="#" />
        </div>
        <div className="p-14 border border-gray-200 grid grid-flow-row justify-items-center hover:border-primary duration-300">
          <img
            className="h-52 hover:scale-105 duration-200"
            src={marketing}
            alt="Marketing"
          />
          <h3 className="text-2xl uppercase text-secondary font-semibold my-4">
            Social media marketing
          </h3>
          <p className="text-gray-dark">
            Une aide précieuse pour vos démarches avec les publicités et la
            communication sur les réseaux sociaux.
          </p>
          <Button color="bg-primary" title="En savoir plus" link="#" />
        </div>
      </div>
    </div>
  );
};

export default NosPrestationsWebDigitales;
