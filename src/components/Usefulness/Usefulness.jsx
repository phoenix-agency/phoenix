import UsefulnessPic from "./../../assets/UsefulnessPic.png";
import ChiffreTrois from "./../../assets/ChiffreTrois.png";
import BoutonRond from "./../../assets/svg/BoutonRond";

function wordpress() {
    return (
        <div className="Container-Wordpress">
            <div className="Wordpress-Container-Text">
                <div>
                    <img src={ChiffreTrois} alt='Illustration chiffre un' className='Chiffre-Wordpress' />
                </div>
                <div className="Presentation-Wordpress">
                    <h1 className="Title-Wordpress">D&apos;accord, mais à quoi peut bien me servir d&apos;avoir un site internet optimisé pour mon entreprise ?</h1>
                    <p className="Text-Wordpress">Avoir un site internet beau c&apos;est bien mais visible c&apos;est mieux. C&apos;est pourquoi nous proposons pour nos clients une prestation de référencement naturel. Sans lui, votre site internet serait complètement perdu parmi tous les sites internet de vos concurrents. Le référencement sur un site internet qui n&apos;est pas optimisé ne sert à rien. Voilà pourquoi vous avez besoin d&apos;avoir un site internet rapide et sécurisé pour pouvoir bénéficier d&apos;un bonus de référencement dans les résultats de Google, Bing et Yahoo.</p>
                    <div className="Container-Wordpress-Button">
                        <BoutonRond />  
                    </div>
                </div>
            </div>
            <div className='IllustrationSection'>
                    <img src={UsefulnessPic} alt='Illustration société' />
            </div>
        </div>
    );
}

export default wordpress;