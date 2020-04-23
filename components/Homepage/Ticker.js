import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { featureSkills } from "../../data/featureSkills";
import { useTrail, animated } from "react-spring";

const TickerComponent = () => {
  const [items, setItem] = useState([...featureSkills]);
  const trail = useTrail(items.length, {
    opacity: 1,
    color: "white",
    fontFamily: "Courier New",
    from: { opacity: 0 },
  });
  return (
    <Row className="justify-content-between">
      {trail.map((props, index) => (
        <animated.h5 key={items[index]} style={props}>
          {items[index]}
        </animated.h5>
      ))}
    </Row>
  );
};

export default TickerComponent;
