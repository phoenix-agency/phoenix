import React from 'react'
import './Contacts.css'
import contacts from '../../assets/contacts.png'

export default function Contacts() {
  return (
    <div>
    <section className="ContactsHeader">
      <div className='Projets'>
      <h2>
        Restons en contact.<br />
        Présentez votre projet.
      </h2>
      <h3>
        Nos devis sont gratuits
      </h3>
      <p>
        Découvrir le formulaire
      </p>
      </div>
      <div className='ContactsImg'>
        <img src={contacts} alt="" />
      </div>
    </section>
    <section className="ContactsMain">
      </section>
      <section className="ContactsFooter">

      </section>
    </div>
  )
}
