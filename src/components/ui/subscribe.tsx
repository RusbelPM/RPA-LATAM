
const clases = {
  subscribe:'subscribe',
  logo:'subscribe__logo',
  ctabtn:'subscribe__wrap-btn p-10',
  button:'subscribe__button',

}

export const Subscribe = () => {
  return (
    <>
      <nav className={clases.subscribe}>
        <div className={clases.logo}>Logo</div>
          <div className={clases.ctabtn}>
            <button className={`${clases.button} s-btn`}><a href="">Inicia Sesión</a></button>
            <button className={`${clases.button} p-btn`}><a href="" >Suscríbete</a></button>
          </div>
    </nav>
    </>
    )
}
