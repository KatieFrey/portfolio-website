import Layout from "../components/AllPages/Layout";
import ProjectCard from "../components/Projects/ProjectCard";

export default () => {
  return (
    <Layout textColor="white" backgroundColor="#13adf7">
      <div className="experience">
        <div className="skills">
          <h2>Skills</h2>
          <p>
            A growing list of libraries, frameworks and technologies I have
            experience with . . .
          </p>
          <div className="skill-items">
            <img src="/javascriptlogo.jpg" />
            <img src="/640px-React-icon.svg.png" />
            <img className="redux" src="/redux.png" />
            <img src="/nodelogo.jpeg" />
            <img className="express" src="/express.png" />
            <img src="/jest.jpg" />
            <img src="/styled-components.png" />
            <img className="htmlcss" src="/htmlcss.png" />
            <img className="rails" src="/railslogo.png" />
            <img className="ruby" src="/rubylogo2.jpeg" />
            <img src="/rspec.jpeg" />
            <img className="postgres" src="/postgres.png" />
            <img src="/firebase.png" />
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
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0)
          ),
          url("art-artistic-bright-2040273.jpg");
        min-height: 100vh;
        min-width: 100vw;
        background-size: cover;
        overflow: hidden;
      }
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
