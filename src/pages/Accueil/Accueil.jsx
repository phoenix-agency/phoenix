import NosClients from '../../components/Home/NosClients';
import Society from '../../components/Society/Society.jsx';
import CloseToC from '../../components/CloseToC/CloseToC.jsx';
import Partner from '../../components/Partner/Partner.jsx';
import Responsive from '../../components/Responsive/Responsive.jsx';
import NosPrestations from '../../components/Home/NosPrestations.jsx';
import SiDifferent from '../../components/SiDifferent/SiDifferent.jsx';
import ReaAgence from '../../components/ReaAgence/ReaAgence.jsx';

export default function Accueil() {
	return (
		<div>
			<Society />
			<CloseToC />
			<SiDifferent />
			<ReaAgence />
			<NosPrestations />
			<Partner />
			<Responsive />
			<NosClients />
		</div>
	);
}
