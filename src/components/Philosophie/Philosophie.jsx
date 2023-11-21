import number1 from "../../assets/number1.png";
import number2 from "../../assets/number2.png";
import number3 from "../../assets/number3.png";
import number4 from "../../assets/number4.png";
const Philosophie = () => {
  return (
    <div className="mx-4 lg:mx-10 xl:mx-28 2xl:mx-56 mb-10">
      <h2 className="text-gray-dark text-center">
        DU MEILLEUR . DU PLUS . DE LA PASSION
      </h2>
      <h2 className="text-secondary text-4xl text-center font-extrabold mb-16">
        La Philosophie De Notre Agence
      </h2>
      <div className="grid grid-flow-row gap-8 md:grid-cols-2">
        <div className="px-8 sm:px-12 py-16 border rounded-t-xl rounded-ee-xl rounded-bl-[66px] shadow-xl">
          <img src={number1} className=" mb-4" alt="number1" />
          <h4 className="text-2xl text-secondary capitalize text-center font-bold mb-4 md:text-left">
            Rien ne nous arrête
          </h4>
          <p className="text-gray-dark text-center md:text-left">
            La SAS WEBAGENCELILLE.COM est une entreprise ambitieuse qui saura
            répondre à vos attentes en matière du numérique. Fort de nombreuses
            compétences dans le domaine du numérique nous vous accompagnerons
            dans votre entreprise.
          </p>
        </div>
        <div className="px-12 py-16 border rounded-t-xl rounded-ee-xl rounded-bl-[66px] shadow-xl">
          <img src={number2} className="mb-4" alt="number2" />
          <h4 className="text-2xl text-secondary capitalize text-center font-bold mb-4 md:text-left">
            Nous aimons nous surpasser
          </h4>
          <p className="text-gray-dark text-center md:text-left">
            Mener a bien votre projet est notre priorité. Nous croyons en notre
            savoir faire et à nos produits ; Nous vous proposerons les meilleurs
            produits du marché, nous les avons tous testés et nous avons retenu
            le meilleu
          </p>
        </div>
        <div className="px-12 py-16 border rounded-t-xl rounded-ee-xl rounded-bl-[66px] shadow-xl">
          <img src={number3} className="mb-4" alt="number3" />
          <h4 className="text-2xl text-secondary capitalize text-center font-bold mb-4 md:text-left">
            Nous vous informerons étape par étape
          </h4>
          <p className="text-gray-dark text-center md:text-left">
            la SAS WEBAGENCELILLE.COM a pour habitude d’informer ses clients
            étape par étape sur la réalisation de ses projets. Même si vous
            pouvez directement en temps réel accéder à la maquette de votre site
            internet sur nos serveurs de production, nous prenons soin de vous
            contacter par téléphone pour faire le point sur l’évolution de votre
            projet digital.
          </p>
        </div>
        <div className="px-12 py-16 border rounded-t-xl rounded-ee-xl rounded-bl-[66px] shadow-xl">
          <img src={number4} className="mb-4" alt="number4" />
          <h4 className="text-2xl text-secondary capitalize text-center font-bold mb-4 md:text-left">
            Votre projet vous paraîtra plus simple
          </h4>
          <p className="text-gray-dark text-center md:text-left">
            Pendant les différentes phases de votre projet digital nous
            vulgariserons le discours technique afin que vous compreniez les
            tenants et les aboutissants. Nous vous proposerons différentes
            stratégies pour la mise en place de votre communication digitale.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophie;
