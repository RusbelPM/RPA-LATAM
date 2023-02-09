import { Articles } from "../../interfaces";
import Article from "./article";

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
  premium?: boolean;
}

const Premium: React.FC<Props> = ({
  category = "",
  data = [],
  lotContent,
  premium = true,
}) => {
  return (
    <>
      <div className={classes.main}>
        <h1>{category}</h1>
        <div className={classes.content}>
          {data.slice(0, lotContent).map((dat) => (
            <Article key={dat.title} {...dat} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Premium;
