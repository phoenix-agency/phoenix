import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className='bg-white'>
      <label>
        Nom complet :
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
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
          type="datetime-local"
          name="dateRDV"
          value={formData.dateRDV}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Message :
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Prendre rendez-vous</button>
    </form>
  );
};

export default FormRDV;

