import DesktopSvg from "../../assets/svg/DesktopSvg";
import EarthSvg from "../../assets/svg/EarthSvg";
import RocketChatSvg from "../../assets/svg/RocketChatSvg";
import UserSVG from "../../assets/svg/UserSVG";
import WordpressSVG from "../../assets/svg/WordpressSVG";
import FilterSVG from "../../assets/svg/FilterSvg";

import Button2 from "../Button/Button2";

function NosPrestations() {
  return (
    <div className="hidden md:block mt-32">
      <div className="pt-24 bg-green-300 rounded-[250px]">
        <h2 className=" pb-6 text-4xl font-extrabold text-white text-center">
          Nos Prestations
        </h2>
        <div className="px-48 md:px-5 md:gap-4 text-center grid grid-cols-3 pb-32 pt-5 gap-12">
          <div className="flex flex-col h-full">
            <div className="h-full bg-white rounded-3xl px-6 pt-6 pb-14 hover:rounded-none hover:border hover:border-primary transition-all duration-300">
              <div className="flex justify-center p-7">
                <div className="hover:scale-105">
                  <DesktopSvg />
                </div>
              </div>
              <h2 className="text-2xl text-secondary mb-3">Web Design</h2>
              <p className="text-gray-light">
                Nous élaborons un design unique qui reflétera l&apos;image de
                marque de votre entreprise. Conception de site internet vitrine,
                inclus responsive design (adapté aux mobiles et tablettes).
              </p>
            </div>
            <div className="mt-auto">
              <Button2
                color="bg-primary"
                title="Je veux en savoir plus"
                link="#"
              />
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="h-full bg-white rounded-3xl px-6 pt-6 pb-14 hover:rounded-none hover:border hover:border-primary transition-all duration-300">
              <div className="flex justify-center p-7">
                <div className="hover:scale-105">
                  <EarthSvg />
                </div>
              </div>
              <h2 className="text-2xl text-secondary mb-3">
                Marketing en Ligne
              </h2>
              <p className="text-gray-light">
                Nos spécialistes en marketing vous aideront à développer votre
                stratégie de marketing ( webmarketing, social média marketing,
                optimisation de votre référencement naturel, campagne de
                publicité en ligne (Adwords) et plus encore...).
              </p>
            </div>
            <div className="mt-auto">
              <Button2
                color="bg-primary"
                title="Je veux en savoir plus"
                link="#"
              />
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="h-full bg-white rounded-3xl px-6 pt-6 pb-14 hover:rounded-none hover:border hover:border-primary transition-all duration-300">
              <div className="flex justify-center p-7">
                <div className="hover:scale-105">
                  <RocketChatSvg />
                </div>
              </div>
              <h2 className="text-2xl text-secondary mb-3">Digital Branding</h2>
              <p className="text-gray-light">
                Notre équipe de branding à Lille vous accompagnera tout au long
                du processus qui permettra de faire connaître votre marque,
                votre entreprise, votre projet.
              </p>
            </div>
            <div className="mt-auto">
              <Button2
                color="bg-primary"
                title="Je veux en savoir plus"
                link="#"
              />
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className=" h-full bg-white rounded-3xl px-6 pt-6 pb-14 hover:rounded-none hover:border hover:border-primary transition-all duration-300">
              <div className="flex justify-center p-7">
                <div className="hover:scale-105">
                  <FilterSVG />
                </div>
              </div>
              <h2 className="text-2xl text-secondary mb-3 ">
                Référencement Naturel
              </h2>
              <p className="text-gray-light">
                Toutes nos créations de site internet bénéficient d&apos;une
                optimisation du code source. Obtenez ainsi de meilleurs scores
                pour les termes de recherche de votre site internet. Vous aurez
                davantage de prospects qualifiés pour un développement de
                chiffre d&apos;affaires bien plus conséquent.
              </p>
            </div>
            <div className="mt-auto">
              <Button2
                color="bg-primary"
                title="Je veux en savoir plus"
                link="#"
              />
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className=" h-full bg-white rounded-3xl px-6 pt-6 pb-14 hover:rounded-none hover:border hover:border-primary transition-all duration-300">
              <div className="flex justify-center p-7">
                <div className="hover:scale-105">
                  <WordpressSVG />
                </div>
              </div>
              <h2 className="text-2xl text-secondary mb-3">
                Agence Web Experte WordPress
              </h2>
              <p className="text-gray-light">
                Si vous recherchez une agence web à Lille qui est experte en CMS
                WordPress, vous êtes à la bonne adresse : refonte de site
                internet WordPress, création de site internet WordPress,
                hébergement de site internet WordPress, maintenance de site
                internet WordPress.
              </p>
            </div>
            <div className="mt-auto">
              <Button2
                color="bg-primary"
                title="Je veux en savoir plus"
                link="#"
              />
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="h-full bg-white rounded-3xl px-6 pt-6 pb-14 hover:rounded-none hover:border hover:border-primary transition-all duration-300">
              <div className="flex justify-center p-7">
                <div className="hover:scale-105">
                  <UserSVG />
                </div>
              </div>
              <h2 className="text-2xl text-secondary mb-3">
                Maintenance & Cyber-Sécurité
              </h2>
              <p className="text-gray-light">
                Nous sommes reconnus pour la qualité de notre prestation de
                maintenance qu&apos;elle soit évolutive, corrective ou
                préventive. Notre particularité est que nous sommes une
                véritable agence de cyber-sécurité. Votre site internet sera un
                véritable coffre-fort numérique. Pour un web économique et
                durable.
              </p>
            </div>
            <div className="mt-auto">
              <Button2
                color="bg-primary"
                title="Je veux en savoir plus"
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NosPrestations;
