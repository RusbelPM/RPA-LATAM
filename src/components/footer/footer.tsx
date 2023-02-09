const classes = {
  footer: "footer",
};
export const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <h1 itemProp="title">RPA NEWS</h1>
        <p itemProp="description">DIRECTOR PERIODÍSTICO: RUSBELPM</p>
        <p itemProp="description">
          Empresa Editora RPA-LATAM. Jorge Salazar Araoz # 171 Santa Catalina La
          Victoria. Copyright © Elcomercio.pe. Grupo RPA-LATAM
        </p>
        <p itemProp="description">
          Copyright &copy; 2025 All rights reserved | RPA-NEWS
        </p>
      </div>
    </footer>
  );
};
