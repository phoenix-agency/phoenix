import React from 'react'
import ButtonContact from '../ButtonContact/ButtonContact'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <section className="footer">
        <h2>
          Qu’attendez-vous pour commencer votre projet ?
        </h2>
        <h3>
          Nous vous aiderons à atteindre vos objectifs et à développer votre entreprise sur internet.
        </h3>
        <p>
          Nous mettons l’accent sur l’ergonomie et la facilité d’utilisation.
        </p>
        <p>
          A la livraison de votre site internet, nous vous formerons à la gestion et l’administration de 
          votre site Web et ce, gratuitement.
        </p>
        <p>
          Nous déployons tous les efforts nécessaires pour que votre contenu soit diffusé de manière à ce 
          que les visiteurs puissent facilement et intuitivement trouver les informations qu’ils 
          recherchent tout en ayant une navigation sécurisée.
        </p>
        <ButtonContact />
      </section>
      <section>
        <div>
          <h3>À PROPOS DE VOTRE AGENCE WEB DE LILLE</h3>
          <p>
          Webagencelille.com est une agence web lilloise spécialisée dans la conception de sites internet sécurisés. 
          Notre entreprise du web couvre un large inventaire de service informatique 
          (conception et développement web, administration, sécurisation et configuration de serveur web, formations, 
          installation et réparation de parc informatique)
          </p>
          <h4>
          Les archives de votre agence web de lille
          </h4>
         <ul>
          {/* Mettre les liens */}
            <li>Prestataire de référencement Naturel à Lille</li>
            <li>Agence web création de site internet à Lille pour les entreprises</li>
         </ul>
        </div>
      </section>
      <section>
        <h3>Besoin d'aide ?</h3>
        <ul>
          <li>
            <Link to="/contacts">Contactez-nous</Link>
          </li>
          <li>
            <Link to="/prestations">Prestations</Link>
          </li>
          <li>
            <Link to="/realisations">Réalisations</Link>
          </li>
          <li>
            <Link to="/presentation">Présentation</Link>
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
        </ul>

      </section>
    </div>
  )
}
