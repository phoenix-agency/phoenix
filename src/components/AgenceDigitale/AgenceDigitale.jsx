import agenceDigitalePic from '../../assets/CloseToC.png'
import './AgenceDigitaleStyle.css'
function agenceDigitale() {
    return (
        <div>
            <div className='DigitalAgencyArticle'>
                <div className='DigitalAgencyPresentation'>
                    <h1 className='TitleAgency'>Nous Sommes Une Agence De Communication Digitale À Lille</h1>
                    <p className='Text'>Passionnés Par Le Design Et Le Digital</p>
                    <button className='ButtonPurple'>En savoir plus</button>
                </div>
                <img src={agenceDigitalePic} alt="agence digitale" />
            </div>
            <h2 className='SloganDigital'>Agence Communication Web Digitale À Lille SAS WEBAGENCELILLE.COM</h2>
        </div>
    )
}

export default agenceDigitale