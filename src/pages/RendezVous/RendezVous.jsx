import React from 'react'
import FormRDV from '../../components/FormRDV/FormRDV'
import './RendezVous.css'

export default function RendezVous() {
  return (
    <div>
    <div className='PageRendezVous bg-[#7C61D6]'>
      <div className="title"> 
        <h5>Nous Serons Heureux De Vous Aider</h5>
        <div>
        <p>UTILISEZ CE FORMULAIRE POUR DEMANDER UN RENDEZ-VOUS GRATUIT AVEC NOTRE AGENCE WEB</p>
        </div>
      </div>
      <div className="text">
        <p>
        Vous avez des doutes sur votre projet? Vous avez besoin de conseils gratuits pour la 
        mise en place de votre site internet e-commerce / vitrine? Nous sommes là pour vous 
        accompagner. Nous vous apporterons du conseil pour dynamiser votre chiffre d’affaire. 
        Notre entreprise du web couvre un large panel de prestations web.
        <br/>
        <br/>
        Deux options de rendez-vous s’offrent à vous : Un rendez-vous téléphonique ou une visioconférence.
        </p>
      </div>
    </div>
      <div>
      <FormRDV/>
      </div>
    </div>
  )
}
