import MaquettePic from '../../assets/MaquettePic.png'
function maquette() {
    return (
        <div className='ProcessusContainer'>
            <div className='IllustrationContainer'>
                <img src={MaquettePic} alt="Illustration maquette" />
            </div>
            <div className='NumberContainer'>
                1
            </div>
            <div className='ProcessusTextContainer'>
                <h2 className='ProcessusSubTitle'>Maquette</h2>
                <p className='ProcessusText'>Nous préparons sur notre serveur de production une maquette de votre site internet vous pourrez la consulter en temps réel.</p>
            </div>
        </div>
    )
}

export default maquette