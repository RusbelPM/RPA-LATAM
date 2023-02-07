import { useArticles } from "../hooks"
import { LoadingSpinnerSmall } from '../global-components/loading/spinner-small';
import { Latest } from "../components";

export const TheLast = () => {
  const { isLoading } = useArticles();

  if (isLoading) {
    return <LoadingSpinnerSmall />
  }
  return (
    <>
        <section className = "banner">
            <div className = "banner-main-content">
                <h2>ULTIMAS NOTICIAS</h2>
                <h3>Portal de noticias líder en el Perú</h3>

                <div className = "current-news-head">
                    <h3>Un sector del congreso planea reabrir debate de adelanto de elecciones.<span>Sebastian Ortiz M.</span></h3>

                    <h3>Tomas Unger y el día que abrio un blog, reflecionó spbre su uso y gano un concurso<span>Carlos Batalla</span></h3>

                    <h3>Dictan Prision preventiva contra 22 personas por actos vandálicos<span>Redacción EC.</span></h3>

                    <h3>1444 muertos tras potente terremoto con epicentro en Turquia.<span>Redacción Agencia AFP.</span></h3>
                    
                    <h3>Día nacional de la pachamanca..¡Donde celebrarla!<span>Redacción EC.</span></h3>

                    <h3>Estados Unidos: conoce los requisitos, precio y cómo tramitar la visa de estudiante<span>Redacción Agencia AFP.</span></h3>
                </div>
            </div>
            
            <Latest/>
            
        </section>
        <hr/>

    </>
  )
}