import CutePic from "./../../assets/CutePic.png";
import ChiffreQuatre from "./../../assets/ChiffreQuatre.png";
import { Link } from "react-router-dom";

function cute() {
    return (
        <div className="Container-Wordpress Title-Row-Reverse">
            <div className="Wordpress-Container-Text">
                <div>
                    <img src={ChiffreQuatre} alt='Illustration chiffre deux' className='Chiffre-Wordpress' />
                </div>
                <div className="Presentation-Wordpress">
                    <h1 className="Title-Wordpress">Oui d&apos;accord, vous êtes bien mignons dans votre agence web de Lille mais nous on n&apos;aime pas WordPress. Quelqu&apos;un m&apos;a dit que Drupal ou Joomla sont mieux que WordPress</h1>
                    <p className="Text-Wordpress">D&apos;abord il faut savoir que tous les CMS se valent. chacun présente autant d&apos;avantages que d&apos;inconvénients. Aucun CMS n&apos;est meilleur que l&apos;autre. Il faut surtout auditer et bien réfléchir sur les tenants et les aboutissants de la création de votre site internet. Mais rassurez-vous WEBAGENCELILLE.COM ne fait pas que du WordPress, nous faisons aussi du Joomla , du Drupal et aussi du développement à base de framework comme Boostrap.</p>
                    <div className="Container-Wordpress-Button">
                        <Link to="/wordpress" className="Bouton-Rond">OK JE VEUX EN SAVOIR PLUS</Link>
                    </div>
                </div>
            </div>
            <div className='IllustrationSection'>
                    <img src={CutePic} alt='Illustration société' />
            </div>
        </div>
    );
}

export default cute;