import Cms from './../CMS/Cms'
import AccessibleTech from './../AccessibleTech/AccessibleTech'
import './WhyWordpress.css'
function whyWordpress () {
    return (
        <>
            <div>
                <h1 className="WhyWordpressTitle">Pourquoi Avons-Nous Choisi Wordpress Pour La Création De Site Internet Pour Les Entreprises ?</h1>
            </div>
            <div>
                <Cms />
                <AccessibleTech />
            </div>
        </>
    )
}

export default whyWordpress