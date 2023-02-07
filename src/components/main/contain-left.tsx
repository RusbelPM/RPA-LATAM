import { useHealth, useBusiness } from "../../hooks/useNews";
import Contain from "./contain";

const classes = {
  main: "contain-left",
};

const ContainLeft = () => {
  const { health } = useHealth();
  const { business } = useBusiness();

  return (
    <section className={classes.main}>
      <Contain category="Medicina" data={health} lotContent={9} />
      <Contain category="Negocio" data={business} />
    </section>
  );
};
export default ContainLeft;
