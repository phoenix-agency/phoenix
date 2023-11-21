import RefSeoPic from '../../assets/RefSeoPic.png'
function refSeo() {
    return (
        <div className='ProcessusContainer Inverse'>
            <div className='IllustrationContainer'>
                <img src={RefSeoPic} alt="Illustration Référencement SEO" />
            </div>
            <div className='NumberContainer'>
                4
            </div>
            <div className='ProcessusTextContainer TextAlignRight'>
                <h2 className='ProcessusSubTitle'>Référencement SEO</h2>
                <p className='ProcessusText'>Nous ajoutons votre référencement et optimisons votre site internet conformément aux normes de référencement Google.</p>
            </div>
        </div>
    )
}

export default refSeo