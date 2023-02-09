import { Link } from "react-router-dom"

const classes = {
  subscribe:'subscribe',
  logo:'subscribe__logo',
  wrapbtn:'subscribe__wrap-btn p-10',
  button:'subscribe__button',
}

export const Subscribe = () => {
  return (
      <nav className={classes.subscribe}>
        <div className={classes.logo}>RPA NEWS</div>
          <div className={classes.wrapbtn}>
            <button type="button" className={`${classes.button} s-btn`}><Link  to="/login">Inicia Sesión</Link></button>
            <button itemProp="description" className={`${classes.button} p-btn`}><Link to="/register" >Suscríbete</Link></button>
          </div>
    </nav>
    )
}
