import responsivePic from './ComponentsPic/Responsive.png'

export default function responsive() {
    return (
        <div className='ResponsiveContainer'>
            <div>
                <h1 className='Title White AlignCenter'>Conception De Site Internet Responsive Design À Lille 3 En 1</h1>
                <p className='Text White AlignCenter'> site internet opérationnel à la fois sur mobile, ordinateur & tablette</p>
            </div>
            <ul className='Responsive'>
                <ul className='ListContainer'>
                    <li>
                        <h2 className='SubTitle-NoPadding White AlignCenter'>Développement Premium</h2>
                        <p className='Text White AlignCenter'>Nous prêtons une attention particulière à la conception de pointe et les normes d&apos;utilisabilité modernes.</p>
                    </li>
                    <li>
                        <h2 className='SubTitle-NoPadding White AlignCenter'>Cross Plateform & Responsive Design</h2>
                        <p className='Text White AlignCenter'>Nos sites internet responsive design s&apos;adaptent librement et efficacement sur tous les périphériques de n&apos;importe qu&apos;elle marque.</p>
                    </li>
                    <li>
                        <h2 className='SubTitle-NoPadding White AlignCenter'>Optimisation Accrue</h2>
                        <p className='Text White AlignCenter'>Nous avons mis en place une stratégie qui permet à nos conceptions web d&apos;accélérer efficacement l&apos;affichage de votre site internet.</p>
                    </li>
                </ul>
                <li><img src= {responsivePic} alt="Responsive" /></li>
                <ul className='ListContainer'>
                    <li>
                        <h2 className='SubTitle-NoPadding White AlignCenter'>Compatible Iphone , Android & Windows Phone</h2>
                        <p className='Text White AlignCenter'>Nos sites internet responsive design fonctionnent sur toutes les plateformes et s&apos;adaptent automatiquement.</p>
                    </li>
                    <li>
                        <h2 className='SubTitle-NoPadding White AlignCenter'>Expérience Utilisateur Ergonomique</h2>
                        <p className='Text White AlignCenter'>Une ergonomie optimale pour un meilleur confort - Rapidité d&apos;affichage - Navigation sécurisée.</p>
                    </li>
                    <li>
                        <h2 className='SubTitle-NoPadding White AlignCenter'>Préconçu Par Google</h2>
                        <p className='Text White AlignCenter'>Google a imposé la standardisation du responsive design pour le confort des utilisateurs. En respectant cette règle vous aurez, automatiquement, un meilleur référencement naturel (SEO).</p>
                    </li>
                </ul>
            </ul>
        </div>
    )
}




/** 

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
                    d&apos;utilisabilité modernes.
                </p>
            </div>
            <div>
                <h2>Cross Plateform & Responsive Design</h2>
                <p>
                    Nos sites internet responsive design s&apos;adaptent librement et efficacement 
                    sur tous les périphériques de n&apos;importe qu&apos;elle marque.
                </p>
            </div>
            <div>
                <h2>
                    Optimisation Accrue
                </h2>
                <p>
                    Nous avons mis en place une stratégie qui permet à nos conceptions web d&apos;accélérer 
                    efficacement l&apos;affichage de votre site internet.
                </p>
            </div>
        </div>
        <div>
            
        </div>
        <div>
            <div>
                <h2>
                    Compatible Iphone , Android & Windows Phone
                </h2>
                <p>
                    Nos sites internet responsive design fonctionnent sur toutes les plateformes et 
                    s&apos;adaptent automatiquement.
                </p>
            </div>
            <div>
                <h2>
                    Expérience Utilisateur Ergonomique
                </h2>
                <p>
                    Une ergonomie optimale pour un meilleur confort - Rapidité d&apos;affichage - Navigation sécurisée.
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
} */
