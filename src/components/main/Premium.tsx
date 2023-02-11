import { Articles } from "../../interfaces";
import {ArticlesCat} from "./";

const classes = {
  main: "premium",
  content: "premium__article",
  image: "premium__article__image",
  text: "premium__article__text",
};

interface Props {
  category?: string;
  data?: Array<Articles>;
  lotContent?: number;
}

export const Premium: React.FC<Props> = ({
  category = "",
  data = [],
  lotContent,
}) => {
  return (
    <>
      <div className={classes.main}>
        <h1>{category}</h1>
        <div className={classes.content}>
          {data.slice(0, lotContent).map((dat) => (
            <ArticlesCat key={dat.title} {...dat} />
          ))}
        </div>
      </div>
    </>
  );
};