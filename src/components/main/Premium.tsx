import { useCategories } from "../../hooks";
import Article from "./article";

const classes = {
  main: "premium",
  content: "premium__article",
  image: "premium__article__image",
  text: "premium__article__text",
};

interface Props {
  nameCategory?: string;
  lotContent?: number;
  premium?: boolean;
}

const Premium: React.FC<Props> = ({
  nameCategory = "",
  lotContent,
  premium = true,
}) => {
  const { categories } = useCategories(nameCategory);
  return (
    <>
      <div className={classes.main}>
        <h1>{nameCategory}</h1>
        <div className={classes.content}>
          {categories.slice(0, lotContent).map((dat) => (
            <Article key={dat.title} {...dat} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Premium;
