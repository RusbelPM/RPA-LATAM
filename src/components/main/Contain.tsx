import { Articles } from "../../interfaces";
import {ArticlesCat} from "./articles-main";

interface Props {
  category?: string;
  data?: Array<Articles>;
  lotContent?: number;
}

const classes = {
  main: "contain",
};

export const Contain: React.FC<Props> = ({
  data = [],
  lotContent,
}) => {
  return (
      <div className={classes.main}>
        {data.slice(0, lotContent).map((dat) => (
          <ArticlesCat key={dat.title} {...dat} />
        ))}
      </div>
  );
};
