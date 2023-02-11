import { Articles } from "../../interfaces";

const classes = {
  main: "articles",
  content: "articles__content",
  imagen: "articles__image",
};

export const ArticlesCat: React.FC<Articles> = ({ title, urlToImage, description }) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <h2 itemProp="title">{title}</h2>
        <p itemProp="description">{description}</p>
      </div>
      <div className={classes.imagen}>
        <img src={urlToImage} alt={title} />
      </div>
    </div>
  );
};