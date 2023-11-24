import React from "react";
import ButtonContact from "../../components/ButtonContact/ButtonContact";
import eshopHeader from "../../assets/eshopHeader.png";
import eshop_respons from "../../assets/eshop_respons.png";
import { Link } from "react-router-dom";

export default function Eshop() {
  return (
    <div>
      <section className="EshopHeader">
        <div>
          <h1>Agence web création de sites e-commerce à Lille</h1>
          <h4>
            Développez votre activité en vendant sur internet avec un site
            internet sécurisé et performant.
          </h4>
          <ButtonContact />
        </div>
        <div>
          <img src={eshopHeader} alt="" />
        </div>
      </section>
      <section className="EshopMain1">
        <h2>
          SAS WEBAGENCELILLE.COM Agence Web Création De Site Internet Ecommerce
          Pour Les Entreprises À Lille
        </h2>
        <div>
          <div>
            <h3>E-Commerce – site marchand et vente en ligne</h3>
            <p>
              Si vous êtes ici c’est ce que vous recherchez une agence web qui
              serait capable de concevoir votre site internet e-commerce. Tout
              le monde sait qu’aujourd’hui de plus en plus de personnes
              commandent en ligne. <br />
              C’est plus simple et surtout plus rapide.
            </p>
            <ButtonContact />
          </div>
          <div>
            <img src={eshop_respons} alt="" />
          </div>
          <div>
            <h3>Les avantages d’un site e-commerce</h3>
            <p>
              Vous allez pouvoir vendre vos articles partout en France, voire
              même dans le monde entier. Contrairement à un magasin physique,
              vous aurez beaucoup moins de charges à payer, vous pourrez aussi
              proposer plus d’articles car vous n’avez pas à vous préoccuper de
              la surface, forcément limitée, de votre magasin physique.
            </p>
          </div>
          <Link to="/contacts">Demander un devis</Link>
        </div>
        <div>
          <h3>
            C’est une responsabilité d’accepter les paiements sur votre site
            internet
          </h3>
          <p>
            Vous êtes responsable des données bancaires de vos visiteurs /
            acheteurs. Il est absolument nécessaire de proposer une garantie de
            totale sécurité. Afin que votre site internet soit un site de
            confiance. C’est pourquoi WEBAGENCELILLE.COM est l’agence web qu’il
            vous faut. Forte de son expertise dans le domaine de la sécurité
            informatique, vous avez la garantie d’avoir un site internet
            conforme aux obligations de sécurité.
          </p>
          <Link to="/contacts">Demander un devis</Link>
        </div>
        <div>
          <h3>
            Une agence web experte en sécurité informatique pour une navigation
            sans pépins
          </h3>
          <p>
            En plus de la sécurité de votre site internet vous aurez besoin d’un
            site internet qui s’affiche très rapidement. Les visiteurs qui
            mettent du temps à afficher votre site internet partiront avant même
            d’avoir effectué une commande. Cette perte sèche est inacceptable
            pour votre activité. C’est pourquoi nous optimisons votre serveur
            web afin de pouvoir accélérer l’affichage de votre site internet.
            Nous avons des connaissances solides en matière d’installation, de
            configuration et de sécurisation de serveur.
          </p>
          <a href="https://projet-wal.fr/">Découvrir nos réalisations</a>
          <ButtonContact />
        </div>
      </section>
      <section className="EshopMain2">
        <div>
          <div>
            <h2>Ce que vous apportera notre agence e-commerce</h2>
            <p>
              Nous vous aiderons dans la mise en place de votre solution
              e-commerce par le biais de l’optimisation des tâches, de
              l’ergonomie de votre site internet, du système d’inscription et de
              l’installation de la passerelle de paiement.
            </p>
          </div>
          <div>
            <h3>Web-Marketing</h3>
            <p>Conseils pour votre présence en ligne.</p>
          </div>
          <div>
            <h3>Landign Page</h3>
            <p>Vous avez un seul article et un besoin urgent de vendre.</p>
          </div>
          <div>
            <h3>Hébergement & DNS</h3>
            <p>
              Nous nous occupons de l'hébergement web et de votre nom de
              domaine. Avec nos puissants serveurs votre site internet se
              portera à merveille.
            </p>
          </div>
          <div>
            <h3>Campagne Emailing</h3>
            <p>
              Une campagne emailing design pour faire connaitre votre produit.
            </p>
          </div>
          <h3>Site adapté aux Mobile & Tablettes</h3>
          <p>
            Votre site marchand sera responsive design ce qui signifie qu'il
            sera adapté aux mobiles et tablettes.
          </p>
        </div>
        <div>
          <h3>Optimisé pour le Référencement Naturel</h3>
          <p>
            Votre site marchand sera entièrement optimisé pour le référencement
            naturel.
          </p>
        </div>
      </section>
      <section className="EshopMain3">
        <h3>Conception e-commerce sur-mesure</h3>
        <p>
          En fonction de vos objectifs et de vos exigences, nous vous fournirons
          la technologie e-commerce qu’il vous faut. Vous obtiendrez un site
          internet à votre image : complet, sécurisé et doté de toutes les
          fonctionnalités dont vous aurez besoin.
        </p>
      </section>
      <section className="EshopMain4">
        <h2>Pour Les Clients De Votre Site E-Commerce</h2>
        <div>
          <div>Panier modifiable avant la validation de l'achat</div>
          <div>
            Historique des commandes, état d'expédition, création de listes de
            souhaits
          </div>
          <div>Paiement sécurisé avec un cryptage SSL 128 BITS</div>
          <div>Option d'emballage cadeau et message de carte cadeau</div>
          <div>
            possibilité de pouvoir payer anonymement sans être nécessairement
            inscrit au préalable, ce qui améliorera la conversion de votre site
            marchand
          </div>
        </div>
      </section>
      <section className="EshopMain5">
        <h2>Pour La Gestion De Votre Site E-Commerce</h2>
        <div>
          <div>Configurez facilement les tailles et les couleurs</div>
          <div>
            Ajoutez et modifiez les prix et descriptions de vos produits avec
            facilité
          </div>
          <div>
            Site marchand totalement optimisé pour votre référencement naturel
            SEO
          </div>
          <div>Gestion des stocks et inventaires</div>
          <div>
            Possibilité d'exporter l'historique des transactions et des ventes
            de votre site marchand en format CVS (tableau Excel)
          </div>
          <div>
            Offrez des coupons, des codes de réductions et des chèques-cadeaux
            directement à partir de votre site e-commerce, pratique pour la
            fidélisation de vos clients / visiteurs
          </div>
          <div>Intégration avec Paypal et d'autres passerelles de paiement</div>
        </div>
      </section>
      <section className="EshopMain6">
        <h2>
          Les Solutions E-Commerce Proposées Par Votre Agence Web De Lille
        </h2>
        <p>
          Nous avons sélectionné pour vous les meilleurs CMS pour la création de
          site internet e-commerce. Ils possèdent tous une excellente interface
          de gestion, une simplicité d’utilisation. Nous mettons à votre
          disposition de véritables outils très puissants qui vous permettront
          d’ouvrir votre magasin en ligne.
        </p>
      </section>
      <section className="EshopFooter">
        <h2>Découvrez les réalisations de votre agence web de Lille</h2>
        <p>
          Nos créations de sites internet vitrine, e-commerce, référencement
          naturel, création de logo, gestion des réseaux sociaux et plus.
        </p>
        <a href="https://projet-wal.fr/">Ouvrir le Profolio</a>
      </section>
    </div>
  );
}
