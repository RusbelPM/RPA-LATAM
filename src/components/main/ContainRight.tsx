import Contain from "./Contain";
import Premium from "./Premium";
import "../../styles/components/_containright.scss";
import { useTecnology } from "../../hooks/useNews";

const ContainRight = () => {
  const { technology } = useTecnology();
  return (
    <div className="containright">
      <Premium />
      <Contain category="Tecnologia" data={technology} lotContent={7} />
    </div>
  );
};
export default ContainRight;
