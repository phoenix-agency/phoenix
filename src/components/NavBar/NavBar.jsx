import React from 'react';

import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className='bg-red-500'>
			<ul>
				<Link to='/'>LOGO</Link>

				<Link to='/'>Accueil</Link>

				<Link to='/presentation'>Présentation</Link>

				<Link to='/prestations'>Prestations</Link>

				<Link to='/realisations'>Réalisations</Link>

				<Link to='/contacts'>Contacts</Link>
			</ul>
		</nav>
	);
}
