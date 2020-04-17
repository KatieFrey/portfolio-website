import Layout from "../components/Layout";
import ProjectCard from "../components/Projects/ProjectCard";

export default () => {
  return (
    <Layout textColor="white" backgroundColor="#0f9ca6">
      <div className="experience">
        <div className="skills">
          <h2>Skills</h2>
          <p>
            A growing list of libraries, frameworks and technologies I have
            experience with . . .
          </p>
          <div className="skill-items">
            <img src="../static/javascriptlogo.jpg" />
            <img src="../static/640px-React-icon.svg.png" />
            <img className="redux" src="../static/redux.png" />
            <img src="../static/nodelogo.jpeg" />
            <img className="express" src="../static/express.png" />
            <img src="../static/jest.jpg" />
            <img src="../static/styled-components.png" />
            <img className="htmlcss" src="../static/htmlcss.png" />
            <img className="rails" src="../static/railslogo.png" />
            <img className="ruby" src="../static/rubylogo2.jpeg" />
            <img src="../static/rspec.jpeg" />
            <img className="postgres" src="../static/postgres.png" />
            <img src="../static/firebase.png" />
          </div>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
      <style jsx>{`
        .experience {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .skills {
          display: flex;
          width: 90vw;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 5% 0;
        }
        p {
          color: black;
        }
        .skill-items {
          display: flex;
          justify-content: center;
          align-content: center;
          flex-wrap: wrap;
        }
        img {
          width: 150px;
          height: 100px;
          margin: 2% 3%;
        }
        .express {
          width: 200px;
        }
        .redux {
          width: 95px;
          height: 90px;
        }
        .htmlcss {
          width: 260px;
          height: 115px;
          margintop: 0.25%;
        }
        .rails {
          margin: 2% 4%;
        }
        .ruby {
          margin: 2% 4%;
          height: 100px;
          width: 100px;
        }
        .postgres {
          margin: 2.5% 0;
        }
      `}</style>
    </Layout>
  );
};
