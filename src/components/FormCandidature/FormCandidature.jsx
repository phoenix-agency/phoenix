import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Prénom :
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Nom :
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Adresse :
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Téléphone :
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        CV (Téléchargement) :
        <input
          type="file"
          name="cv"
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Soumettre la candidature</button>
    </form>
  );
};

export default FormCandidature;
