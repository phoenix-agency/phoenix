import { Link } from 'react-router-dom';
import Wordpress from './../../assets/Wordpress.png';
import Eshop from './../../assets/Eshop.png';
import Reworking from './../../assets/Reworking.png';
import Devweb from './../../assets/Devweb.png';
import DesignMarketing from './../../assets/DesignMarketing.png';
import Forfaits from './../../assets/Forfaits.png';
import Seo from './../../assets/Seo.png';
import Socialnetwork from './../../assets/Socialnetwork.png';
import AddsCampaign from './../../assets/AddsCampaign.png';
import Upkeep from './../../assets/Upkeep.png';
import Green from './../../assets/Green.png';
import Rgpd from './../../assets/Rgpd.png';
import Audit from './../../assets/Audit.png';


function ListePresta() {
  return (
      <ul className="presta-list">
        <li className='PrestaItem'><Link to="/wordpress"><img src={Wordpress} alt="Wordpress" />Conception de site Wordpress</Link></li>
        <li className='PrestaItem'><Link to="/eshop"><img src={Eshop} alt="E-shop" />Conception de site E-Commerce</Link></li>
        <li className='PrestaItem'><Link to="/reworking"><img src={Reworking} alt="Refonte" />Refonte de site Internet</Link></li>
        <li className='PrestaItem'><Link to="/Devweb"><img src={Devweb} alt="Developement web" />Dévelopement Web</Link></li>
        <li className='PrestaItem'><Link to="/DesignMarketing"><img src={DesignMarketing} alt="Design & Marketing" />Responsive Design & Marketing Mobile</Link></li>
        <li className='PrestaItem'><Link to="/Forfait"><img src={Forfaits} alt="Forfait" />Les forfaits web</Link></li>
        <li className='PrestaItem'><Link to="/SEO"><img src={Seo} alt="SEO" />Référencement naturel SEO</Link></li>
        <li className='PrestaItem'><Link to="/SocialNetwork"><img src={Socialnetwork} alt="SocialNetwork" />Marketing des médias sociaux</Link></li>
        <li className='PrestaItem'><Link to="/AddsCampaign"><img src={AddsCampaign} alt="AddsCampaign" />Gestion des campagnes publicitaires</Link></li>
        <li className='PrestaItem'><Link to="/Upkeep"><img src={Upkeep} alt="Upkeep" />Hébergement web & Maintenance</Link></li>
        <li className='PrestaItem'><Link to="/Green"><img src={Green} alt="Green" />Hébergement Web À L&apos;énergie Verte & Développement Web Éco-Responsable.</Link></li>
        <li className='PrestaItem'><Link to="/Rgpd"><img src={Rgpd} alt="Rgpd" />Mise en conformité RGPD</Link></li>
        <li className='PrestaItem'><Link to="/Audit"><img src={Audit} alt="Audit" />Audit</Link></li>
      </ul>
  );
}

export default ListePresta;