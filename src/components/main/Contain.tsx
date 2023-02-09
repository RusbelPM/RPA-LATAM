import { Articles } from "../../interfaces";
import Article from "./article";

interface Props {
  category?: string;
  data?: Array<Articles>;
  lotContent?: number;
}

const classes = {
  main: "contain",
};

const Contain: React.FC<Props> = ({
  category = "",
  data = [],
  lotContent = 5,
}) => {
  return (
    <>
      <h1>{category}</h1>
      <div className={classes.main}>
        {data.slice(0, lotContent).map((dat) => (
          <Article key={dat.title} {...dat} />
        ))}
      </div>
    </>
  );
};
export default Contain;
