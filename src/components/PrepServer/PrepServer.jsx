import PrepServerPic from '../../assets/PrepServerPic.png'
function prepServer() {
    return (
        <div className='ProcessusContainer'>
            <div className='IllustrationContainer'>
                <img src={PrepServerPic} alt="Illustration préparation serveur" />
            </div>
            <div className='NumberContainer'>
                5
            </div>
            <div className='ProcessusTextContainer'>
                <h2 className='ProcessusSubTitle'>Préparation serveur</h2>
                <p className='ProcessusText'>Nous préparons, sécurisons et optimisons votre serveur web pour la livraison de votre site web.</p>
            </div>
        </div>
    )
}

export default prepServer