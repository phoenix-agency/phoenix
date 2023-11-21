import { Link } from "react-router-dom";
const Button = ({ link, color, title }) => {
  return (
    <Link to={link}>
      <button
        className={`${color} duration-300 uppercase px-6 sm:px-11 py-3 font-semibold text-white rounded-full hover:bg-secondary`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
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
