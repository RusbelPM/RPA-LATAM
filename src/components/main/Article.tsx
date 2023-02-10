import { Link } from "react-router-dom";
import { Articles } from "../../interfaces";

const classes = {
  main: "article-main",
  content: "article-main__content",
  imagen: "article-main__image",
};

const Article: React.FC<Articles> = ({ title, urlToImage, description }) => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <Link to={`/note/${title}`}>
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
      </div>
      <Link to={`/note/${title}`}>
        <div className={classes.imagen}>
          <img src={urlToImage} alt={title} />
        </div>
      </Link>
    </div>
  );
};
export default Article;
