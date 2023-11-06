import { Link } from 'react-router-dom';
import Wordpress from './NavbarPictures/Wordpress.png';
import Eshop from './NavbarPictures/Eshop.png';
import Reworking from './NavbarPictures/Reworking.png';
import Devweb from './NavbarPictures/Devweb.png';
import DesignMarketing from './NavbarPictures/DesignMarketing.png';
import Forfaits from './NavbarPictures/Forfaits.png';
import Seo from './NavbarPictures/Seo.png';
import Socialnetwork from './NavbarPictures/Socialnetwork.png';
import AddsCampaign from './NavbarPictures/AddsCampaign.png';
import Upkeep from './NavbarPictures/Upkeep.png';
import Green from './NavbarPictures/Green.png';
import Rgpd from './NavbarPictures/Rgpd.png';
import Audit from './NavbarPictures/Audit.png';


function ListePresta() {
  return (
    <div className="presta-list">
      <div>
        <Link to="/wordpress"><img src={Wordpress} alt="Wordpress" /></Link>
        <Link to="/wordpress">Conception de site Wordpress</Link>
      </div>
      <div>
        <Link to="/eshop"><img src={Eshop} alt="E-shop" /></Link>
        <Link to="/eshop">Conception de site E-Commerce</Link>
      </div>
      <div>
        <Link to="/reworking"><img src={Reworking} alt="Refonte" /></Link>
        <Link to="/reworking">Refonte de site Internet</Link>
      </div>
      <div>
        <Link to="/Devweb"><img src={Devweb} alt="Developement web" /></Link>
        <Link to="/Devweb">Dévelopement Web</Link>
      </div>
      <div>
        <Link to="/DesignMarketing"><img src={DesignMarketing} alt="Design & Marketing" /></Link>
        <Link to="/DesignMarketing">Responsive Design & Marketing Mobile</Link>
      </div>
      <div>
        <Link to="/Forfait"><img src={Forfaits} alt="Forfait" /></Link>
        <Link to="/Forfait">Les forfaits web</Link>
      </div>
      <div>
        <Link to="/SEO"><img src={Seo} alt="SEO" /></Link>
        <Link to="/SEO">Référencement naturel SEO</Link>
      </div>
      <div>
        <Link to="/SocialNetwork"><img src={Socialnetwork} alt="SocialNetwork" /></Link>
        <Link to="/SocialNetwork">Marketing des médias sociaux</Link>
      </div>
      <div>
        <Link to="/AddsCampaign"><img src={AddsCampaign} alt="AddsCampaign" /></Link>
        <Link to="/AddsCampaign">Gestion des campagnes publicitaires</Link>
      </div>
      <div>
        <Link to="/Upkeep"><img src={Upkeep} alt="Upkeep" /></Link>
        <Link to="/Upkeep">Hébergement web & Maintenance</Link>
      </div>
      <div>
        <Link to="/Green"><img src={Green} alt="Green" /></Link>
        <Link to="/Green">Hébergement Web À L&apos;énergie Verte & Développement Web Éco-Responsable.</Link>
      </div>
      <div>
        <Link to="/Rgpd"><img src={Rgpd} alt="Rgpd" /></Link>
        <Link to="/Rgpd">Mise en conformité RGPD</Link>
      </div>
      <div>
        <Link to="/Audit"><img src={Audit} alt="Audit" /></Link>
        <Link to="/Audit">Audit</Link>
      </div>
    </div>
  );
}

export default ListePresta;