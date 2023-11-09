import partnerPic from './ComponentsPic/Partner.png'

export default function partner() {
  return (
    <div  className='PartnerContainer'>
        <div className='Presentation-FlexStart MediumWidth'>
            <h1 className='Title Blue'>Votre véritable partenaire de business</h1>
            <p className='Text Grey'>Nous créons des sites web avec des fonctionnalités qui vous permettront de proposer à vos prospects des réponses concrètes à leurs recherches. En plus d&apos;un référencement naturel pertinent nous sécurisons tous les échanges entre vos visiteurs et votre site internet. Ainsi votre marque ou votre entreprise sera reconnue pour sa qualité.</p>
        </div>
        <div>
            <img src={partnerPic} alt="Illustration partenaire" />
        </div>
    </div>
  )
}
