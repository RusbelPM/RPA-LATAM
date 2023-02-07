import Contain from "./contain";
import { useScience, useTecnology } from "../../hooks/useNews";
import Premium from "./premium";

const classes = {
  main: "contain-right",
};

const ContainRight = () => {
  const { technology } = useTecnology();
  const { science } = useScience();
  return (
    <section className={classes.main}>
      <Premium category="Ciencia" data={science} lotContent={3} />
      <Contain category="Tecnologia" data={technology} lotContent={7} />
    </section>
  );
};
export default ContainRight;
