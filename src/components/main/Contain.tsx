import Article from "./Article";
import "../../styles/components/_contain.scss";
import { Articles } from "../../interfaces";

interface Props {
  category?: string;
  data?: Array<Articles>;
  lotContent?: number;
}

const Contain: React.FC<Props> = ({
  category = "",
  data = [],
  lotContent = 5,
}) => {
  return (
    <div className="contain">
      <h2 className="h2">{category}</h2>
      {data.slice(0, lotContent).map((dat) => (
        <Article key={dat.title} {...dat} />
      ))}
    </div>
  );
};
export default Contain;
