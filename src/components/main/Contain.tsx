import { useCategories } from "../../hooks";
import { Article } from "./articles-main";

interface Props {
  nameCategory?: string;
  titleCategory?: string;
  initContent: number;
  lotContent: number;
}

const classes = {
  main: "contain",
};

export const Contain: React.FC<Props> = ({
  titleCategory = "",
  nameCategory = "",
  initContent = 0,
  lotContent = 6,
}) => {
  const { categories } = useCategories(nameCategory);
  return (
    <>
      <h1>{titleCategory}</h1>
      <div className={classes.main}>
        {categories.slice(initContent, lotContent).map((dat) => (
          <Article key={dat.title} {...dat} />
        ))}
      </div>
    </>
  );
};