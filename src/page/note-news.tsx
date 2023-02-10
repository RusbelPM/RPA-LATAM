import { useParams } from "react-router-dom";
import { useNote } from "../hooks/useNews";
import LayoutContent from "../layout/LayoutContent";
import LayoutGrid from "../layout/LayoutGrid";

export const NoteNews = () => {
  const { id = "" } = useParams();
  const { isLoading, note } = useNote(id);
  if (isLoading) {
    return <div>cargando...</div>;
  }

  return (
    <LayoutContent>
      <LayoutGrid>
        <div className="note-news">
          <h1>{note.title}</h1>
          <h2>{note.description}</h2>
          <img src={note.urlToImage} alt={note.title} />

          <div className="note-news__publish">
            <p>{note.publishedAt.slice(0, 10)}</p>
          </div>
          <div className="note-news__content">
            <p>{note.content}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              cum fuga mollitia numquam, dicta, corrupti eos laboriosam
              repellendus est placeat voluptatum voluptatibus neque magni
              repudiandae ducimus error labore ad alias. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Corporis tenetur odit voluptate
              fuga commodi animi distinctio doloribus quia enim illum, pariatur
              nesciunt accusamus, sed aliquam recusandae voluptatum nobis
              accusantium alias! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellat cum fuga mollitia numquam, dicta,
              corrupti eos laboriosam repellendus est placeat voluptatum
              voluptatibus neque magni repudiandae ducimus error labore ad
              alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corporis tenetur odit voluptate fuga commodi animi distinctio
              doloribus quia enim illum, pariatur nesciunt accusamus, sed
              aliquam recusandae voluptatum nobis accusantium alias!
            </p>
          </div>
        </div>
      </LayoutGrid>
    </LayoutContent>
    // <>
    //   <div className="article_body">
    //     <div className="article_body_box">
    //       <h1 className="heading medium_header">{note.title}</h1>

    //       <img src={note.urlToImage} alt={note.title} />
    //       <p>{note.content}</p>
    //       <p>{note.description}</p>
    //     </div>
    //   </div>
    //   <div className="article_footer">
    //     <div className="d-flex">
    //       {/* <img className="thumb--large" src="http://placekitten.com/100/100"/}> */}
    //       <div>
    //         <h4>{note.author}</h4>
    //         <p className="grey">Publicado _ {note.publishedAt}</p>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};
