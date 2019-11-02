import Intro from "./Intro";
import Cards from "./Cards";

const SplashPage = () => {
  let height = "55vh";
  return (
    <div className="splashpage">
      <h1>Katharine Francis</h1>
      <Intro />
      <div className="little-space" />
      <Cards about="about" text="About Me" height={height} />
      <div className="little-space" />
      <Cards projects="projects" text="My projects section" height={height} />
      <div className="little-space" id="contactus" />
      <Cards contact="contact" text="Contact info" height={height} />
      <style jsx>{`
        .splashpage {
          display: flex;
          flex-direction: column;
          height: 250px;
          background: linear-gradient(#0f0f0f, transparent);
          margin-top: 9%;
        }
        h1 {
          color: white;
          font-family: Courier New;
          margin: 9% auto 5%;
          letter-spacing: 5px;
          font-size: 250%;
        }
        .little-space {
          display: block;
          border-bottom: 1px solid white;
          margin: 11% auto;
          width: 60%;
        }
      `}</style>
    </div>
  );
};

export default SplashPage;
