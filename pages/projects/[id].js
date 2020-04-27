import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/AllPages/Layout";
import { projectData } from "../../data/projectData";

import { Row, Col } from "react-bootstrap";

let images = {
  1: "/red_tracker_card.png",
  2: "/stock_portfolio_card.png",
  3: "/butterflies_card.png",
};

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData[id];

  return (
    <Layout textColor="white" backgroundColor="#13adf7">
      <div className="project_info">
        <Row>
          <Col>
            <img src={project["img"]} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>{project.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {project["tech"].map((skill, index) => (
              <span key={index}>{skill} </span>
            ))}
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="auto">
            <p>{project["description"]}</p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3>GitHub Repository</h3>
            {project["githubLink"].map((link) => (
              <Link href={link}>
                <a>{link} </a>
              </Link>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Website</h3>
            <Link href={project["website"]}>
              <a>{project["website"]}</a>
            </Link>
          </Col>
        </Row>
        <br />
        <br />
      </div>
      <style jsx>{`
        .project_info {
          min-height: 75vh;
          min-width: 100vw;
          font-family: Courier New;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img {
          height: 10em;
          width: 10em;
          margin: 2em;
        }
        span {
          word-spacing: 1em;
        }
        p {
          width: 50%;
          margin: 0 auto;
        }
        a {
          display: flex;
          justify-content: center;
          padding: 0 4em;
        }

        h3 {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default Project;
