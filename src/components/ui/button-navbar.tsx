import { Link } from "react-router-dom";

const classes = {
  wrapbtn: "subscribe__wrap-btn p-10",
  button: "subscribe__button",
};
export const ButtonNavbar = () => {
  return (
    <>
      <button type="button" className={`${classes.button} s-btn`}>
        <Link to="/login">Inicia Sesión</Link>
      </button>
      <button itemProp="description" className={`${classes.button} p-btn`}>
        <Link to="/register">Suscríbete</Link>
      </button>
    </>
  );
};
