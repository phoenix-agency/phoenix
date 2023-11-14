import ButtonContact from '../ButtonContact/ButtonContact'
import { Link } from 'react-router-dom'
import './Footer.css'
import FooterPic from '../../assets/FooterPic.png'
import ActivateurPic from '../../assets/Activateur-France-Num.jpg'

export default function Footer() {
  return (
    <div>
      
      <section className="Projet">
      <img src={FooterPic} alt="FooterPic" className='FooterPic'/>
        <h1>
          Qu’attendez-vous pour commencer votre projet ?
        </h1>
        <h2>
          Nous vous aiderons à atteindre vos objectifs et à développer votre entreprise sur internet.
        </h2>
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
      <section className="About">
        <div className='AgenceLille'>
          <h3>AGENCE WEB A LILLE <br/>
              SAS WEBAGENCELILLE.COM
          </h3>
          <p>
            SIREN : 820 037 315 <br/>
            Organisme assuré HISCOX <br/>
            Adresse: 5 Ter, Rue Du Vieux Faubourg, <br />
            59000 Lille <br />
            Tél: 04 70 60 60 60 <br />
            Email : 0hj7I@example.com <br />
          </p>
          </div>
          <div>
            <h3>Agence web Haut-de-France</h3>
            <p>
              <ul>
                <li><a href="">Agence web et entreprise du web à Douai</a></li>
                <li><a href="">Agence web et entreprise du web à Arras</a></li>
                <li><a href="">Entreprise du web européenne</a></li>
                <li><a href="">Web marketing communiquez autrement avec la réalité virtuelle</a></li>
                <li><a href="">Sound design & sound designer à Lille</a></li>
                <li><a href="">Entreprise conforme RGPD à Lille</a></li>
                <li><a href="">Dispositif d’aide COVID-19 à Lille</a></li>
              </ul>
            </p>
          </div>
          <div>
            <h3>Entreprise France Numérique Nord</h3>
            <div className='Activateur'>
            <div className='ActivateurPic'>
              <img src={ActivateurPic} alt="ActivateurPic" className='ActivateurPic'/>
            </div>
            <div className='ActivateurText'>
            <a href="">
              Notre entreprise du web participe et est reconnue par le gouvernement comme 
              étant France numérique. Nous apportons notre soutien aux entreprises 
              en difficultés par le COVID-19.
              </a>
            </div>
            </div>

          </div>
        <div className='Apropos'>
          <h3>À PROPOS DE VOTRE AGENCE WEB DE LILLE</h3>
          <p>
          Webagencelille.com est une agence web lilloise spécialisée dans la conception de sites internet sécurisés. 
          Notre entreprise du web couvre un large inventaire de service informatique 
          (conception et développement web, administration, sécurisation et configuration de serveur web, formations, 
          installation et réparation de parc informatique)
          </p>
        </div>
      <div className='Help'>
        <h3>BESION D&apos;AIDE ?</h3>
        <ul>
          <li>
            <Link to="/rendezvous">Besoin d&apos;un Rendez-Vous?</Link>
          </li>
          <li>
            <Link to="/candidature">Déposez votre candidature</Link>
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
        </div>
        <div className='SocialMedias'>
          <h3>
            Rejoignez-nous sur les réseaux
          </h3>
          <a href="https://github.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
            <a href='https://www.linkedin.com' target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt='LinkedIn'/></a>
            <a href='https://twitter.com' target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt='Twitter'/></a>
            <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt='Facebook'/></a>
        </div>
      </section>

    </div>
  )
}
