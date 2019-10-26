const Intro = () => {
  return (
    <div className="intro">
      <p>
        What's up! Thanks for visiting my site. Like everything I do, we're
        always under construction here, making things better and{" "}
        <em>sweeeet</em>. As I said, before you so kindly clicked on this link,
        I'm a software developer and my favorite thing to do is to make a
        website more visually pleasing to the user and create an all around
        optimal user experience.
      </p>
      <style jsx>{`
        .intro {
          margin: 0 auto;
          width: 85%;
          padding: 2%;
        }
        p {
          color: white;
          text-shadow: 3px 3px 3px black;
          font-family: Courier New;
          line-height: 175%;
          font-size: 120%;
        }
      `}</style>
    </div>
  );
};

export default Intro;
