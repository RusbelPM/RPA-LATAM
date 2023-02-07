import Contain from "./Contain";
import "../../styles/components/_containleft.scss";
import { useHealth, useBusiness } from "../../hooks/useNews";

const ContainLeft = () => {
  const { health } = useHealth();
  const { business } = useBusiness();

  return (
    <section className="containleft">
      <Contain category="Medicina" data={health} lotContent={3} />
      <Contain category="Negocio" data={business} />
    </section>
  );
};
export default ContainLeft;
