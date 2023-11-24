import EuroSign from "../../assets/svg/EuroSign"
import ShieldGreen from "../../assets/svg/ShieldGreen"
import "./ChooseUsStyle.css"

function chooseUs () {
    return (
        <div className="ChooseUsContainer">
            <h1 className="ChooseUsTitle">Pour Ne Plus Hésiter : Voici Ce Qui Peut Vous Permettre De Choisir Notre Entreprise Web Dès À Présent</h1>
            <div className="ChooseUsContent">
                <div>
                    <div className="ChooseUsTextContainer Border">
                        <EuroSign />
                        <h2 className="ChooseUsSubtitle WhiteColor">Nos tarifs et offres</h2>
                        <p className="ChooseUsText WhiteColor">Des forfaits adaptés à toute les bourses, cliquez sur le bouton ci-dessous pour en savoir plus.</p>
                    </div>
                    <div className="ChooseUsButtonContainer">
                        <button className="ChooseUsButton">TARIFS</button>
                    </div>
                </div>
                <div className="ChooseUsTextContainer WhiteBackground">
                    <ShieldGreen />
                    <h2 className="ChooseUsSubtitle GreenColor">Notre protocole de sécurité WALSP</h2>
                    <p className="ChooseUsText GreenColor">Un investissement viable et pérenne avec notre savoir faire en matière de sécurité informatique.</p>
                </div>
            </div>
        </div>
    )
}

export default chooseUs