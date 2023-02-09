import { useCategories } from "../../hooks";
import Article from "./article";

interface Props {
  nameCategory?: string;
  titleCategory?: string;
  lotContent?: number;
}

const classes = {
  main: "contain",
};

const Contain: React.FC<Props> = ({
  titleCategory = "",
  nameCategory = "",
  lotContent = 6,
}) => {
  const { categories } = useCategories(nameCategory);
  return (
    <>
      <h1>{titleCategory}</h1>
      <div className={classes.main}>
        {categories.slice(0, lotContent).map((dat) => (
          <Article key={dat.title} {...dat} />
        ))}
      </div>
    </>
  );
};
export default Contain;
