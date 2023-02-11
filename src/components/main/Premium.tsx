import { useCategories } from "../../hooks";
import { Article } from "./articles-main";

const classes = {
  main: "premium",
  content: "premium__article",
};

interface Props {
  titleCategory?: string;
  nameCategory?: string;
  lotContent?: number;
}

const Premium: React.FC<Props> = ({
  titleCategory = "",
  nameCategory = "",
  lotContent,
}) => {
  const { categories } = useCategories(nameCategory);
  return (
    <>
      <div className={classes.main}>
        <h1>{titleCategory}</h1>
        <div className={classes.content}>
          {categories.slice(0, lotContent).map((dat) => (
            <Article key={dat.title} {...dat} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Premium