import Layout from "../components/AllPages/Layout";
import SplashPage from "../components/Homepage/SplashPage.js";

export default () => {
  return (
    <Layout backgroundColor="rgba(0,0,0,0.8)">
      <div className="homeBackground">
        <SplashPage />
      </div>
      <style jsx>{`
        .homeBackground {
          margin: -9% auto;
          height: 475vh;
          background-image: url("/art-close-up-computer-keyboard-3029916.jpg");
          background-size: cover;
        }
      `}</style>
    </Layout>
  );
};
