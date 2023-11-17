import { Link } from "react-router-dom";
const Button3 = ({ link }) => {
  return (
    <Link to={link}>
      <button className="bg-primary duration-300 text-xs px-6 py-3 font-semibold text-white rounded mt-6 hover:bg-secondary">
        En savoir plus
      </button>
    </Link>
  );
};

export default Button3;
// import { Link, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Button = ({ color, title }) => {
//   const navigate = useNavigate();

//   return (
//     <button
//       className={`${color} cursor-pointer duration-300`}
//       //   onClick={() => navigate("/contact")}
//       // onClick={onClick}
//     >
//       {title}
//     </button>
//   );
// };
// export default Button;
