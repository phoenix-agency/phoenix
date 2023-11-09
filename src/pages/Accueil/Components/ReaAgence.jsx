import ReaPic from "./ComponentsPic/ReaAgence.png"
function reaagence() {
    return (
        <div className='ReaAgenceContainer'>
            <img src={ReaPic} alt="illustration realisation agence"/>
            <div className="Presentation-FlexStart SmallWidth">
                <h1 className='Title Blue'>Découvrez Les Réalisations Web De Votre Agence Web De Lille</h1>
                <p className='Text Grey MarginText'>Nous avons créé des sites internet qui répondent à de nouveaux critères technologiques de pointe dont le but est de connecter vos futurs prospects avec votre entreprise.</p>
                <button className="Button">Ouvrir le Portfolio</button>
            </div>
        </div>
    )
}

export default reaagence