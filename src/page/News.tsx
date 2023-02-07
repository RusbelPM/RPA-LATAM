import { Link } from 'react-router-dom';
import { useArticles } from '../hooks';
import { Articles } from '../interfaces';
import { LoadingSpinnerSmall } from '../global-components/loading/spinner-small';


export const News = () => {



  const { isLoading, articles } = useArticles();


  if (isLoading) {
    return <LoadingSpinnerSmall />
  }

  return (
    <div>
      {
        articles.map(({title, urlToImage, publishedAt, author, description, content}:Articles) =>{
          return (
            <div key={title}>
            <img src={urlToImage} alt={title} />
            <span>{publishedAt}</span>
            <span>{author}</span>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h4>{content}</h4>
            <Link to={`/note${title}`}> mas..</Link>
          </div>

          )
        })        
      }
    </div>

  )
}