import "../../styles/components/_main.scss";
import ContainLeft from "./ContainLeft";
import ContainRight from "./ContainRight";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <ContainLeft />

        {/* Separacion de los section  */}
        <ContainRight />

        {/* <section className="main-container-right">
          <div className="container-full-right">
            <div className="category">
              <h2>Ultimo Minuto</h2>
            </div>
            <article className="article-main-right">
              <div className="article-image-right">
                <img
                  src="https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg"
                  alt=""
                />
              </div>
              <div className="article-content-right">
                <h3>Test Article Left</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias corporis repellat quaerat incidunt sed ipsum
                  recusandae blanditiis nobis ab iste, natus cum ipsa tenetur
                  accusantium, minima eaque. Quo, delectus expedita.
                </p>
              </div>
            </article>
          </div>
        </section> */}
      </div>
    </div>
  );
};
export default Main;
