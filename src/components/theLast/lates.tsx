import { Link } from 'react-router-dom';
import { useArticles } from '../../hooks'
import { Articles } from '../../interfaces';

export const Latest = () => {

    const { articles } = useArticles();
    
    
  return (
    <>
        <div className = "banner-sub-content">
                {
                articles.slice(9, 13).map(({title, urlToImage, url}:Articles) =>{
                    return (
                    
                    <div className = "hot-topic" key={title}>
                        <img src={urlToImage} alt = {url}/>

                        <div className = "hot-topic-content">
                            <h2>{title}</h2>
                            <Link to={`/note/${title}`}>Leer</Link>
                        </div>
                    </div>

                    )
                })        
                }
        </div>
        
    </>
  )
}