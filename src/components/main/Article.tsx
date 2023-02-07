import { Articles } from "../../interfaces";
import "../../styles/components/_article.scss";

const Article = ({ title, urlToImage, description }: Articles) => {
  return (
    <div className="article">
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="content-image">
        <img src={urlToImage} alt={title} />
      </div>
    </div>
  );
};
export default Article;
