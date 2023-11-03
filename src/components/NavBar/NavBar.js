import React from 'react'

import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/presentation">Présentation</Link>
      </li>
      <li>
        <Link to="/prestations">Prestations</Link>
      </li>
      <li>
        <Link to="/realisations">Réalisations</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  </nav>
  )
}
