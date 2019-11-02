import Link from "next/link";

const Cards = ({ about, text, projects, contact, height }) => {
  return (
    <div>
      {about ? (
        <div>
          <section className="cards">
            <h1>
              <span></span>
              <span>
                {text} <hr />
              </span>
              <span></span>
            </h1>
            <p>
              <span></span>
              <span>
                I am a developer who enjoys working in front-end development but
                also gets a kick out of back-end development.
              </span>
              <span></span>
              <span>
                <h2>
                  <a
                    href="../../static/katharine_francis_10_14.pdf"
                    download="your-file"
                  >
                    Download My Resume
                  </a>
                </h2>
              </span>
            </p>
            <div></div>
            <p className="secondPara">
              <span></span>
              <span>
                Click{" "}
                <Link href="/about">
                  <a>Here</a>
                </Link>{" "}
                To Learn More
              </span>
              <span></span>
              <span></span>
            </p>
          </section>
          <style jsx>{`
            .cards {
              display: grid;
              grid-template-rows: 20% 40% 5% 35%;
              margin-top: 10% auto;
              background: rgba(255, 255, 255, 0.8);
              height: ${height};
              clip-path: polygon(10% 0, 96% 0, 90% 100%, 3% 100%);
            }
            h1 {
              display: grid;
              grid-template-columns: 15% 25% 60%;
              text-transform: uppercase;
              font-size: 200%;
            }
            p {
              display: grid;
              grid-template-columns: 20% 40% 5% 20%;
              font-size: 150%;
            }
            .secondPara {
              display: grid;
              grid-template-columns: 20% 40% 5% 20%;
              font-size: 150%;
            }
            hr {
              margin-left: -10%;
              border: 1px solid black;
              width: 70%;
            }
            a {
              text-decoration: none;
              color: black;
              font-weight: 600;
            }
            a:visited {
              color: black;
            }
            h2 {
              text-align: center;
            }
          `}</style>
        </div>
      ) : projects ? (
        <div>
          <section className="cards">
            <h1>{text}</h1>
          </section>
          <style jsx>{`
            .cards {
              background: rgba(255, 255, 255, 0.8);
              height: ${height};
              clip-path: polygon(3% 0, 90% 0, 96% 100%, 10% 100%);
              margin-top: 10% auto;
            }
            h1 {
              text-align: center;
              padding-top: 5%;
            }
          `}</style>
        </div>
      ) : contact ? (
        <div>
          <section className="cards">
            <h1>{text}</h1>
          </section>
          <style jsx>{`
            .cards {
              background: rgba(255, 255, 255, 0.8);
              height: ${height};
              clip-path: polygon(10% 0, 96% 0, 90% 100%, 3% 100%);
            }
            h1 {
              text-align: center;
              padding-top: 5%;
            }
          `}</style>
        </div>
      ) : null}
    </div>
  );
};

export default Cards;
