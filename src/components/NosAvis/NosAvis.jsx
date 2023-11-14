import "./NosAvisStyle.css";
import AvatarSimon from "./../../assets/AvatarSimon.png";
import AvatarDavid from "./../../assets/AvatarDavid.png";
import AvatarAurelie from "./../../assets/AvatarAurelie.png";
import AvatarThierry from "./../../assets/AvatarThierry.png";
import AvatarTheo from "./../../assets/AvatarTheo.png";
import AvatarQuentin from "./../../assets/AvatarQuentin.png";
function nosAvis() {
    return (
        <div className="MarginTopBottom">
            <div className="AvisPresentation">
                <p className="SectionText">Avis Clients</p>
                <h1 className="SectionTitle">Ce Qu&apos;ils Disent De Nous</h1>
            </div>
            <div className='ReviewContainer'>
                <div className="Flex FlexColumn Width40">
                    <div className="Review">
                        <p className="TextReview">
                            Nous avons fait appel à cette jeune agence web pour la réalisation et pour la sécurisation de notre site internet. 
                            Le délai était très court car nous avions commencé la diffusion de la communication pour l&apos;inauguration de l&apos;IMA. 
                            Cette agence nous a très rapidement proposé un design qui était en adéquation avec l&apos;image de marque de L&apos;IMA. 
                            Nous la recommandons pour son efficacité, sa disponibilité, sa créativité et pour ses conseils. C&apos;est une agence qui est soucieuse de son travail. 
                            Nous sommes ravis de la beauté du site, de son ergonomie, de ses fonctionnalités, pour son administration, de sa rapidité.
                        </p>
                    </div>
                    <div className="JustifyContentCenter MarginTop50">
                        <div className="AuthorProfilPic">
                            <img src={AvatarSimon} alt="Avatar de Simon" className="Avatar"/>
                        </div>
                        <div className="AuthorDetails FlexColumn">
                            <h3 className="AuthorName">Simon Castel</h3>
                            <p className="AuthorJob">Chargé de communication, Institut du Monde Arabe Tourcoing</p>
                        </div>
                    </div>                
                </div>
                <div className="Flex FlexColumnReverse Width40">
                    <div className="Review">
                        <p className="TextReview">
                        Une agence à la pointe du professionnalisme et de l&apos;efficacité. 
                        Au-delà de l&apos;écoute attentive et de la force de propositions parfaitement en adéquation avec l&apos;identité d&apos;ALPHAZUR, Webagencelille.Com 
                        a su créer une nouvelle référence dans le monde des sites internet. 
                        En réussissant le tour de force , à travers ALPHAZUR, de mettre en place un site internet aux multiples extensions interactives internes
                        avec la possibilité de permettre à chaque visiteur d&apos;y trouver l&apos;arborescence des réponses face à ses besoins, 
                        L&apos;expérience devient découverte et source d&apos;acquisition de connaissances. Dans un cadre référent, particulièrement fluide, ingénieusement pensé et réalisé, 
                        ALPHAZUR crée une expérience inédite grâce aux ressources infinies de cette agence hors du commun.
                        </p>
                    </div>
                    <div className="JustifyContentCenter MarginTop50">
                        <div className="AuthorProfilPic">
                            <img src={AvatarDavid} alt="Avatar de David" className="Avatar"/>
                        </div>
                        <div className="AuthorDetails FlexColumn MarginBottom50">
                            <h3 className="AuthorName">David Jeruzalska</h3>
                            <p className="AuthorJob">Fondateur, Alphazur</p>
                        </div>
                    </div>            
                </div>
                <div className="Flex FlexColumn Width40">
                    <div className="Review">
                        <p className="TextReview">
                        Je recommande l&apos;agence pour son professionnalisme, à l&apos;écoute de vos attentes, agrémenté de conseils personnalisés pour des résultats adaptés aux besoins des entreprises.
                        </p>
                    </div>
                    <div className="JustifyContentCenter MarginTop50">
                        <div className="AuthorProfilPic">
                            <img src={AvatarAurelie} alt="Avatar de Aurélie" className="Avatar"/>
                        </div>
                        <div className="AuthorDetails FlexColumn">
                            <h3 className="AuthorName">Aurélie Rousset</h3>
                            <p className="AuthorJob">Fondatrice, Essence Bien-être</p>
                        </div>
                    </div>                
                </div>
                <div className="Flex FlexColumnReverse Width40">
                    <div className="Review">
                        <p className="TextReview">
                            Excellent travail de la part de l&apos;Agence, réalisation sur mesure ne manquant pas de créativité, efficacité, disponible à toutes heures, webmaster sympathique et dynamique.
                        </p>
                    </div>
                    <div className="JustifyContentCenter MarginTop50">
                        <div className="AuthorProfilPic">
                            <img src={AvatarThierry} alt="Avatar de Thierry" className="Avatar"/>
                        </div>
                        <div className="AuthorDetails FlexColumn MarginBottom50">
                            <h3 className="AuthorName">Thierry Vinchent</h3>
                            <p className="AuthorJob">PDG, ETBH</p>
                        </div>
                    </div>            
                </div>
                <div className='ReviewContainer'>
                    <div className="Flex FlexColumn Width40">
                        <div className="Review">
                            <p className="TextReview">
                                WebAgenceLille, menée par Samy, est une agence qui a su être à l&apos;écoute de notre besoin dès le premier contact. 
                                Force de proposition, en veille permanente, disponible et compétant dans de nombreux domaines techniques du web, Samy a su nous apporter son regard expert 
                                et nous aiguiller sur un projet peu évident.
                            </p>
                        </div>
                        <div className="JustifyContentCenter MarginTop50">
                            <div className="AuthorProfilPic">
                                <img src={AvatarTheo} alt="Avatar de Theo" className="Avatar"/>
                            </div>
                            <div className="AuthorDetails FlexColumn">
                                <h3 className="AuthorName">Théo Van Daele</h3>
                                <p className="AuthorJob">Chargé de communication, Bricoman</p>
                            </div>
                        </div>                
                    </div>
                    <div className="Flex FlexColumnReverse Width40">
                        <div className="Review">
                            <p className="TextReview">
                                Très satisfait du travail en collaboration avec Samy, qui a su répondre positivement à une demande complexe. 
                                Tout au long du processus de développement, de bons conseils m&apos;ont été apporté, ce qui m&apos;a permis de bien redéfinir le projet. 
                                Je recommande fortement Webagencelille !
                            </p>
                        </div>
                        <div className="JustifyContentCenter MarginTop50">
                            <div className="AuthorProfilPic">
                                <img src={AvatarQuentin} alt="Avatar de David" className="Avatar"/>
                            </div>
                            <div className="AuthorDetails FlexColumn MarginBottom50">
                                <h3 className="AuthorName">Quentin Lambert</h3>
                                <p className="AuthorJob">Président, SAS INTERVISION FRANCE</p>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default nosAvis

/**
                <div className="AuthorReview">
                    <div className="AuthorProfilPic">
                        <img src={AvatarAurélie} alt="Avatar de Simon" />
                    </div>
                    <div>
                        <h3 className="AuthorName">Aurélie Rousset</h3>
                        <p className="AuthorJob">Fondatrice, Essence Bien-être</p>
                    </div>
                </div>
                <div className="AuthorReview">
                    <div className="AuthorProfilPic">
                        <img src={AvatarThierry} alt="Avatar de Simon" />
                    </div>
                    <div>
                        <h3 className="AuthorName">Thierry Vinchent</h3>
                        <p className="AuthorJob">PDG, ETBH</p>
                    </div>
                </div>
                <div className="AuthorReview">
                    <div className="AuthorProfilPic">
                        <img src={AvatarThierry} alt="Avatar de Simon" />
                    </div>
                    <div>
                        <h3 className="AuthorName">Théo Van Daele</h3>
                        <p className="AuthorJob">Chargé de communication, Bricoman</p>
                    </div> */