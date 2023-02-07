import "../../styles/components/_article.scss";

const Article = () => {
  return (
    <div className="article">
      <div className="content">
        <h3>TestArticle</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          blanditiis nisi? Maxime vel amet commodi unde numquam, veniam
          repudiandae necessitatibus voluptates dolores quam earum, reiciendis
          fugiat, alias et natus repellat.
        </p>
      </div>
      <div className="content-image">
        <img
          src="https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Article;
