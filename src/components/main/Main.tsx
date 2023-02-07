import "../../styles/components/_main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <section className="main-container-left">
          <div className="container-top-left">
            <h2>Deporte</h2>

            <article className="article-main">
              <div className="article-content">
                <h3>Test Article Left</h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias corporis repellat quaerat incidunt sed ipsum
                </p>
              </div>
              <div className="article-image">
                <img
                  src="https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg"
                  alt=""
                />
              </div>
            </article>
          </div>
          <div className="container-top-right">
            <h2>Salud</h2>
            <article>
              <img
                src="https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg"
                alt=""
              />
              <div>
                <h3>Test Article Right</h3>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias corporis repellat quaerat incidunt sed ipsum
                  recusandae blanditiis nobis ab iste, natus cum ipsa tenetur
                  accusantium, minima eaque. Quo, delectus expedita.
                </p>
              </div>
            </article>
            <article>
              <img
                src="https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg"
                alt=""
              />
              <div>
                <h3>Test Article Right</h3>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias corporis repellat quaerat incidunt sed ipsum
                  recusandae blanditiis nobis ab iste, natus cum ipsa tenetur
                  accusantium, minima eaque. Quo, delectus expedita.
                </p>
              </div>
            </article>
            <article>
              <img
                src="https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg"
                alt=""
              />
              <div>
                <h3>Test Article Right</h3>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias corporis repellat quaerat incidunt sed ipsum
                  recusandae blanditiis nobis ab iste, natus cum ipsa tenetur
                  accusantium, minima eaque. Quo, delectus expedita.
                </p>
              </div>
            </article>
            <article>
              <img
                src="https://www.nationalgeographic.com.es/medio/2022/12/12/aguila-1_405f4994_221212153716_1280x720.jpg"
                alt=""
              />
              <div>
                <h3>Test Article Right</h3>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias corporis repellat quaerat incidunt sed ipsum
                  recusandae blanditiis nobis ab iste, natus cum ipsa tenetur
                  accusantium, minima eaque. Quo, delectus expedita.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Separacion de los section  */}

        <section className="main-container-right">
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
        </section>
      </div>
    </div>
  );
};
export default Main;
