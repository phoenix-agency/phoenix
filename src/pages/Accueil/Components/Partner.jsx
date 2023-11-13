import partnerPic from './ComponentsPic/Partner.png'

export default function partner() {
  return (
    <div className='elementor-container elementor-column-gap-default' >
      <div className='elementor-row'>
        <div className='PartnerContainer'>
            <h1>Votre véritable partenaire de business</h1>
            <p>
            Nous créons des sites web avec des fonctionnalités qui vous permettront de 
            proposer à vos prospects des réponses concrètes à leurs recherches. 
            En plus d’un référencement naturel pertinent nous sécurisons tous les échanges 
            entre vos visiteurs et votre site internet. Ainsi votre marque ou votre entreprise 
            sera reconnue pour sa qualité.
            </p>
        </div>
        <div>
            <img src={partnerPic} alt="Illustration partenaire" />
        </div>
    </div>
  )
}
