import React, { useState } from 'react';
import './FormRDV.css';

const FormRDV = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateRDV: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer les données à votre backend ou gérer le rendez-vous
    console.log('Données du formulaire :', formData);
    // Réinitialisation du formulaire après soumission
    setFormData({
      fullName: '',
      email: '',
      dateRDV: '',
      message: ''
    });
  };

  return (
    <div  className='PageFormRDV w-full'>
      <h5>Vous souhaitez des conseils ?</h5>
      <h2>
        Inscrivez-vous sur ce calendrier pour <br/>
        demander votre rendez-vous et complétez <br/> 
        le formulaire qui suit.
      </h2>
    <form onSubmit={handleSubmit} className='FormRDV'>
      <label>
        Nom complet :
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="NomComplet"
        />
      </label>
      <br />
      <label>
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date du rendez-vous :
        <input
          type="date"
          name="dateRDV"
          value={formData.dateRDV}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit" className='buttonRDV'>Prendre rendez-vous</button>
    </form>
    <div className='ContactEtDispo1'>
    <h5>Vous n'avez pas besoin de conseils ?</h5>
    <h2>
      Contactez-nous directement si vous<br/>
      souhaitez un devis pour la création de<br/>
      votre site internet son référencement et sa <br/>
      sécurisation.
    </h2>
    </div>
    <div className='ContactEtDispo2'>
      <div>
        <h6>Téléphone</h6>
        <p>01 23 45 67 89</p>
        <p>+33 1 23 45 67 89</p>
      </div>
      <div>
        <h6>Email Adresse</h6>
        <p>sQrJt@example.com</p>
        <p>LsZ0T@example.com</p>
      </div>
      <div>
        <h6>Nos horraires</h6>
        <p>Lundi au Vedredi de 9h a 18h</p>
        <p>Samedi de 9h a 12h</p>
      </div>
    </div>
    </div>
  );
};

export default FormRDV;

