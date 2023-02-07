
const classes = {
  subscribe:'subscribe',
  logo:'subscribe__logo',
  wrapbtn:'subscribe__wrap-btn p-10',
  button:'subscribe__button',

}

export const Subscribe = () => {
  return (
      <nav className={classes.subscribe}>
        <div className={classes.logo}>Logo</div>
          <div className={classes.wrapbtn}>
            <button type="button" className={`${classes.button} s-btn`}><a  href="#">Inicia Sesión</a></button>
            <button itemProp="description" className={`${classes.button} p-btn`}><a href="#" >Suscríbete</a></button>
          </div>
    </nav>
    )
}
