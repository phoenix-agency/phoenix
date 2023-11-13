import bricoman from "../../assets/bricoman.png";
import ima from "../../assets/ima.png";
import etbh from "../../assets/etbh.png";
import alphazur from "../../assets/alphazur.png";
import com2gever from "../../assets/com2gever.png";
import sharemyskills from "../../assets/sharemyskills.png";
import soyezpro from "../../assets/soyezpro.png";
import montageBrunet from "../../assets/montageBrunet.png";
import essenceBienEtre from "../../assets/essenceBienEtre.png";
const NosClients = () => {
  return (
    <div>
      <h4 className="text-3xl capitalize text-center font-bold text-secondary">
        Ils nous ont fait confiance
      </h4>
      <div className="mx-8 mb-10 2xl:mx-48">
        <div className="pt-4 grid grid-flow-row gap-x-4 gap-y-6 md:grid-cols-3 ">
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={ima}
              alt="Institut du monde arabe Tourcoing"
            />
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={bricoman}
              alt="bricoman"
            />
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={etbh}
              alt="ETBH"
            />
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={alphazur}
              alt="Alphazur"
            />
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={com2gever}
              alt="Com2gever"
            />
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={sharemyskills}
              alt="Share my Skills"
            />
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={soyezpro}
              alt="Soyez Pro"
            />
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={montageBrunet}
              alt="Montage Brunet"
            />
          </div>
          <div className="bg-gray-200 flex justify-center items-center h-72 w-90 md:h-52">
            <img
              className="h-56 hover:scale-110 duration-200 md:h-28"
              src={essenceBienEtre}
              alt="Essence Bien Etre"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosClients;
