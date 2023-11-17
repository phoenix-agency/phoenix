import webLoverPic from '../../assets/ReaAgence.png'
import './WebLoverStyle.css'

function webLover() {
    return(
        <div className='WebLoverContainer'>
            <div className='DigitalLover'>
                <h1 className='TitlePurple'>Nous Aimons Les Défis</h1>
                <p className='Text'>En plus du numérique nous avons une véritable passion pour les défis, nous aimons nous transcender.  </p>
                <p className='Text'>Nous vous aiderons à sublimer votre projet.</p>
                <button className='ButtonPurple'>En savoir plus</button>
            </div>
            <div className='DigitalLover'>
                <h1 className='TitleGreen'>Amoureux Du Numérique</h1>
                <p className='Text'>Notre entreprise lilloise est passionnée par les dernières technologies (intelligence artificielle, système embarqué, conception de jeux-vidéo, réalité virtuelle, sécurité informatique, musique assistée par ordinateur), elles sont pour nous un incontournable pour la communication du 21ème siècle, c&apos;est pourquoi nous sommes en perpétuelle recherche et développement pour vous proposer le meilleur.</p>
            </div>
            <img src={webLoverPic} alt="illustration amoureux du digital" />
        </div>
    )
}

export default webLover