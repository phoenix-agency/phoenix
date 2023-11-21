import './ProcessusStyle.css'
import Maquette from "../Maquette/Maquette"
import Developpement from "../Developpement/Developpement"
import Integration from "../Integration/Integration"
import RefSeo from "../RefSeo/RefSeo"
import PrepServer from "../PrepServer/PrepServer"
import Delivery from "../Delivery/Delivery"
function processus() {
    return (
        <div>
            <h1 className="ProcessusTitle">Notre Processus De Conception De Site Internet WordPress</h1>
            <Maquette />
            <Developpement />
            <Integration />
            <RefSeo />
            <PrepServer />
            <Delivery />
        </div>
    )
}

export default processus