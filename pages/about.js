import Layout from "../components/AllPages/Layout";

export default () => {
  return (
    <Layout backgroundColor="#ed74aa">
      <div className="about">
        <p>
          I’m naturally a San Franciscan who found her way into the New York
          area. As of today, I live in Jersey City with my husband and we dream
          about owning a corgi one day.
          <br />
          <br />
          Before altering my course into coding, I acquired a B.A. in Musical
          Theatre at California State University, Chico. As an{" "}
          <em>aspiring actress</em>, I eventually ended up in the service
          industry as a Restaurant Manager.
          <br />
          <br />
          What I love about coding, and why I decided to change directions, is
          because there is always a problem to solve! I'm naturally inquisitive
          and stubbornly persistent in figuring out how things work.
          <br />
          <br />
          I'm very passionate and dedicated to my work and always open to
          learning new technologies and frameworks. I have a defined sense of
          aesthetic and enjoy making thoughtful, engaging, and functional web
          applications.
        </p>
      </div>
      <style jsx>{`
        .about {
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0)
          ),
          url("art-artistic-bright-2040273.jpg");
        min-height: 100vh;
        min-width: 100vw;
        background-size: cover;
        overflow: hidden;
      }
        }
        p {
          margin: 15% auto 0;
          width: 50%;
          color: black;
        }
      `}</style>
    </Layout>
  );
};
