const Cards = ({ about, text }) => {
  return (
    <div>
      {about ? (
        <div>
          <section className="cards">
            <h1>{text}</h1>
          </section>
          <style jsx>{`
            .cards {
              background: rgba(255, 255, 255, 0.8);
              height: 70vh;
              clip-path: polygon(10% 0, 98% 0, 90% 100%, 0% 100%);
            }
            h1 {
              text-align: center;
              padding-top: 5%;
            }
          `}</style>
        </div>
      ) : (
        <div>
          <section className="cards">
            <h1>{text}</h1>
          </section>
          <style jsx>{`
            .cards {
              background: rgba(255, 255, 255, 0.8);
              height: 70vh;
              clip-path: polygon(0 0, 90% 0, 98% 100%, 10% 100%);
              margin: 10% auto;
            }
            h1 {
              text-align: center;
              padding-top: 5%;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Cards;
