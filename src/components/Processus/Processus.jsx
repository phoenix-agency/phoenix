import './ProcessusStyle.css'
import Maquette from "../Maquette/Maquette"
import Developpement from "../Developpement/Developpement"
function processus() {
    return (
        <div>
            <h1 className="ProcessusTitle">Notre Processus De Conception De Site Internet WordPress</h1>
            <Maquette />
            <Developpement />
        </div>
    )
}

export default processus