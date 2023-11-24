import Loupe from "../../assets/svg/Loupe";
import "./ResearchStyle.css";

function Research({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div className=" fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-secondary opacity-95">
      <div
        className="text-xl absolute top-5 right-5 font-semibold text-white cursor-pointer"
        onClick={onClose}
      >
        &#x2715;
      </div>
      <div className="mt-1">
        <div className="mt-1 relative">
          <div className="absolute z-20 inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
            <Loupe />
          </div>
          <input
            id="search"
            className=" bg-secondary opacity-95 block pr-10 w-full py-6 mb-3 focus:outline-none rounded-none border-t-0 border-x-0"
            placeholder="Rechercher"
          />
        </div>
      </div>
    </div>
  );
}

export default Research;
