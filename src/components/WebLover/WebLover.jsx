import webLoverPic from '../../assets/ReaAgence.png'
function webLover() {
    return(
        <div>
            <div>
                <h1>Nous Aimons Les Défis</h1>
                <p>En plus du numérique nous avons une véritable passion pour les défis, nous aimons nous transcender.  </p>
                <p>Nous vous aiderons à sublimer votre projet.</p>
                <button>En savoir plus</button>
            </div>
            <div>
                <h1>Amoureux Du Numérique</h1>
                <p>Notre entreprise lilloise est passionnée par les dernières technologies (intelligence artificielle, système embarqué, conception de jeux-vidéo, réalité virtuelle, sécurité informatique, musique assistée par ordinateur), elles sont pour nous un incontournable pour la communication du 21ème siècle, c&apos;est pourquoi nous sommes en perpétuelle recherche et développement pour vous proposer le meilleur.</p>
            </div>
            <img src={webLoverPic} alt="illustration amoureux du digital" />
        </div>
    )
}

export default webLover