import "../../styles/components/_main.scss";
import ContainLeft from "./ContainLeft";
import ContainRight from "./ContainRight";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <ContainLeft />
        <ContainRight />
      </div>
    </div>
  );
};
export default Main;
