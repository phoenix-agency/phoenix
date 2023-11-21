import conception from "../../assets/conception.png";
import developpement from "../../assets/developpement.png";
import referencement from "../../assets/referencement.png";
import marketing from "../../assets/marketing.png";
import Button from "../Button/Button";
const NosPrestationsWebDigitales = () => {
  return (
    <div className="mb-16">
      <h2 className="mt-16  capitalize text-center font-semibold text-secondary text-3xl md:text-5xl">
        Nos prestations web et digitales
      </h2>
      <p className="text-center mb-10 text-gray-dark my-4 mx-6 md:mx-8 lg:mx-64 2xl:mx-72">
        Nous offrons un éventail varié de services en web marketing, en
        développement web et marketing numérique (E-commerce). Nos prestations
        englobent le référencement (SEO-SEA), la conception de site internet, le
        marketing des réseaux sociaux (Social Média Marketing) et bien plus
        encore.
      </p>
      <div className="text-center mx-2 grid grid-flow-row gap-8 md:grid-cols-2 ">
        <div className="p-6 border border-gray-200 hover:border-primary duration-300">
          {/* <div className=" h-full"> */}
          <div className="flex flex-col h-full">
            <div className="h-full">
              <img
                className="h-52 hover:scale-105 duration-200 mx-auto"
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
            </div>
            <div className="mt-auto pb-6 pt-8">
              <Button color="bg-primary" title="En savoir plus" link="#" />
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="p-6 border border-gray-200 hover:border-primary duration-300">
          {/* <div className=" h-full"> */}
          <div className="flex flex-col h-full">
            <div className="h-full">
              <img
                className="h-52 hover:scale-105 duration-200 mx-auto"
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
            </div>
            <div className="mt-auto pb-6 pt-8">
              <Button color="bg-primary" title="En savoir plus" link="#" />
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="p-6 border border-gray-200 hover:border-primary duration-300">
          {/* <div className=" h-full"> */}
          <div className="flex flex-col h-full">
            <div className="h-full">
              <img
                className="h-52 hover:scale-105 duration-200 mx-auto"
                src={referencement}
                alt="Référencement"
              />
              <h3 className="text-2xl uppercase text-secondary font-semibold my-4">
                Optimisation seo
              </h3>
              <p className="text-gray-dark">
                Webagencelille.com est destinée aux clients qui ont la nécessité
                d&apos;un accompagnement intensif et complet en référencement
                naturel, Accélération d&apos;affichage du site, optimisation du
                code source et plus encore..
              </p>
            </div>
            <div className="mt-auto pb-6 pt-8">
              <Button color="bg-primary" title="En savoir plus" link="#" />
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="p-6 border border-gray-200 hover:border-primary duration-300">
          {/* <div className=" h-full"> */}
          <div className="flex flex-col h-full">
            <div className="h-full">
              <img
                className="h-52 hover:scale-105 duration-200 mx-auto"
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
            </div>
            <div className="mt-auto pb-6 pt-8">
              <Button color="bg-primary" title="En savoir plus" link="#" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosPrestationsWebDigitales;
