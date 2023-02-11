import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    description?: string,
    title: string, 
    urlToImage?: string,
    showImg?: boolean
}

const classes = {
    main: 'article',
    articleImg:'article__article-img',
    title:'article__article-title',
    excerp:'article__article-excerpt',
    link: 'article__article-link'
}

export const ArticleNews: React.FC<Props> = ({description='', title, urlToImage='', showImg=true}) => {
  return (
    <article className={classes.main}>
        {
            showImg && (
                <figure className={classes.articleImg}>
                    <img src={urlToImage} alt={title}/>
                </figure>
            )
        }
    <h1 itemProp='title' className={classes.title}>
      <Link itemProp='url' to={`/note/${title}`} className={classes.link}>{title}</Link>
    </h1>
    <div className={classes.excerp}>
      <p itemProp='description'>{description}</p>
    </div>
  </article>     
  )
}
