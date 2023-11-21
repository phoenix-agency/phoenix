import React, { useState } from "react";
// import "./FormProjet.css";


const FormProjet = () => {
    const [formData, setFormData] = useState({
        //initialisation des valeurs
        firstName: "",
        lastName: "",
        phone: "",
        entreprise: "",
        siret: "",
        email: "",
        projet: "",
        file: null
    });

    //Fonction pour mettre a jour le state lors de la saisie de l'utilisateur
     const handleChange = (e) => {
        if (e.target.name === "file") {
            setFormData({ ...formData, file: e.target.files[0] });
        } else {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        }
    };
     
    //Fonction pour envoyer le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données du formulaire :", formData);
        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            entreprise: "",
            siret: "",
            email: "",
            projet: "",
            file: null
        });
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            placeholder="Nom"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required="required"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Prénom"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required="required"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Déomination sociale"
                            name="entreprise"
                            value={formData.entreprise}
                            onChange={handleChange}
                            required="required"
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required="required"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Téléphone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required="required"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Siret"
                            name="siret"
                            value={formData.siret}
                            onChange={handleChange}
                            required="required"
                        />
                    </label>
                    <label>
                        <input
                            type="file"
                            placeholder="Ajouter un fichier"
                            name="file"
                            onChange={handleChange}
                            required="required"
                        />
                    </label>
                <br />
                <button type="submit">Envoyer</button>
            </form>  
        </div>
    )
};

export default FormProjet