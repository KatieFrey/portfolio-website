import Introduction from "../components/IntroPage/Introduction";
import { Container } from "reactstrap";
// import Header from "../components/Header";

// import { Html } from "next/document";

// import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  return (
    <Container>
      <Introduction />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          font-family: Courier New;
          min-height: 100%;
          min-width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
          font-size: 1rem;
          line-height: 1.5;
        }
        body {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.9)
            ),
            url("../static/art-artistic-bright-2040273.jpg");
          font-family: Courier New;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
      `}</style>
    </Container>
  );
};
