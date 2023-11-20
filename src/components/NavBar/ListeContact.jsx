import { Link } from 'react-router-dom';

export default function ListeContact() {
    return (
        <ul className='ListeContact'>
            <li><Link to='/ContacterAgence' className='Text Grey'>Contacter l&apos;agence</Link></li>
            <li><Link to='/Depannage'>Demande de dépannage urgente</Link></li>
            <li><Link to='/Candidature'>Dépôt de candidature</Link></li>          
        </ul>
    );
}