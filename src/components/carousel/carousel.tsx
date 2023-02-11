import { useEffect, useState } from 'react';
import { useArticles } from '../../hooks/useNews';

const classes = {
    carousel: 'carousel',
    image:  'carousel__article-img',
    title:  'carousel__article-title',
    loaded: 'carousel__article-img loaded',
}

export const Carousel = () => {
    const {articles} = useArticles();
    const [guideArticle, setGuidetArticle] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const changeArticle = (next: boolean) => {
        setLoaded(false)
        const condition = next ? guideArticle === articles.length - 1 : guideArticle === 0;
        const newIndex = next ? condition ?  0 : guideArticle + 1 :  condition ? articles.length - 1 : guideArticle - 1;
        setGuidetArticle(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() =>{
            changeArticle(true)
        }, 7000);
        return () => clearInterval(interval)
    });

    return ( 
        
        <div className={classes.carousel}>                
            <div className="posts__item posts__item--main">
                <div >
                    <img src={articles[guideArticle]?.urlToImage} className={loaded ? classes.loaded : classes.image} alt={articles[guideArticle]?.title} onLoad={() => setLoaded(true)}/>
                </div>
            <div className="posts__information">
                <div className="posts__date">
                {
                    articles[guideArticle]?.publishedAt
                }
                </div>
                <div className="posts__title">
                <a href={`/note/${articles[guideArticle]?.title}`} itemProp='title'>{articles[guideArticle]?.title}</a>
                </div>
            </div>
            </div>
        </div>
    )
}