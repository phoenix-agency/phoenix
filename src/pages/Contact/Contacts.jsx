import React from "react";
import "./Contacts.css";
import contacts from "../../assets/contacts.png";
import ButtonCandidat from "../../components/buttonCandidat/buttonCandidat";
import FormProjet from "../../components/FormProjet/FormProjet";

export default function Contacts() {
  return (
    <div>
      <section className="ContactsHeader">
        <div className="Projets">
          <h2>
            Restons en contact.
            <br />
            Présentez votre projet.
          </h2>
          <h3>Nos devis sont gratuits</h3>
          <p>Découvrir le formulaire</p>
        </div>
        <div className="ContactsImg">
          <img src={contacts} alt="" />
        </div>
      </section>
      <section className="ContactsMain">
        <h2>
          Contactez Votre Agence Web Webagencelille.Com Pour Un Devis Gratuit De
          Refonte / Création De Site Internet / Maintenance / Cyber-Securite /
          Audit Informatique
        </h2>
        <div className="ContactsMainDiv">
          <div className="ProjetFrom">
            <FormProjet />
          </div>
          <div className="Right">
            <div className="ProjetText">
              <h3>Vous souhaitez nous partager votre Projet?</h3>
              <h4>Remplissez ce formulaire pour nous déposer votre projet</h4>
              <h5>Nous vous répondrons très rapidement</h5>
            </div>
            <div className="CandidatureText">
              <h3>Comment déposer sa candidature?</h3>
              <p>
                Pour toutes demandes de stages merci d’utiliser directement
                notre portail de dépôt de candidature disponible à cette adresse
                http://webagencelille.com/stage-webdesign-developpeur-web-communication-referencement-a-lille
                ou dans la rubrique Outils. Si vous utilisez ce formulaire votre
                email sera directement détruit N'utilisez pas non plus la boîte
                mail hello@webagencelille.com ! vous recherchez un stage alors
                utilisez la boîte mail candidature@webagencelille.com
              </p>
              <div className="CandidatureButton">
                <ButtonCandidat />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ContactsFooter"></section>
    </div>
  );
}
