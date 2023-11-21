import DeveloppementPic from '../../assets/DeveloppementPic.png'
function developpement() {
    return (
        <div className='ProcessusContainer Inverse'>
            <div className='IllustrationContainer'>
                <img src={DeveloppementPic} alt="Illustration Developpement" />
            </div>
            <div className='NumberContainer'>
                2
            </div>
            <div className='ProcessusTextContainer TextAlignRight'>
                <h2 className='ProcessusSubTitle'>Développement</h2>
                <p className='ProcessusText'>En fonction du cahier des charges, nous développons les différentes parties et fonctionnalités de votre site internet.</p>
            </div>
        </div>
    )
}

export default developpement