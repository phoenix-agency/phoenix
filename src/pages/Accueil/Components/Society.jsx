import '../AccueilStyle.css';
import SocietyPic from './ComponentsPic/Society.png';

function society() {
    return (
        <div className='SocietyContainer'>
            <div className='Presentation-FlexStart'>
                <h1 className='Title White'> Une Société qui ne s&apos;arrête jamais.</h1>
                <p className='Text White'>Nous adorons faire de belles choses. Notre but est de vous fournir tout ce dont vous avez besoin pour la communication digitale de votre entreprise, de la conception web en passant par le webmarketing. Nous serons votre renfort technique et technologique.</p>
                <button className='Button'>Découvrez ce que nous savons faire</button>
            </div>
            <img src={SocietyPic} alt="Illustration société"/>
        </div>
    )
}

export default society