import { Articles } from "../../interfaces";

const classes = {
  main: "article",
  content: "article__content",
  imagen: "article__image",
};

const Article: React.FC<Articles> = ({ title, urlToImage, description }) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={classes.imagen}>
        <img src={urlToImage} alt={title} />
      </div>
    </div>
  );
};
export default Article;
