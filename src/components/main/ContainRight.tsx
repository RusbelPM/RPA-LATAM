import Contain from "./Contain";
import Premium from "./Premium";
import "../../styles/components/_containright.scss";

const ContainRight = () => {
  return (
    <div className="containright">
      <Premium />
      <Contain />
    </div>
  );
};
export default ContainRight;
