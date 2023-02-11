import { Link } from "react-router-dom";
import { Articles as IArticles } from "../../interfaces";

const classes = {
  main: "article-main",
  content: "article-main__content",
  imagen: "article-main__image",
};

export const Article: React.FC<IArticles> = ({ title, urlToImage, description }) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <a href={`/note/${title}`}>
          <h2 itemProp="title">{title}</h2>
        </a>
        <p itemProp="description">{description}</p>
      </div>
      <div className={classes.imagen}>
        <Link itemProp="url" to={`/note/${title}`}>
          <img src={urlToImage} alt={title} />
        </Link>
      </div>
    </div>
  );
};