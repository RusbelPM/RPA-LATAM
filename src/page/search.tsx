import { useLocation} from 'react-router-dom';
import { NotResult } from '../components/search-news/not-result';
import { Sniper } from '../global-component/loading/sniper';
import { useArticle } from '../hooks';


const classes = {
    search: 'responsive-wrapper',
    news_hor:'news_hor',
    hor_date:'news_hor__hor_date'
}

export const Search = () => {
    const {search = ''} =useLocation();
    const clearSearch = search.slice(7).replaceAll('+',' ')
    const { isloading, searchNews } = useArticle(clearSearch);

    if(isloading) {
        return <Sniper/>
    }

	return (
		<div className={classes.search}>
            {
                searchNews.length === 0 ?
                <NotResult 
                resul={clearSearch}
                />
                :
                <p>{`Se econtraron ${searchNews.length} resultados de "${clearSearch}"`}</p>
            }
                {
                    searchNews.map( ({title,urlToImage, publishedAt,description}) => (
                        <figure key={title} className={classes.news_hor}>
                            <a itemProp='url' href={`/note/${title}`}>
                            <img src={urlToImage} alt={title} />
                            <figcaption >
                            <h3 itemProp='title'>{title}</h3>
                            <footer>
                                <div className={classes.hor_date}>{publishedAt}</div>
                            </footer>
                            <p itemProp='description'>{description}</p>                    
                            </figcaption>
                            </a>
                        </figure>
                    ))
                }
        </div>
	);
}