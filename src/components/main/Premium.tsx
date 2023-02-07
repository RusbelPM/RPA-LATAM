import "../../styles/components/_premium.scss";
const Premium = () => {
  return (
    <div className="premium">
      <h2 className="h2__premium">Ultimo Minuto</h2>

      <article className="article__premium">
        <div className="article__premium__image">
          <img
            src="https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg"
            alt=""
          />
        </div>
        <div className="article__premium__content">
          <h3 className="h3__premium">Test Article Left</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            corporis repellat quaerat incidunt sed ipsum recusandae blanditiis
            nobis ab iste, natus cum ipsa tenetur accusantium, minima eaque.
            Quo, delectus expedita.
          </p>
        </div>
      </article>
    </div>
  );
};
export default Premium;
