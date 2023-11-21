import { Link } from "react-router-dom";
import WordpressExpertPic from "./../../assets/WordpressExpert.png";
import "./WordpressExpert.css";

function WordpressExpert() {
	return (
		<div className="WordpressContainer">
			<div className="WordpressTextContainer">
				<div className="WordpressPresentation">
                    <h1 className="WordpressTitle"> Agence web experte WordPress à Lille.</h1>
                    <p className="WordpressText">Vous recherchez une agence web experte en C.M.S WordPress pour votre projet web ? Vous nous avez trouvés sur internet 😉</p>
                    <div className="WordpressButtonContainer">
                        <button className='WordpressButton WordpressPurple'>En savoir plus</button>
                        <Link to="/contacts"><button className='DiscoverButton'>Nous contacter</button></Link>             
                    </div>
                </div>
                <div>
                    <img src={WordpressExpertPic} alt='Illustration société' className='Expert en Wordpress' />
                </div>
			</div>
            <h2 className="WordpressSlogan">SAS WEBAGENCELILLE.COM Agence Web Experte En WordPress : Conception De Site Internet Pour Les Entreprises À Lille</h2>
		</div>
	);
}

export default WordpressExpert;
