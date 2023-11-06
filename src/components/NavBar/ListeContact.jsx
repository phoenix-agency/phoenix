import { Link } from 'react-router-dom';

export default function ListeContact() {
    return (
        <div className='ListeContact'>
            <Link to='/ContacterAgence'>Contacter l&apos;agence</Link>
            <Link to='/Depannage'>Demande de dépannage urgente</Link>
            <Link to='/Candidature'>Dépôt de candidature</Link>
        </div>
    );
}