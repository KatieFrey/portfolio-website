const Cards = ({ about, text, projects, contact, height }) => {
  return (
    <div>
      {about ? (
        <div>
          <section className="cards">
            <h1>{text}</h1>
            <p></p>
          </section>
          <style jsx>{`
            .cards {
              display: grid;
              grid-template-row: 90% 10%;
              grid-template-column: 90% 10%;
              margin-top: 10% auto;
              background: rgba(255, 255, 255, 0.8);
              height: ${height};
              clip-path: polygon(10% 0, 96% 0, 90% 100%, 3% 100%);
            }
            h1 {
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
