import partnerPic from '../../assets/Partner.png';

export default function partner() {
	return (
		<div>
			<div className='PartnerContainer'>
				<div className='PartnerPresentation'>
					<h1>Votre véritable partenaire de business</h1>
					<p>
						Nous créons des sites web avec des fonctionnalités qui vous permettront de
						proposer à vos prospects des réponses concrètes à leurs recherches. En plus
						d&apos;un référencement naturel pertinent nous sécurisons tous les échanges entre
						vos visiteurs et votre site internet. Ainsi votre marque ou votre entreprise
						sera reconnue pour sa qualité.
					</p>
				</div>
				<div className='PartnerImgContainer'>
					<img src={partnerPic} alt='PartnerImg' />
				</div>
			</div>
		</div>
	);
}
