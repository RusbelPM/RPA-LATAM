import { useCategories} from '../../hooks'
import { Articles } from '../../interfaces';
import { Link } from 'react-router-dom';

export const LastList = () => {

    const {categories} = useCategories()
  
  return (
        <main>
            <section className = "main-container-left">
                <h2>Deporte</h2>
                {
                    categories.slice(1, 2).map(({title, urlToImage, description}:Articles) =>{
                        return (
                            <div className = "container-top-left" key={title}>
                                <article>
                                    <img src = { urlToImage } alt={title}/>        
                                    <div>
                                        <h3>{title}</h3>
                                        <br />
                                        <p>{description}</p>
                                        <Link to={`/note/${title}`}>Leer</Link>
                                    </div>
                                </article>
                            </div>
                        )
                    })        
                    }

                <h2>Salud</h2>
                {
                    categories.slice(9, 15).map(({title, urlToImage, description}:Articles) =>{
                    return (
                            <div className = "container-bottom-left" key={title}>
                                <article>
                                <img src = { urlToImage } alt={title}/>        
                                </article>

                                <article>
                                    <div>
                                        <h3>{title}</h3>
                                        <br />
                                        <p>{description}</p>
                                        <Link to={`/note/${title}`}>Leer</Link>
                                    </div>
                                </article>
                            </div>
                        )
                    })        
                }
            </section>
            <section className = "main-container-right">
                <h2>Tecnología</h2>
                {

                    categories.slice(1, 13).map(({title, urlToImage, publishedAt, description}:Articles) =>{

                    return(

                        <article key={title}>
                            <h4>{publishedAt}</h4>
                            <div>
                                <h2>{title}</h2>
                                <br />
                                <p>{description}</p>

                                <Link to={`/note/${title}`}>Leer</Link>
                            </div>
                            <img src = {urlToImage} alt={title}/>
                        </article>               
                        )
                        })                
                }
            </section>
        </main>
  )
}
