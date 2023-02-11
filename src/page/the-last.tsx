import { Carousel } from "../components/carousel/carousel";
import Main from "../components/main/main";
import { Sniper } from "../global-component/loading/sniper";
import { useArticles } from "../hooks"

const  classes = {
  title: 'responsive-wrapper__page-title',
}

export const TheLast = () => {
  const { isLoading } = useArticles();

  if (isLoading) {
    return <Sniper/>
  }
  return (
    <>
      <div className={classes.title}>
        <h1 itemProp="title">Últimas noticias</h1>
      </div>
      <Carousel/>
      <Main/>
    </>
  )
}
