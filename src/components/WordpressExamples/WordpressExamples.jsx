import './WordpressExamplesStyle.css';
import BbcIllustration from '../../assets/BBC-Illustration.png';
import RenaultIllustration from '../../assets/Renault-Illustration.png';
import FacebookIllustration from '../../assets/Facebook-Illustration.png';
import DassaultIllustration from '../../assets/Dassault-Illustration.png';

function wordpressExamples () {
    return (
        <div className='WordpressExamplesContainer'>
            <h1 className='WordpressExamplesTitle'>Voici Quelques Exemples De Site Internet De Marques Connues Faits Sur Wordpress</h1>
            <ul className='WordpressExamplesList'>
                <li>
                    <a href='https://www.bbcamerica.com' target='_blank' rel='noopener noreferrer'>
                        <div className='WordpressExamplesItem'>
                            <img src={BbcIllustration} alt="Eshop" />
                            <h3>BBC</h3>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.bbcamerica.com' target='_blank' rel='noopener noreferrer'>
                        <div className='WordpressExamplesItem'>
                            <img src={RenaultIllustration} alt="Eshop" />
                            <h3>Renault</h3>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.bbcamerica.com' target='_blank' rel='noopener noreferrer'>
                        <div className='WordpressExamplesItem'>
                            <img src={FacebookIllustration} alt="Eshop" />
                            <h3>Facebook newsroom</h3>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='https://www.bbcamerica.com' target='_blank' rel='noopener noreferrer'>
                        <div className='WordpressExamplesItem'>
                            <img src={DassaultIllustration} alt="Eshop" />
                            <h3>Dassault aviation</h3>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default wordpressExamples