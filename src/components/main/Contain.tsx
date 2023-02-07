import Article from "./Article";
import "../../styles/components/_contain.scss";

const Contain = () => {
  return (
    <div className="contain">
      <h2 className="h2">Deportes</h2>
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};
export default Contain;
