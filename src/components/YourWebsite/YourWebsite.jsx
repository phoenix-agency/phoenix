import YourWebsitePic from "./../../assets/WordpressExpert.png";
import "./YourWebsiteStyle.css";
import { Link } from "react-router-dom";
function yourWebsite() {
    return (
        <div className="YourWebsiteContainer">
            <div className="YourWebsiteContent">
                <div className="YourWebsitePresentation">
                    <h1 className="YourWebsiteTitle">Votre site internet WordPress pour votre entreprise</h1>
                    <p className="YourWebsiteText">Vous voilà maintenant propriétaire de votre site internet WordPress totalement sur-mesure, optimisé, personnalisé et sécurisé. Votre site est rapide et compatible sur tous les supports (conception de site internet responsive design). Grâce au référencement naturel, votre site internet apparaît en plus sur les bons résultats. Voilà pourquoi il vous faut un professionnel du web aguerri pour vous accompagner. Vous n’allez tout de même pas négliger la communication de votre société ? Votre site internet est le reflet de votre entreprise. Ne vous inquiétez pas, nous sommes là pour vous accompagner, vous conseiller. C’est aussi ça notre éthique et notre métier : Faire en sorte que toutes les entreprises puissent se faire connaitre sur internet. Tous nos clients sont entièrement satisfaits de notre travail. Qu’attendez-vous pour nous contacter ?</p>
                    <Link to="/contacts"><button className='YourWebsiteButton'>NOUS CONTACTER</button></Link>  
                </div>
                <div>
                    <img src={YourWebsitePic} alt='Illustration sites internet' />
                </div>
            </div>
        </div>
    )
}

export default yourWebsite