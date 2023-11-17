import './HiddenFaceStyle.css'
import HiddenFacePic from './../../assets/HiddenFace.png';
import Bubble from '../../assets/svg/Bubble';
import Shield from '../../assets/svg/Shield';
import Admin from '../../assets/svg/Admin';
import Carry from '../../assets/svg/Carry';
function hiddenFace() {
    return (
        <div className='Margin10'>
            <div className='HiddenFacePresentation'>
                <p className='Text'>DÉCOUVREZ NOTRE PHILOSOPHIE</p>
                <h1 className='PresentationTitle'>La Face Cachée De Votre Succès</h1>
                <p className='Text'>Sans elle nous ne pourrions faire mieux</p>
            </div>
            <div className='HiddenFaceDetails'>
                <div>
                    <p className='ParagrapheHiddenFace'>Webagencelille.com est plus qu&apos;une agence web lilloise, elle est aussi votre partenaire en business riche de plusieurs domaines de compétence dans le numérique. Nous avons pour mission de faire connaître votre projet entrepreneurial, votre entreprise et vos produits. Nous avons réuni pour vous les meilleurs produits professionnels du marketing qui vous permettront soit d&apos;avoir de nouveaux prospects, soit de fidéliser votre clientèle.
                        Notre particularité est que nous sommes spécialisés dans la sécurité informatique. Toutes nos créations de sites internet bénéficient des meilleurs systèmes de sécurité pour un web économique et durable.</p>
                    <h2 className='ParagrapheHiddenFace HiddenFaceSubTitle'>La philosophie de votre agence de communication digitale de Lille</h2>
                    <p className='ParagrapheHiddenFace'>Notre philosophie est de créer le site Web qui reflète l&apos;image de marque de votre entreprise à la perfection. A la fois faciles à trouver, élégantes et attrayantes, nos créations de sites internet bénéficient d&apos;une optimisation maximale permettant un chargement rapide et dotées d&apos;un protocole de sécurité maison.
                        Chacun de nos clients bénéficie d&apos;un suivi et d&apos;une écoute sur-mesure. Nous vous accompagnons en permanence, dans vos démarches de transition digitale.</p>
                </div>
                <img src={HiddenFacePic} alt="illustration" className='HiddenFacePic'/>
            </div>
            <div className='HiddenFaceMissions ParagrapheHiddenFace'>
                <h2 className='ParagrapheHiddenFace HiddenFaceSubTitle'>Notre Mission</h2>
                <ul>
                    <li className='MissionsDetails'>
                        <Bubble />
                        <p className='Margin2'>Faire connaître votre entreprise sur internet par le biais d&apos;un ou plusieurs canaux de diffusion (site internet vitrine, blog, réseaux sociaux, campagnes par le biais du référencement naturel ou des publicités sur les réseaux sociaux).</p>
                    </li>
                    <li className='MissionsDetails'>
                        <Shield />
                        <p className='Margin2'>Protéger votre site internet et votre serveur web des attaques informatiques malveillantes afin de pérenniser votre activité sur le net.</p>
                    </li>
                    <li className='MissionsDetails'>
                        <Admin />
                        <p className='Margin2'>Nos administrateurs système sont experts dans le domaine de la sécurité informatique appelé aussi cyber-sécurité.</p>
                    </li>
                    <li className='MissionsDetails'>
                        <Carry />
                        <p className='Margin2'>Vous sensibiliser sur le domaine du numérique au travers de nombreux conseils afin de vous accompagner dans votre transformation digitale.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default hiddenFace