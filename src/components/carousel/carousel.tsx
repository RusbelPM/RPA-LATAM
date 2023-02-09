import React, { useEffect, useState } from 'react';
import { useArticles } from '../../hooks/useNews';

const classes = {
    slider: 'slider',
    image:  'slider__article-img',
    title:  'slider__article-title',
    icons:  'slider__icons',
    button: 'slider__icons button',
    dot:    'slider__icons--dot',
    currentColor:'current-color',
    size:   'size',
    loaded: 'slider__article-img loaded'
}

export const Carousel = () => {
    const {articles} = useArticles();
    const [currentArticle, setCurrentArticle] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const selectedArticle = (next: boolean) => {
        setLoaded(false)
        const condition = next ? currentArticle === articles.length - 1 : currentArticle === 0;
        const newIndex = next ? condition ?  0 : currentArticle + 1 :  condition ? articles.length - 1 : currentArticle - 1;
        setCurrentArticle(newIndex);
    }

    const goToSlide = (index: number) => {
        setCurrentArticle(index)
    }

    useEffect(() => {
        const interval = setInterval(() =>{
            selectedArticle(true)
        }, 10000);
        return () => clearInterval(interval)
    });

    return (
        <div className={classes.slider}>
            <div>
                <img src={articles[currentArticle]?.urlToImage} className={loaded ? classes.loaded : classes.image} alt={articles[currentArticle]?.title} onLoad={() => setLoaded(true)}/>
                <h1 className={classes.title}>{articles[currentArticle]?.title}</h1>
            </div>
            <div className={classes.icons}>             
                <div className={classes.dot}>
                    {
                        articles.map((item, index)=> {
                        return (
                            <button  key={item.title} onClick={() => goToSlide(index)} className={classes.button} >
                                <svg width="26" height="20" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.size}>
                                    <circle cx="10" cy="10" r="10" fill="#A36C63" className={currentArticle === index ? classes.currentColor : '' }/>
                                </svg>
                            </button>
                        )
                        })
                    }
                </div>
            </div>
        </div>            
    )
}