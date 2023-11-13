import CloseButton from "../../assets/svg/CloseButton"
import Loupe from "../../assets/svg/Loupe"
import  "./ResearchStyle.css"

function Research () {
    return (
        <div className="Research-Container">
            <ul className="Research">
                <li className="Research-Close"><CloseButton /></li>
                <li className="Research-box">
                    <input className="Research-Holder" placeholder="Recherche" />
                    <Loupe/>
                </li>
            </ul>
        </div>
    )
}

export default Research