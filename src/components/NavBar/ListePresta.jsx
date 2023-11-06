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
        <Link to="/wordpress"><img src={Devweb} alt="Wordpress" /></Link>
        <Link to="/wordpress">Dévelopement Web</Link>
      </div>
      <div>
        <Link to="/eshop"><img src={DesignMarketing} alt="E-shop" /></Link>
        <Link to="/eshop">Responsive Design & Marketing Mobile</Link>
      </div>
      <div>
        <Link to="/reworking"><img src={Forfaits} alt="Refonte" /></Link>
        <Link to="/reworking">Les forfaits web</Link>
      </div>
      <div>
        <Link to="/wordpress"><img src={Seo} alt="Wordpress" /></Link>
        <Link to="/wordpress">Référencement naturel SEO</Link>
      </div>
      <div>
        <Link to="/eshop"><img src={Socialnetwork} alt="E-shop" /></Link>
        <Link to="/eshop">Marketing des médias sociaux</Link>
      </div>
      <div>
        <Link to="/reworking"><img src={AddsCampaign} alt="Refonte" /></Link>
        <Link to="/reworking">Gestion des campagnes publicitaires</Link>
      </div>
      <div>
        <Link to="/wordpress"><img src={Upkeep} alt="Wordpress" /></Link>
        <Link to="/wordpress">Hébergement web & Maintenance</Link>
      </div>
      <div>
        <Link to="/eshop"><img src={Green} alt="E-shop" /></Link>
        <Link to="/eshop">Hébergement Web À L&apos;énergie Verte & Développement Web Éco-Responsable.</Link>
      </div>
      <div>
        <Link to="/reworking"><img src={Rgpd} alt="Refonte" /></Link>
        <Link to="/reworking">Mise en conformité RGPD</Link>
      </div>
      <div>
        <Link to="/reworking"><img src={Audit} alt="Refonte" /></Link>
        <Link to="/reworking">Audit</Link>
      </div>
    </div>
  );
}

export default ListePresta;