import IntegrationPic from '../../assets/IntegrationPic.png'
function integration() {
    return (
        <div className='ProcessusContainer'>
            <div className='IllustrationContainer'>
                <img src={IntegrationPic} alt="Illustration intégration" />
            </div>
            <div className='NumberContainer'>
                3
            </div>
            <div className='ProcessusTextContainer'>
                <h2 className='ProcessusSubTitle'>Intégration</h2>
                <p className='ProcessusText'>Nous préparons et intégrons le contenu de votre site internet (textes, images, vidéos, sons ...)</p>
            </div>
        </div>
    )
}

export default integration