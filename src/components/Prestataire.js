import securite from "../assets/securite.png";
import chiffreAffaire from "../assets/chiffreAffaire.png";
import optimisation from "../assets/optimisation.png";
function Prestataire() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold">Prestataire IT & Web</h2>
      <p>
        Vous l'aurez compris, la SAS WEBAGENCELILLE.COM ne fait pas que du web
        elle fait aussi de l'installation de parc informatique et du conseil en
        numérique.
      </p>
      <div className="flex flex-col md:flex-row">
        <div>
          <img src={chiffreAffaire} alt="Pour un meilleur chiffre d'affaire" />
          <h2>Pour un meilleur chiffre d'affaire</h2>
          <p className="text-gray-lighter">
            Développer votre chiffre d'affaire grâce au numérique.
          </p>
        </div>
        <div>
          <img src={optimisation} alt="Pour une meilleure optimisation" />
          <h2>Pour une meilleure optimisation</h2>
          <p>Vous accompagner dans votre projet grâce au numérique.</p>
        </div>
        <div>
          <img src={securite} alt="Pour une sécurité accrue" />
          <h2>Pour une sécurité accrue</h2>
          <p>Protéger votre infrastructure grâce au numérique.</p>
        </div>
      </div>
    </div>
  );
}

export default Prestataire;
