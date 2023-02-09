import { useArticles } from "../hooks"



export const TheLast = () => {
  const { articles, isLoading } = useArticles();

  const list = [];
  list.push({ idx: 'column-1', data: articles.slice(1, 4) });
  list.push({ idx: 'column-2', data: articles.slice(9, 12) });
  list.push({ idx: 'column-3', data: articles.slice(13, 16) });

  if (isLoading) {
    return <div>cargando...</div>
  }
  return (

    <h1>Header</h1>
  )
}
