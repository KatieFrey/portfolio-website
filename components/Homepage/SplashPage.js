import Intro from "./Intro";
import AnimatedCard from "./AnimatedCard";

const SplashPage = () => {
  let height = "55vh";
  return (
    <div className="splashpage">
      <h1>Katharine Francis</h1>
      <Intro />
      <div className="little-space" />
      <AnimatedCard about="about" text="About Me" height={height} />
      <div className="little-space" />
      <AnimatedCard
        experience="experience"
        text="Dev Experience"
        height={height}
      />
      <div className="little-space" id="contactus" />
      <AnimatedCard contact="contact" text="Contact info" height={height} />
      <style jsx>{`
        .splashpage {
          display: flex;
          flex-direction: column;
          height: 250px;
          background: linear-gradient(#0f0f0f, transparent);
          margin-top: 9%;
          margin-left: 3%;
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
