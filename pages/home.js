import Layout from "../components/AllPages/Layout";
import SplashPage from "../components/Homepage/SplashPage.js";
import { Container, Row, Col } from "react-bootstrap";
import { headshot } from "../public/KF_website_headshot.png";

export default () => {
  return (
    <Layout backgroundColor="#9c81e2">
      <div className="homeBackground">
        <Container>
          <Row className="justify-content-md-center">
            <h1>Katharine Francis</h1>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{
              maxHeight: "65vh",
              maxWidth: "65vw",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <Col>
              <div className="img-column">
                <img src="/KF_website_headshot.png"></img>
              </div>
            </Col>
            <Col>
              <div className="blurb-column">
                <p>
                  I am a software developer based in New York. This is my
                  professional and personal website. Scroll down to learn more.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
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
        img {
          height: 100%;
          width: 100%;
        }
        h1 {
          margin: 2em;
          font-family: Courier New;
          font-weight: bolder;
          color: white;
          text-shadow: 2px 2px gray;
        }
        .image-column {
          height: 100%;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        .blurb-column {
          background-color: #9c81e2;
          min-width: 100%;
          padding: 0.5em;
          display: flex;
          flex-wrap: wrap;
        }
        p {
          color: white;
          padding: 0.25em;
          font-family: Courier New;
          height: 100%;
          margin: 0 auto;
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
