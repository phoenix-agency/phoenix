import DesktopSvg from "../../assets/svg/DesktopSvg";
import EarthSvg from "../../assets/svg/EarthSvg";
import RocketChatSvg from "../../assets/svg/RocketChatSvg";
function Prestations() {
  return (
    <div className="bg-slate-100">
      <h2>Nos Prestations</h2>
      <div className="grid grid-cols-3 pt-5">
        <div className="bg-white rounded-3xl">
          <DesktopSvg color="#3361FF" />
          <h2 className="text-2xl text-secondary mb-3">Web Design</h2>
          <p className="text-gray-light">
            Nous élaborons un design unique qui reflétera l'image de marque de
            votre entreprise. Conception de site internet vitrine, inclus
            responsive design (adapté aux mobiles et tablettes).
          </p>
        </div>
        <div className="bg-white rounded-3xl">
          <EarthSvg />
          <h2 className="text-2xl text-secondary mb-3">Marketing en Ligne</h2>
          <p className="text-gray-light">
            Nos spécialistes en marketing vous aideront à développer votre
            stratégie de marketing ( webmarketing, social média marketing,
            optimisation de votre référencement naturel, campagne de publicité
            en ligne (Adwords) et plus encore...).
          </p>
        </div>
        <div className="bg-white rounded-3xl hover:rounded-none hover:border hover:border-primary transition-all duration-300">
          <RocketChatSvg />
          <h2 className="text-2xl text-secondary mb-3">Digital Branding</h2>
          <p className="text-gray-light">
            Notre équipe de branding à Lille vous accompagnera tout au long du
            processus qui permettra de faire connaître votre marque, votre
            entreprise, votre projet.
          </p>
        </div>
        <div className="bg-white rounded-3xl">
          <h2 className="text-2xl text-secondary mb-3">
            Référencement Naturel
          </h2>
          <p className="text-gray-light">
            Toutes nos créations de site internet bénéficient d'une optimisation
            du code source. Obtenez ainsi de meilleurs scores pour les termes de
            recherche de votre site internet. Vous aurez davantage de prospects
            qualifiés pour un développement de chiffre d'affaires bien plus
            conséquent.
          </p>
        </div>
        <div className="bg-white rounded-3xl">
          <h2 className="text-2xl text-secondary mb-3">
            Agence Web Experte WordPress
          </h2>
          <p className="text-gray-light">
            Si vous recherchez une agence web à Lille qui est experte en CMS
            WordPress, vous êtes à la bonne adresse : refonte de site internet
            WordPress, création de site internet WordPress, hébergement de site
            internet WordPress, maintenance de site internet WordPress.
          </p>
        </div>
        <div className="bg-white rounded-3xl">
          <h2 className="text-2xl text-secondary mb-3">
            Maintenance & Cyber-Sécurité
          </h2>
          <p className="text-gray-light">
            Nous sommes reconnus pour la qualité de notre prestation de
            maintenance qu'elle soit évolutive, corrective ou préventive. Notre
            particularité est que nous sommes une véritable agence de
            cyber-sécurité. Votre site internet sera un véritable coffre-fort
            numérique. Pour un web économique et durable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Prestations;
