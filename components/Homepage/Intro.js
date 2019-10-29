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
      What's up! Thanks for visiting my site. Like everything I do, we're always
      under construction here, making things better and <em>sweeeet</em>. As I
      said, before you so kindly clicked on this link, I'm a software developer
      and my favorite thing to do is to make a website more visually pleasing to
      the user and create an all around optimal user experience.
    </p>
    <style jsx>{`
      p {
        color: white;
        text-shadow: 3px 3px 3px black;
        font-family: Courier New;
        line-height: 175%;
        font-size: 120%;
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
