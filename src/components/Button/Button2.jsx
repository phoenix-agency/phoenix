import { Link } from "react-router-dom";
const Button2 = ({ link, color, title }) => {
  return (
    <Link to={link}>
      <button
        className={`${color} cursor-pointer duration-300 px-4 py-1 text-white rounded-full mt-10 hover:bg-secondary`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button2;
