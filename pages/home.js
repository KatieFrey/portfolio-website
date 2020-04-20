import Layout from "../components/AllPages/Layout";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <Layout backgroundColor="#9c81e2">
      <div className="homeBackground">
        <Container>
          <Row className="justify-content-md-center justify-content-xs-center">
            <h1>Katharine Francis</h1>
          </Row>
          <Row
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            <Col lg={1.5} md={1}></Col>
            <Col xs={12} md={5} lg={4.5}>
              <div className="img-column">
                <img src="/KF_website_headshot.png"></img>
              </div>
            </Col>
            <Col xs={12} md={5} lg={4.5}>
              <Row>
                <div className="blurb-column">
                  <p>
                    I am a software developer based in New York. This is my
                    professional and personal website. Scroll down to learn
                    more.
                  </p>
                </div>
              </Row>
              <Row>
                <div
                  style={{
                    color: "white",
                    height: "40px",
                    width: "40px",
                    margin: "10px auto",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    size="xs"
                    className="animated 10s swing delay-2s"
                  />
                </div>
              </Row>
            </Col>
            <Col md={1} lg={1.5}></Col>
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
        }
        h1 {
          margin: 1em;
          font-family: Courier New;
          letter-spacing: 0.25em;
          color: white;
          text-shadow: 2px 2px gray;
        }
        .image-column {
          min-height: 100%;
          min-width: 100%;
          margin-bottom: 20px;
        }
        img {
          height: 100%;
          width: 100%;
          margin-bottom: 20px;
        }
        .blurb-column {
          border: solid 2px white;
          background-color: #9c81e2;
          padding: 0.5em;
          width: 100%;
          margin-bottom: 20px;
          margin-left: 10px;
        }
        p {
          color: white;
          padding: 0.25em;
          font-family: Courier New;
          height: 100%;
          margin: 0 auto;
          font-size: 1.5em;
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
