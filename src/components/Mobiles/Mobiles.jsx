import FlySvg from "../../assets/svg/FlySvg";
import MagicSvg from "../../assets/svg/MagicSvg";
import GiftSvg from "../../assets/svg/GiftSvg";
function Mobiles() {
  return (
    <div>
      <h2 className="mt-16 text-4xl font-extrabold text-secondary">
        Un Site Internet Totalement Adapté aux Mobiles
      </h2>
      <div className="grid grid-flow-row">
        <div>
          <div className="flex">
            <GiftSvg />
            <p className="text-lg pt-4 pl-4">
              Faites un cadeau à vos futurs prospects
            </p>
          </div>
          <p className="text-gray-light">
            Ce serait dommage de perdre du prospect avec un site internet qui
            s&apos;affiche mal sur mobile.
          </p>
        </div>
        <div>
          <div className="flex">
            <MagicSvg />
            <p className="text-lg pt-4 pl-4">
              Tellement simple à prendre en main que c&apos;en est magique
            </p>
          </div>
          <p className="text-gray-light">
            A la livraison de votre site internet vous recevrez un mot de passe
            et un identifiant de connexion pour administrer votre site internet.
            Ne vous inquiétez pas vous allez bénéficier d&apos;une formation
            gratuite.
          </p>
        </div>
        <div>
          <div className="flex">
            <FlySvg />
            <p className="text-lg pt-4 pl-4">
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
  );
}

export default Mobiles;
