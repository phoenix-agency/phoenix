import CutePic from "./../../assets/CutePic.png";
import ChiffreQuatre from "./../../assets/ChiffreDeux.png";
import BoutonRond from "./../../assets/svg/BoutonRond";

function cute() {
    return (
        <div className="Container-Wordpress Title-Row-Reverse">
            <div className="Wordpress-Container-Text">
                <div>
                    <img src={ChiffreQuatre} alt='Illustration chiffre deux' className='Chiffre-Wordpress' />
                </div>
                <div className="Presentation-Wordpress">
                    <h1 className="Title-Wordpress">WordPress : une technologie accessible mais qui demande des connaissances en développement web.</h1>
                    <p className="Text-Wordpress">Nous sommes bien conscients qu&apos;aujourd&apos;hui avec le web, vous pouvez facilement trouver des tutos pour faire vous-même votre site internet. Cependant WordPress reste un outil qui est peu optimisé et sécurisé, faisant ainsi ralentir la vitesse d&apos;affichage de votre site internet et permettant aux hackers de prendre le contrôle des données de vos clients. C&apos;est la raison pour laquelle, avec notre agence web de Lille, nous avons spécialement mis en place diverses stratégies qui permettent d&apos;accélérer et d&apos;optimiser considérablement le chargement de votre code source.</p>
                    <div className="Container-Wordpress-Button">
                        <BoutonRond />        
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