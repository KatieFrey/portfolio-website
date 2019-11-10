import { Spring } from "react-spring/renderprops.cjs";
import VisibilitySensor from "react-visibility-sensor";
import Card from "./Cards";

const AnimatedCard = ({ about, experience, contact, text, height }) => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <Spring to={{ opacity: isVisible ? 1 : 0 }}>
        {({ opacity }) => (
          <Card
            style={{ opacity }}
            about={about}
            experience={experience}
            contact={contact}
            text={text}
            height={height}
          />
        )}
      </Spring>
    )}
  </VisibilitySensor>
);

export default AnimatedCard;
