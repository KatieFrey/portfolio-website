import { Container } from "react-bootstrap";
import SplashPage from "./SplashPage";
import HorizontalLine from "./HorizaontalLine";
import SkillsAndProjects from "./SkillsAndProjects";
import ContactMe from "./ContactMe";

const Intro = () => {
  return (
    <div className="homeBackground">
      <Container>
        <SplashPage />
        <HorizontalLine />
        <SkillsAndProjects />
        <HorizontalLine />
        <ContactMe />
        <div className="extra-space"></div>
      </Container>
      <style jsx>{`
        .homeBackground {
          background-image: radial-gradient(
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0)
            ),
            url("art-artistic-bright-2040273.jpg");
          min-height: 100vh;
          min-width: 100vw;
          background-size: cover;
        }
        .extra-space {
          width: 10em;
          height: 10em;
        }
      `}</style>
    </div>
  );
};

export default Intro;
