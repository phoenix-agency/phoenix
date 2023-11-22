import WordpressExpert from "../../components/WordpressExpert/WordpressExpert"
import WhyWordpress from "../../components/WhyWordpress/WhyWordpress"
import Processus from "../../components/Processus/Processus"
import YourWebsite from "../../components/YourWebsite/YourWebsite"
import WordpressServices from "../../components/WordpressServices/WordpressServices"
import ChooseUs from "../../components/ChooseUs/ChooseUs"
import "./WordpressStyle.css"

function wordpress() {
    return (
        <div>
            <WordpressExpert />
            <WhyWordpress />
            <Processus />
            <YourWebsite />
            <WordpressServices />
            <ChooseUs />
        </div>
    )
}

export default wordpress