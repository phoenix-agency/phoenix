import Button3 from "../Button/Button3";
import DesignMarketing from "../../assets/DesignMarketing.png";
import Devweb from "../../assets/Devweb.png";
import Eshop from "../../assets/Eshop.png";
import Wordpress from "../../assets/Wordpress.png";
import Reworking from "../../assets/Reworking.png";
import SEO from "../../assets/SEO.png";
import SocialNetwork from "../../assets/SocialNetwork.png";
import AddsCampaign from "../../assets/AddsCampaign.png";
import Upkeep from "../../assets/Upkeep.png";
import Rgpd from "../../assets/Rgpd.png";
import Audit from "../../assets/Audit.png";
const PrestationQuiVousInteresse = () => {
  return (
    <div className="lg:hidden mt-32">
      <h3 className="text-secondary text-3xl text-center font-semibold">
        Choisissez la prestation qui vous intéresse
      </h3>
      <div className="mx-2 grid grid-flow-row gap-4 md:grid-cols-3 text-center ">
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img
                    src={Wordpress}
                    className="mx-auto h-full w-full"
                    alt="Audit"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Création de site internet WordPress
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Wordpress est un outil puissant qui vous permettra
                  d&apos;administrer simplement votre site internet.
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img
                    src={Eshop}
                    className="mx-auto h-full w-full"
                    alt="E-shop"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Création de site internet E-commerce
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Vous souhaitez lancer votre business en ligne ? Nous avons ce
                  qu&apos;il vous faut.
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img
                    src={Reworking}
                    className="mx-auto h-full w-full"
                    alt="Refonte"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Refonte de site internet
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Votre site internet peine à être visible sur internet ? Il
                  rame ou il est truffé de bogue et de virus ? Nous vous
                  accompagnerons pour la refonte de ce dernier.
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img
                    src={Devweb}
                    className="mx-auto h-full w-full"
                    alt="Développement Web"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Développement Web
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Vous recherchez une agence web pour développer votre projet ?
                  Découvrez nos compétences.
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img
                    src={DesignMarketing}
                    className="mx-auto h-full w-full"
                    alt="Responsive Design"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Marketing Mobile & Responsive Design
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Nos outils sont optimisés à la navigations mobile ( création
                  de sites web responsive design et plus encore)
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img src={SEO} className="mx-auto h-full w-full" alt="SEO" />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Référencement Naturel SEO
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Votre entreprise est invisible sur internet ? C&apos;est sans
                  doute un problème de référencement naturel. Nous avons des
                  forfaits adaptables à vos besoin
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img
                    src={SocialNetwork}
                    className="mx-auto h-full w-full"
                    alt="Social Networks"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Marketing des Médias Sociaux
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Besoin d&apos;une agence webmarketing pour lancer votre
                  entreprise sur internet par le biais des réseaux sociaux ?
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className=" bg-gray-100 h-full">
            <div className="flex flex-col h-ful">
              <div className="h-ful ">
                <div className="h-52">
                  <img
                    src={AddsCampaign}
                    className="mx-auto h-full w-full"
                    alt="Audit"
                  />
                </div>

                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Gestion des Campagnes Publicitaires - SEA
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Vous souhaitez rapidement faire connaitre votre entreprise ou
                  votre produit sur internet ? Nous lançons pour vous la ou les
                  campagnes publicitaires (Référencement payant SEA)
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img
                    src={Upkeep}
                    className="mx-auto h-full w-full"
                    alt="Hébergement et maintenance"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Hébergement Web & Maintenance
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Vous avez besoin d&apos;une infogérance, d&apos;une
                  maintenance ou d&apos;un hébergement web ? Nous sommes là pour
                  vous.
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className="bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-full">
                <div className="h-52">
                  <img
                    src={Rgpd}
                    className="mx-auto h-full w-full"
                    alt="RGPD"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Mise en conformité au RGPD
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Vous avez besoin de rendre conforme votre site internet, votre
                  portail, votre plateforme web etc.. Découvrez notre offres de
                  300 HT / ans pour la mise en conformité au RGPD pas de coûts
                  cachés.
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 p-6">
          <div className=" bg-gray-100 h-full">
            <div className="flex flex-col h-full">
              <div className="h-ful  ">
                <div className="h-52">
                  <img
                    src={Audit}
                    className=" mx-auto h-full w-full"
                    alt="Audit"
                  />
                </div>
                <h2 className="text-secondary text-2xl text-center font-extrabold pt-8 px-4">
                  Audit Parc Informatique
                </h2>
                <p className="text-gray-dark text-center mt-4 px-4">
                  Votre parc informatique est vieillissant, il tombe souvent en
                  panne ou il est tombé en panne, découvrez notre devis
                  interactif.
                </p>
              </div>
              <div className="mt-auto pb-10 pt-8">
                <Button3 link="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrestationQuiVousInteresse;
