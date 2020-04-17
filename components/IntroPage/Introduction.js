import Link from "next/link";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Introduction = () => (
  <div className="blurb">
    <Row className="intro-row">
      <Col className="intro-col">
        <p>
          Hello, I'm <span>Katharine Francis</span>.
        </p>
      </Col>
    </Row>
    <Row className="intro-row">
      <Col className="intro-col">
        <p>I'm a Software Developer.</p>
      </Col>
    </Row>
    <Row className="intro-row">
      <Col className="intro-col">
        <Link href="/home">
          <a>Learn more</a>
        </Link>
      </Col>
    </Row>

    <style jsx>{`
      .blurb {
        text-align: center;
      }
      p {
        color: white;
        font-size: 45px;
        overflow: hidden;
      }
      a {
        color: white;
        text-decoration: none;
        font-size: 40px;
        transition: all 1s;
      }
      a:hover {
        text-shadow: 5px -5px 25px white;
        letter-spacing: 0.5em;
      }
    `}</style>
  </div>
);

export default Introduction;

// .card {
//   height: 350px;
//   margin: 13% auto;
//   width: 700px;
//   border-radius: 90%;
//   text-align: center;
//   padding-top: 80px;
// }
// .card:hover {
// }
// p {
//   font-size: 25px;
//   color: white;
// }
// p span {
//   font-size: 40px;
// }
// a {
//   font-size: 40px;
//   color: white;
//   display: block;
//   text-decoration: none;
//   transition: font-size 1s;
// }
// a:hover {
//   text-shadow: 10px 5px 30px #3a0a63;
//   font-size: 400%;
// }
