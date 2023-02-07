import { useParams } from "react-router-dom"
import { useNote } from '../hooks/useNews';

export const NoteNews = () => {

  const {id = ''} = useParams();
  console.log(id)
  const { isLoading, note} = useNote(id)


 if (isLoading) {
  return <div>cargando...</div>
 }

  return (
  <>
    <div className="article_body">
        <div className="article_body_box">
            <h1 className="heading medium_header">{note.title}</h1>
  

            <img src={note.urlToImage} alt={note.title}/>
            <p>{note.content}</p>
            <p>{note.description}</p>
            
        </div>
    </div>
    <div className="article_footer" >
        <div className="d-flex">
            {/* <img className="thumb--large" src="http://placekitten.com/100/100"/}> */}
            <div>
                <h4>{note.author}</h4>
                <p className="grey">Publicado _ {note.publishedAt}</p>
            </div>
        </div>
    </div>

</>

  )
}