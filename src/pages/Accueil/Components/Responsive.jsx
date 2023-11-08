import React from 'react'
import responsivePic from './ComponentsPic/Responsive.png'

export default function responsive() {
  return (
    <div>
        <div>
            <h1>Conception De Site Internet Responsive Design À Lille 3 En 1</h1>
            <h3> site internet opérationnel à la fois sur mobile, ordinateur & tablette</h3>
        </div>
        <div>
            <div>
                <h2>Développement Premium</h2>
                <p>
                    Nous prêtons une attention particulière à la conception de pointe et les normes 
                    d'utilisabilité modernes.
                </p>
            </div>
            <div>
                <h2>Cross Plateform & Responsive Design</h2>
                <p>
                    Nos sites internet responsive design s'adaptent librement et efficacement 
                    sur tous les périphériques de n'importe qu'elle marque.
                </p>
            </div>
            <div>
                <h2>
                    Optimisation Accrue
                </h2>
                <p>
                    Nous avons mis en place une stratégie qui permet à nos conceptions web d'accélérer 
                    efficacement l'affichage de votre site internet.
                </p>
            </div>
        </div>
        <div>
            <img src= {responsivePic} alt="Responsive" />
        </div>
        <div>
            <div>
                <h2>
                    Compatible Iphone , Android & Windows Phone
                </h2>
                <p>
                    Nos sites internet responsive design fonctionnent sur toutes les plateformes et 
                    s'adaptent automatiquement.
                </p>
            </div>
            <div>
                <h2>
                    Expérience Utilisateur Ergonomique
                </h2>
                <p>
                    Une ergonomie optimale pour un meilleur confort - Rapidité d'affichage - Navigation sécurisée.
                </p>
            </div>
            <div>
                <h2>
                    Préconisé Par Google
                </h2>
                <p>
                    Google a imposé la standardisation du responsive design pour le confort des utilisateurs. 
                    En respectant cette règle vous aurez, automatiquement, un meilleur référencement naturel (SEO).
                  </p>
            </div>
        </div>
    </div>
  )
}
