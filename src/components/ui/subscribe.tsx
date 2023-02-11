import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
import { ButtonNavbar } from "./button-navbar";
import { UserButtons } from "./userButtons";

const classes = {
  subscribe: "subscribe",
  logo: "subscribe__logo",
  wrapbtn: "subscribe__wrap-btn p-10",
};

export const Subscribe = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className={classes.subscribe}>
      <Link to={"/"}>
        <div className={classes.logo}>RPA Noticias</div>
      </Link>
      <div className={classes.wrapbtn}>
        {
          currentUser! ? <UserButtons /> : <ButtonNavbar />
          // <button type="button" className={`${classes.button} s-btn`}>
          //   <Link to="/login">Inicia Sesión</Link>
          // </button>
          // <button itemProp="description" className={`${classes.button} p-btn`}>
          //   <Link to="/register">Suscríbete</Link>
          // </button>:<></>
        }
      </div>
    </nav>
  );
};
