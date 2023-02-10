import Contain from "./contain";
import Premium from "./premium";

const Main = () => {
  return (
    <>
      <Contain
        titleCategory="Ultimas noticias"
        nameCategory="general"
        lotContent={6}
      />
      <Contain titleCategory="Salud" nameCategory="health" lotContent={6} />
      <Contain
        titleCategory="Negocios"
        nameCategory="business"
        lotContent={6}
      />
      <Premium titleCategory="Ciencia" nameCategory="science" lotContent={6} />
      <Contain
        titleCategory="Tecnologia"
        nameCategory="technology"
        lotContent={12}
      />
    </>
  );
};
export default Main;
