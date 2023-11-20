import CmsPic from "./../../assets/CmsPic.png";
import ChiffreUn from "./../../assets/ChiffreUn.png";
import BoutonRond from "./../../assets/svg/BoutonRond";

function wordpress() {
    return (
        <div className="Container-Wordpress">
            <div className="Wordpress-Container-Text">
                <div>
                    <img src={ChiffreUn} alt='Illustration chiffre un' className='Chiffre-Wordpress' />
                </div>
                <div className="Presentation-Wordpress">
                    <h1 className="Title-Wordpress">Qu&apos;est-ce qu&apos;un CMS ?</h1>
                    <p className="Text-Wordpress">Un CMS, ou système de gestion de contenu, est un outil qui vous permet de gérer le contenu de votre site de manière indépendante. WordPress est flexible, hautement personnalisable, super convivial, et il est un excellent système de gestion de contenu (CMS). En mettant à votre disposition un CMS comme WordPress nous augmentons la durée de vie de votre site internet, car vous pourrez toujours ajouter du contenu, vous pourrez facilement refondre vos sites internet dans les années à venir, vous pourrez même ajouter des nouvelles fonctionnalités quand vous le souhaiterez. Au lieu de vous proposer un développement web statique par le biais de la création de site internet “en dur” qui ne permet pas de le modifier, d’ajouter ou même de changer les couleurs aussi facilement, nous avons préféré proposer pour les entreprises de la région du Nord-Pas-De-Calais une technologie robuste et évolutive.</p>
                    <div className="Container-Wordpress-Button">
                        <BoutonRond />        
                    </div>
                </div>
            </div>
            <div>
                    <img src={CmsPic} alt='Illustration société' className='IllustrationSection' />
            </div>
        </div>
    );
}

export default wordpress;