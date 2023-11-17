import securite from "../../assets/securite.png";
import chiffreAffaire from "../../assets/chiffreAffaire.png";
import optimisation from "../../assets/optimisation.png";
const Prestataire = () => {
  return (
    <div className="mx-auto sm:mx-8 xl:mx-36">
      <h1 className="text-xl text-secondary text-center mb-4 font-semibold">
        Prestations IT – Digitales – Agence Web Lille
      </h1>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-secondary mb-4 pt-32">
        Prestataire IT & Web
      </h2>
      <p className=" text-gray-dark mb-24 mx-auto text-center">
        Vous l&apos;aurez compris, la SAS WEBAGENCELILLE.COM ne fait pas que du
        web elle fait aussi de l&apos;installation de parc informatique et du
        conseil en numérique.
      </p>
      <div className="grid grid-flow-row gap-x- gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="h-1/3 grid grid-flow-row">
          <img src={chiffreAffaire} className="mx-auto h-full" alt="" />
          <h2 className="h-full mb-4 mt-8 text-lg text-secondary text-center font-semibold">
            Pour un meilleur chiffre d&apos;affaire
          </h2>
          <p className="h-full text-center text-gray-dark">
            Développer votre chiffre d&apos;affaire grâce au numérique.
          </p>
        </div>
        <div className="h-1/3 grid grid-flow-row">
          <img src={optimisation} className="mx-auto h-full" alt="" />
          <h2 className="h-full mb-4 mt-8 text-lg text-secondary text-center font-semibold">
            Pour une meilleure optimisation
          </h2>
          <p className="h-full text-center text-gray-dark">
            Vous accompagner dans votre projet grâce au numérique.
          </p>
        </div>
        <div className="h-1/3 grid grid-flow-row">
          <img src={securite} className="mx-auto h-full" alt="" />
          <h2 className="h-full mb-4 mt-8 text-lg text-secondary text-center font-semibold">
            Pour une sécurité accrue
          </h2>
          <p className="h-full text-center text-gray-dark">
            Protéger votre infrastructure grâce au numérique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prestataire;
