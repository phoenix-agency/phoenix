import CtoC from './ComponentsPic/CloseToC.png'

function closetoc () {
    return (
        <div>
            <div className='CloseToCContainer'>           
                <div className='CloseToCPresentation'>
                    <h1 className='CloseToCTitle'>Une Agence Web Proche De Ses Clients</h1>
                    <p className='CloseToCText'>Nous sommes diplômés en communication et en développement web. Notre approche agile, alliée aux nouvelles connaissances du web, nous permet de vous proposer en plus des dernières technologies robustes, un design sur mesure à l’image de marque de votre entreprise. Nos conceptions web sont durables et sécurisées.</p>   
                </div>
                <div className='CloseToCImgContainer'>
                    <img src={CtoC} alt="Illustration proximité client" className='CloseToPic' />
                </div>
            </div>
            <h2 className='Slogan'>SAS WEBAGENCELILLE.COM Agence Web Conception De Site Internet & Référencement Pour Les Professionnels A Lille</h2>
        </div>
    )
}

export default closetoc