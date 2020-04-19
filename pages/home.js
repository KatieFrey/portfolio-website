import Layout from "../components/AllPages/Layout";
import SplashPage from "../components/Homepage/SplashPage.js";

export default () => {
  return (
    <Layout backgroundColor="#9c81e2">
      <div className="homeBackground"></div>
      <style jsx>{`
        .homeBackground {
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
      `}</style>
    </Layout>
  );
};

{
  /* <style jsx>{`
        .homeBackground {
          margin: -9% auto;
          height: 475vh;
          background-image: url("/art-close-up-computer-keyboard-3029916.jpg");
          background-size: cover;
        }
      `}</style> */
}
