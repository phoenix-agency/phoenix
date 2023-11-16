import agenceDigitalePic from '../../assets/CloseToC.png'
import './AgenceDigitale.css'

function agenceDigitale() {
    return (
        <div>
            <div className='Row MarginTopBottom'>
                <div className='ArticleContainer'>
                    <h1 className='Title'>Nous Sommes Une Agence De Communication Digitale À Lille</h1>
                    <p className='Text'>Passionnés Par Le Design Et Le Digital</p>
                    <button className='Button'>En savoir plus</button>
                </div>
                <img src={agenceDigitalePic} alt="agence digitale" />
            </div>
            <h2 className='Slogan'>Agence Communication Web Digitale À Lille SAS WEBAGENCELILLE.COM</h2>
        </div>
    )
}

export default agenceDigitale