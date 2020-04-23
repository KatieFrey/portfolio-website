import { Container, Row, Col } from "react-bootstrap";

const HorizontalLine = () => {
  return (
    <Container>
      <Row>
        <Col>
          <hr className="hr-line" />
        </Col>
      </Row>
      <style jsx>{`
        .hr-line {
          color: white;
          margin: 5em 0;
          border: 0;
          height: 3px;
          background-image: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.75),
            rgba(255, 255, 255, 0)
          );
        }
      `}</style>
    </Container>
  );
};

export default HorizontalLine;
