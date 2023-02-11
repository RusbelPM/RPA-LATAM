import { useLocation } from "react-router-dom"
import { useCategories } from "../hooks"
import { Articles } from "../interfaces"
import { ArticleNews } from '../components/the-last';
import { Sniper } from "../global-component/loading/sniper";

const classes = {
  thelast: "responsive-wrapper",
  title: "responsive-wrapper__page-title",
  magazine: "responsive-wrapper__magazine-layout",
  column: "magazine-column",
};

export const Categories = () => {
  const { pathname } = useLocation();
  const category = pathname.replace("/", "");
  const { isLoading, categories } = useCategories(category);

  const list = [];
  list.push({ idx: 'column-1', data: categories.slice(16, 20) });
  list.push({ idx: 'column-2', data: categories.slice(1, 5) });
  list.push({ idx: 'column-3', data: categories.slice(6, 10) });
  list.push({ idx: 'column-4', data: categories.slice(13, 17) });

  if (isLoading) {
    return <Sniper/>
  }
  return (
    <main className={classes.thelast}>
      <div className={classes.title}>
      </div>
      <div className={classes.magazine}>
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
  );
};
