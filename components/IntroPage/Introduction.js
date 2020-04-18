import Link from "next/link";
import { Row, Col } from "react-bootstrap";

const Introduction = () => (
  <div className="message">
    <Row>
      <Col>
        <p>
          Hello, I'm <span>Katharine Francis</span>.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>I'm a Software Developer.</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Link href="/home">
          <a>Learn more</a>
        </Link>
      </Col>
    </Row>

    <style jsx>{`
      .message {
        text-align: center;
      }
      p {
        color: white;
        font-size: 45px;
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
        text-decoration: none;
        color: white;
      }
    `}</style>
  </div>
);

export default Introduction;
