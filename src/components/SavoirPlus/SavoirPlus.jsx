import Button2 from "../Button/Button2";
import chiffreAffaire from "../../assets/chiffreAffaire.png";
import tableau from "../../assets/tableau.png";
const SavoirPlus = () => {
  return (
    <div className="mt-32">
      <div className="grid grid-flow-col">
        <div className="grid grid-fow-rowa">
          <img src={chiffreAffaire} alt="chiffre affaire" />
          <h2 className="text-4xl font-extrabold text-secondary">
            Vous souhaitez en savoir plus sur la conception de site internet ?
          </h2>
          <p className="text-gray-dark">
            Ici vous avez le choix entre directement voir les prix ou en savoir
            plus sur notre secret de fabrication.
          </p>
          <div>
            <Button2
              color="bg-green-500"
              title="Je veux en apprendre plus"
              link="#"
            />
            <Button2
              color="bg-rose-500"
              title="Je veux voir les forfaits"
              link="#"
            />
          </div>
        </div>
        <img className="w-auto h-auto" src={tableau} alt="tableau" />
      </div>
    </div>
  );
};

export default SavoirPlus;
