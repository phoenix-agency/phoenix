import DifferencePic from './ComponentsPic/DifferencePic.png'
function sidifferents() {
    return (
        <div className="DifferenceContainer">
            <ul className='MenuDeroulant'>
                <li>Nous sommes une équipe innovante</li>
                <li>Service entièrement intégré</li>
                <li>Contrat de maintenance au top</li>
                <li>Assitance et aide personnalisée</li>
            </ul>
            <img src={DifferencePic} alt="illustration code" className='DifferenceImg'/>
        </div>
    )
}

export default sidifferents