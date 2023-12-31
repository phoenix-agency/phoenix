import ReaPic from '../../assets/ReaAgence.png';
function reaagence() {
	return (
		<div className='ReaAgenceContainer'>
			<img src={ReaPic} alt='illustration realisation agence' className='ReaPic' />
			<div className='ReaPresentation'>
				<p className='ReaTitle'>
					Découvrez Les Réalisations Web De Votre Agence Web De Lille
				</p>
				<p className='ReaText'>
					Nous avons créé des sites internet qui répondent à de nouveaux critères
					technologiques de pointe dont le but est de connecter vos futurs prospects avec
					votre entreprise.
				</p>
				<button className='ReaDiscoverButton'>Ouvrir le Portfolio</button>
			</div>
		</div>
	);
}

export default reaagence;
