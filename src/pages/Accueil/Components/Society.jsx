import '../AccueilStyle.css';
import SocietyPic from './ComponentsPic/Society.png';

function society() {
    return (
        <div className='SocietyContainer'>
            <div className='SocietyPresentation'>
                <p className='SocietyTitle'> Une Société qui ne s&apos;arrête jamais.</p>
                <p className='SocietyText'>Nous adorons faire de belles choses. Notre but est de vous fournir tout ce dont vous avez besoin pour la communication digitale de votre entreprise, de la conception web en passant par le webmarketing. Nous serons votre renfort technique et technologique.</p>
                <button className='DiscoverButton'>Découvrez ce que nous savons faire</button>
            </div>
            <div>
                <img src={SocietyPic} alt="SocietyPic" />
            </div>
        </div>
    )
}

export default society