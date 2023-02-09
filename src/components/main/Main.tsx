import Contain from "./contain";
import Premium from "./premium";

const Main = () => {
  return (
    <>
      <Contain titleCategory="Medicina" nameCategory="health" lotContent={6} />
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
