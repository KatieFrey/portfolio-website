import { Form, Row, Col, Button } from "react-bootstrap";

const ContactMe = () => (
  <Form
    action="https://send.pageclip.co/kfZ1wO2kCgge5c1Pa1sjoV7oiIBpVaNO"
    className="pageclip-form"
    method="post"
    className="form"
  >
    <div className="contact-me-box">
      <Row className="justify-content-center">
        <h2>Contact Me</h2>
      </Row>
      <Row>
        <Col>
          <Form.Control name="Name" placeholder="Name" />
        </Col>
        <Col>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              name="Email"
              type="email"
              placeholder="Email address"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows="3"
              name="Comment"
              placeholder="Comment"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Button
            variant="light"
            type="submit"
            className="pageclip-form__submit"
          >
            Submit
          </Button>
        </Col>
      </Row>
    </div>
    <style jsx>{`
      .contact-me-box {
        background-color: #9c81e2;
        width: 100%;
        height: 100%;
        padding: 2em;
        border: solid 2px white;
      }
      h2 {
        color: white;
        font-family: Courier New;
        padding: 20px 0;
      }
    `}</style>
  </Form>
);

export default ContactMe;

/*
<style jsx>{`
      .form {
        display: grid;
        grid-template-columns: 15% 33% 33%;
      }
      input,
      textarea,
      button {
        margin: 10% 0 0;
        width: 75%;

        font-family: Courier New;
        font-size: 155%;
      }
      textarea {
        width: 100%;
        height: 50%;
      }
      button {
        font-size: 175%;
        margin-top: 10%;
        width: 50%;
        height: 15%;
        float: right;
      }
    `}</style>
*/
