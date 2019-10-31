const Image = () => (
  <div>
    <img src="../../static/website-profile.jpg" alt="Me!"></img>
    <style jsx>{`
      img {
        height: 50vh;
        margin: auto;
      }
    `}</style>
  </div>
);
const Blurb = () => (
  <div>
    <p>
      I am a software developer based in New York. This is my
      professional/personal website. Scroll down to learn more.
    </p>
    <style jsx>{`
      p {
        color: white;
        text-shadow: 3px 3px 3px black;
        font-family: Courier New;
        line-height: 175%;
        font-size: 200%;
        margin: 0;
      }
    `}</style>
  </div>
);

const imgStyle = {
  margin: "auto"
};
const Intro = () => {
  return (
    <div className="intro">
      <div></div>
      <Image style={imgStyle} />
      <Blurb />
      <style jsx>{`
        .intro {
          display: grid;
          grid-template-columns: 5% 40% 50%;
          margin: 0 auto;
          width: 80%;
          padding: 2%;
        }
      `}</style>
    </div>
  );
};

export default Intro;
