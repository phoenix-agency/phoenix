import React, { useState } from 'react';
import './FormCandidature.css';

const FormCandidature = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    cv: null
  });

  const handleChange = (e) => {
    if (e.target.name === 'cv') {
      setFormData({ ...formData, cv: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire :', formData);
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      cv: null
    });
  };

  return (
    <div>
       <div className='FormHead'>
        <div className='Saisie'>
          1 Saisie des informations
        </div>
        <div className='Envoi'>
          2 Envoi de la candidature
        </div>
      </div>
    <form onSubmit={handleSubmit}>
      <div className="form-id">
      <label>
        <select name="civilite" required="required" value={formData.civilite} onChange={handleChange}>
          <option value="">Civilité</option>
          <option value="Monsieur">M.</option>
          <option value="Madame">Mme</option>
          <option value="Mademoiselle">Mlle</option>
        </select>
      </label>
      <label>
        <input
        placeholder='Prénom'
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required="required"
        />
      </label>
      <label>
        <input
          placeholder='Nom'
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required="required"
        />
      </label>
      </div>
      <br />
      <div className="form-contact">
      <label>
        Email :
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required="required"
        />
      </label>
      <br />
      <label>
        Téléphone :
        <br />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required="required"
        />
      </label>
      </div>
      <br />
      <div className="form-cv">
      <label>
        CV (Téléchargement) :
        <input
          type="file"
          name="cv"
          onChange={handleChange}
          required="required"
        />
      </label>
      </div>
      <br />
      <button className="form-button" type="submit">Soumettre la candidature</button>
    </form> 
    
    </div>
  );
};

export default FormCandidature;
