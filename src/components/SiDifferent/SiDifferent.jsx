import { useState } from 'react';
import DifferencePic from '../../assets/DifferencePic.png';

function Sidifferents() {
	const [showText, setShowText] = useState([true, false, false, false]);

	const handleClick = (index) => {
		const updatedShowText = Array(4).fill(false);
		updatedShowText[index] = true;
		setShowText(updatedShowText);
	};

	const items = [
		'Nous sommes une équipe innovante',
		'Service entièrement intégré',
		'Contrat de maintenance au top',
		'Assistance et aide personnalisée',
	];

	const messages = [
		'Nous pourrons vous donner une vision inventive et originale afin de faire naître vos campagnes et créer une communication sur-mesure.',
		'Vous aurez votre interlocuteur, spécialiste personnel qui pourra vous suivre tout au long de votre projet de communication digitale.',
		'Profitez de notre nouvel outil : un portail web où vous pourrez suivre votre projet et déclarer un nouvel incident en temps réel.',
		"Webagencelille.com est réputée pour ses contrats de maintenance, qu'elle soit évolutive, préventive ou corrective. Nous pouvons garantir la pérennité de votre site internet.",
	];

	return (
		<div className='DifferenceContainer'>
			<div className='DifferencePresentation'>
				<h1 className='DifferenceTitle'>Ce Qui Nous Rend Si Différents</h1>
				<p className='DifferenceText'>
					Avec l&apos;arrivée perpétuelle de nouveaux concurrents, nous avons la
					satisfaction et cultivons la pérennité de vous proposer, à travers notre
					expertise, une écoute et des sites internet personnalisés grâce à notre approche
					novatrice de la conception Web.
				</p>
			</div>
			<div className='MenuContainer'>
				<ul className='MenuDeroulant'>
					{items.map((item, index) => (
						<li
							key={index}
							onClick={() => handleClick(index)}
							className={showText[index] ? 'selected menu-item' : 'menu-item'}>
							{item}
							{showText[index] && (
								<div className='TexteClique'>{messages[index]}</div>
							)}
						</li>
					))}
				</ul>
				<img src={DifferencePic} alt='illustration code' className='DifferenceImg' />
			</div>
		</div>
	);
}

export default Sidifferents;
