import securite from "../../assets/securite.png";
import chiffreAffaire from "../../assets/chiffreAffaire.png";
import optimisation from "../../assets/optimisation.png";
function Prestataire() {
  return (
    <div>
      <div className="text-center mb-32 mx-24">
        <h1 className="text-xl text-secondary mb-4 font-semibold">
          Prestations IT – Digitales – Agence Web Lille
        </h1>
        <h2 className="text-4xl font-extrabold text-secondary mb-4 pt-32">
          Prestataire IT & Web
        </h2>
        <p className=" text-gray-light mb-24 mx-48 text-center">
          Vous l&apos;aurez compris, la SAS WEBAGENCELILLE.COM ne fait pas que
          du web elle fait aussi de l&apos;installation de parc informatique et
          du conseil en numérique.
        </p>
        {/* <div className="grid grid-flow-row gap-12 md:flex flex-col justify-center text-center"> */}
        <div className="grid grid-flow-row gap-12 lg:grid-flow-col justify-center text-center md:grid-cols-2">
          <div className="h-1/3 grid grid-flow-row justify-items-center px-4">
            <img
              src={chiffreAffaire}
              alt="Pour un meilleur chiffre d'affaire"
            />
            <h2 className="mb-4 mt-9 text-lg text-secondary">
              Pour un meilleur chiffre d&apos;affaire
            </h2>
            <p className="text-gray-dark">
              Développer votre chiffre d&apos;affaire grâce au numérique.
            </p>
          </div>
          <div className="h-1/3 grid grid-flow-row justify-items-center px-4">
            <img src={optimisation} alt="Pour une meilleure optimisation" />
            <h2 className="mb-4 mt-9 text-lg text-secondary">
              Pour une meilleure optimisation
            </h2>
            <p className="text-gray-dark">
              Vous accompagner dans votre projet grâce au numérique.
            </p>
          </div>
          <div className="h-1/3 grid grid-flow-row justify-items-center px-4">
            <img src={securite} alt="Pour une sécurité accrue" />
            <h2 className="mb-4 mt-9 text-lg text-secondary">
              Pour une sécurité accrue
            </h2>
            <p className="text-gray-dark">
              Protéger votre infrastructure grâce au numérique.
            </p>
          </div>
        </div>
      </div>

      {/* <button class="bg-primary text-sm text-white uppercase py-2 px-6 font-medium rounded-xl hover:bg-secondary transition-all duration-300">
        Je veux en savoir plus
      </button> */}
    </div>
  );
}

export default Prestataire;
