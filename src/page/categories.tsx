import { useLocation } from "react-router-dom"
import { useCategories } from "../hooks"
import { Articles } from "../interfaces"
import { ArticleNews } from '../components';

const classes = {
  thelast: 'responsive-wrapper',
  title: 'responsive-wrapper__page-title',
  magazine: 'responsive-wrapper__magazine-layout',
  column: 'magazine-column',
}

export const Categories = () => {
  const {pathname} = useLocation()
  const category = pathname.replace('/','')
  const {isLoading, categories} = useCategories(category)

  const list = [];
  list.push({ idx: 'column-1', data: categories.slice(1, 4) });
  list.push({ idx: 'column-2', data: categories.slice(5, 8) });
  list.push({ idx: 'column-3', data: categories.slice(13, 16) });

  if (isLoading) {
    return <div>cargando...</div>
  }
  return (
    <main className={classes.thelast}>
      <div className={classes.title}>
        <h1>Últimas noticias</h1>
      </div>
      <div className={classes.magazine}>
        <div className={classes.column}>
          {
            categories.slice(5, 8).map(({ title, description }: Articles) => {
              return (
                <ArticleNews
                  key={title}
                  title={title}
                  description={description}
                  showImg={false}
                />
              )
            })
          }
        </div>
        {
          list.map(({ data, idx }) => (
            <div key={idx} className={classes.column}>
              {
                data.map(({ title, description, urlToImage }: Articles) => {
                  return (
                    <ArticleNews
                      key={title}
                      title={title}
                      description={description}
                      urlToImage={urlToImage}
                    />
                  )
                })
              }
            </div>
          ))
        }
      </div>
    </main>
  )
}
