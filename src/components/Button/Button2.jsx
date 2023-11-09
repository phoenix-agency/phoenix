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
