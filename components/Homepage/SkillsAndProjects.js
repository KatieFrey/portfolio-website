import { Container, Row, Col } from "react-bootstrap";
import Ticker from "./Ticker";
import ProjectCards from "./ProjectCards";

const SkillsAndProjects = () => {
  return (
    <Container>
      <Row>
        <div className="skills-and-projects">
          <Col>
            <Row className="justify-content-md-center justify-content-xs-center">
              <h2>Skills</h2>
            </Row>
            <Ticker />
            <Row className="justify-content-md-center justify-content-xs-center">
              <h2>Projects</h2>
            </Row>
            <Row>
              <div className="projectCards">
                <ProjectCards />
              </div>
            </Row>
          </Col>
        </div>
      </Row>
      <style jsx>{`
        .skills-and-projects {
          background-color: #9c81e2;
          width: 100%;
          height: 100%;
          padding: 2em;
          border: solid 2px white;
        }
        p,
        h2 {
          color: white;
          font-family: Courier New;
          padding: 20px 0;
        }
      `}</style>
    </Container>
  );
};

export default SkillsAndProjects;
