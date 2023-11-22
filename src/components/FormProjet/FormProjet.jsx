import React, { useState } from "react";
import "./FormProjet.css";


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
        <div class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
         dark:bg-neutral-700">
            <form 
                onSubmit={handleSubmit}
                className="FormProjet"
            >
                    <label
                        className="">
                        <input
                            placeholder="Nom"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            id="exampleInput7"
                            className="bg-slate-100 border-0 "
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
                            id="exampleInput7"
                            className="bg-slate-100 border-0"
                            required="required"
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            placeholder="Dénomination sociale"
                            name="entreprise"
                            value={formData.entreprise}
                            onChange={handleChange}
                            id="exampleInput7"
                            className="bg-slate-100 border-0"
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
                            id="exampleInput7"
                            className="bg-slate-100 border-0"
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
                            id="exampleInput7"
                            className="bg-slate-100 border-0"
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
                            id="exampleInput7"
                            className="bg-slate-100 border-0"
                            required="required"
                        />
                    </label>
                    <label >
                        <textarea
                            type="text"
                            placeholder="Projet"
                            name="projet"
                            value={formData.projet}
                            onChange={handleChange}
                            className="border-zinc-400 bg-slate-100" 
                            required="required"
                        />
                    </label>
                    <label>
                        <input
                            type="file"
                            placeholder="Ajouter un fichier"
                            name="file"
                            onChange={handleChange}
                            className="bg-slate-100 border-0"
                        />
                    </label>
                <br />
                <div className=""> 
                <button 
                    type="submit"
                    
                    >Envoyer</button>
                </div>
            </form>  
        </div>
    )
};

export default FormProjet