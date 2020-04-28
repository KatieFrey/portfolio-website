import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/AllPages/Layout";
import { projectData } from "../../data/projectData";

import { Row, Col, Spinner } from "react-bootstrap";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData[id];
  console.log("Id: ", id);
  console.log("Project: ", project);

  // const [queryId, setQueryId] = useState(null)
  // useEffect(()=> {
  //   if(router && router.query) {
  //     setQueryId(router.query.id)
  //   }
  // }, [router])

  return (
    <Layout textColor="white" backgroundColor="#13adf7">
      {id && project["img"] ? (
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

              <Link href={project["githubLink"]}>
                <a>{project["githubTitle"]}</a>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Website</h3>
              <Link href={project["website"]}>
                <a>{project["websiteTitle"]}</a>
              </Link>
            </Col>
          </Row>
          <br />
          <br />
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

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
