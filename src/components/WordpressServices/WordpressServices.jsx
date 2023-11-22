import Layers from "./../../assets/svg/Layers"
import Plume from "./../../assets/svg/Plume"
import Puzzle from "./../../assets/svg/Puzzle"
import World from "./../../assets/svg/World"
import ShieldWhite from "./../../assets/svg/ShieldWhite"
import ToolBox from "./../../assets/svg/ToolBox"
import "./WordpressServicesStyle.css"
function wordpressServices() {
    return (
        <div className="WordpressServicesContainer">
            <h1 className="WordpressServicesTitle">Nos services WordPress</h1>
            <div className="WordpressServicesList">
                <div className="WordpressServicesDetails WordpressServicesBorder">
                    <Layers />
                    <h2 className="WordpressServicesSubTitle">Installation Et Préparation</h2>
                    <p className="WordpressServicesText">Nous installons et configurons votre site internet sur votre serveur web et votre base de données.</p>
                </div>
                <div className="WordpressServicesDetails">
                    <Plume />
                    <h2 className="WordpressServicesSubTitle">Intégration Et Création De Contenus</h2>
                    <p className="WordpressServicesText">Nous proposons le service d&apos;intégration de contenus pour les entreprises qui n&apos;ont pas le temps de créer et/ou de gérer leur site internet.</p>
                </div>
                <div className="WordpressServicesDetails WordpressServicesBorder">
                    <Puzzle />
                    <h2 className="WordpressServicesSubTitle">Ajout De Fonctionnalités</h2>
                    <p className="WordpressServicesText">Vous souhaitez refondre votre site internet ou lui ajouter des fonctionnalités ? Nous sommes prêts à transformer vos désirs en réalités.</p>
                </div>
            </div>
            <div className="WordpressServicesList">
                <div className="WordpressServicesDetails">
                    <World />
                    <h2 className="WordpressServicesSubTitle">Référencement Naturel WordPress SEO</h2>
                    <p className="WordpressServicesText">Nous aidons les propriétaires de sites Web à améliorer la visibilité de leur site Web ou de leur blog dans les moteurs de recherche comme Google.</p>
                </div>
                <div className="WordpressServicesDetails WordpressServicesBorder">
                    <ShieldWhite />
                    <h2 className="WordpressServicesSubTitle">Votre Site WordPress Hautement Sécurisé</h2>
                    <p className="WordpressServicesText">La sécurisation est vitale pour le bon déroulement de votre entreprise. C&apos;est un travail complexe mais rentable pour votre site internet et les données qu&apos;il contient.</p>
                </div>
                <div className="WordpressServicesDetails">
                    <ToolBox />
                    <h2 className="WordpressServicesSubTitle">Réparation De Votre Site WordPress</h2>
                    <p className="WordpressServicesText">Votre site internet est tombé en panne ? Il affiche une page blanche ? Plus rien ne fonctionne ? Nous vous aidons à le remettre sur pied.</p>
                </div>
            </div>
        </div>
    )
}

export default wordpressServices