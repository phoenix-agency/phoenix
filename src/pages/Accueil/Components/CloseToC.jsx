import CtoC from './ComponentsPic/CloseToC.png'

function closetoc () {
    return (
        <div>
            <div className='CloseToCContainer'>           
                <div className='Presentation-FlexStart'>
                    <h1 className='Title Blue'>Une Agence Web Proche De Ses Clients</h1>
                    <p className='Text Grey'>Nous sommes diplômés en communication et en développement web. Notre approche agile, alliée aux nouvelles connaissances du web, nous permet de vous proposer en plus des dernières technologies robustes, un design sur mesure à l’image de marque de votre entreprise. Nos conceptions web sont durables et sécurisées.</p>   
                </div>
                <img src={CtoC} alt="Illustration proximité client"/>
            </div>
            <h2 className='Slogan'>SAS WEBAGENCELILLE.COM Agence Web Conception De Site Internet & Référencement Pour Les Professionnels A Lille</h2>
        </div>
    )
}

export default closetoc