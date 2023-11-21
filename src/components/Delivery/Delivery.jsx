import DeliveryPic from '../../assets/DeliveryPic.png'
function delivery() {
    return (
        <div className='ProcessusContainer Inverse'>
            <div className='IllustrationContainer'>
                <img src={DeliveryPic} alt="Illustration livraison" />
            </div>
            <div className='NumberContainer'>
                6
            </div>
            <div className='ProcessusTextContainer TextAlignRight'>
                <h2 className='ProcessusSubTitle'>Livraison</h2>
                <p className='ProcessusText'>Voilà c&apos;est fini : votre site est livré !</p>
            </div>
        </div>
    )
}

export default delivery