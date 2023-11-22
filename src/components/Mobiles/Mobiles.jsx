import FlySvg from "../../assets/svg/FlySvg";
import MagicSvg from "../../assets/svg/MagicSvg";
import GiftSvg from "../../assets/svg/GiftSvg";
import mobile from "../../assets/mobile.png";
function Mobiles() {
  return (
    <div className="my-16 lg:mx-72">
      <h2 className="mb-8 hidden text-3xl lg:block md:text-4xl lg:font-extrabold">
        Un Site Internet Totalement Adapté aux Mobiles
      </h2>
      <div className="grid grid-flow-row lg:grid-flow-col">
        <img src={mobile} className=" lg:order-1" alt="mobile" />
        <h2 className="mb-8 md:text-4xl font-extrabold text-3xl lg:hidden">
          Un Site Internet Totalement Adapté aux Mobiles
        </h2>
        <div>
          <div>
            <div className="flex mb-4">
              <GiftSvg />
              <p className="text-lg font-extrabold pt-4 pl-4">
                Faites un cadeau à vos futurs prospects
              </p>
            </div>
            <p className="text-gray-light">
              Ce serait dommage de perdre du prospect avec un site internet qui
              s&apos;affiche mal sur mobile.
            </p>
          </div>
          <div>
            <div className="flex mb-4 mt-4">
              <MagicSvg />
              <p className="text-lg font-extrabold pt-4 pl-4">
                Tellement simple à prendre en main que c&apos;en est magique
              </p>
            </div>
            <p className="text-gray-light">
              A la livraison de votre site internet vous recevrez un mot de
              passe et un identifiant de connexion pour administrer votre site
              internet. Ne vous inquiétez pas vous allez bénéficier d&apos;une
              formation gratuite.
            </p>
          </div>
          <div>
            <div className="flex mt-4 mb-4">
              <FlySvg />
              <p className="text-lg font-extrabold pt-4 pl-4">
                Donnez des ailes à votre business
              </p>
            </div>
            <p className="text-gray-light">
              Avec un site internet moderne et un bon référencement en plus
              d&apos;un accompagnement sur mesure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobiles;
