import Intro from "./Intro";
import Cards from "./Cards";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Katharine Francis</h1>
      <section>
        <Intro />
      </section>
      <section>
        <Cards about="about" text="My about section" />
        <Cards projects="projects" text="My projects section" />
      </section>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          height: 250px;
          background: linear-gradient(#0f0f0f, transparent);
          margin-top: 9%;
        }
        h1 {
          color: white;
          font-family: Courier New;
          margin: 5% auto;
          letter-spacing: 5px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
