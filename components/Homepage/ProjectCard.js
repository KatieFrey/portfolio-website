import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { imageCards } from "../../data/imageCards";

const ProjectCard = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)}>
      <a.div
        className="c back"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      />
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      />
      <style jsx>{`
        .c {
          position: absolute;
          min-width: 500px;
          min-height: 500px;
          width: 100%;
          height: 100%;
          cursor: pointer;
          will-change: transform, opacity;
        }

        .front,
        .back {
          background-size: cover;
        }

        .back {
          background-image: url("https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop");
        }

        .front {
          background-image: url("https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop");
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;

/*
const image = imageCards[num - 1];
  const [selected, setSelected] = useState(false);
  const { opacity, transform } = useSpring({
    config: {
      friction: 22,
      tension: 500,
    },
    opacity: selected ? 1 : 0,
    transform: `rotateY(
	 ${selected ? 180 : 0}deg)`,
  });
  const inverseOpacity = (o) => 1 - o;
  const inverseTransform = (t) => `${t} rotateY(180deg)`;
  const transformCard = (x, y, scale) =>
    `perspective(1000px) rotateX(${x}deg)
  rotateY(${y}deg) scale(${scale})`;

  const [props, set] = useSpring(() => ({
    state: [0, 0, 1],
  }));
  const calculateValues = (x, y) => [
    -(y - window.innerHeight / 2) / 40,
    (x - window.innerWidth / 2) / 40,
    1.1,
  ];

  console.log("Card: ", num, image);

  return (
    <animated.div
      className="ProjectCard"
      onClick={() => setSelected(!selected)}
      onMouseLeave={() =>
        set({
          state: [0, 0, 1],
        })
      }
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({
          state: calculateValues(x, y),
        })
      }
      style={{ transform: !selected && props.state.interpolate(transformCard) }}
    >
      <animated.div
        className="ProjectCard__front"
        style={{
          height: "90%",
          width: "25%",
          backgroundImage: `url(${image})`,
          opacity: opacity.interpolate(inverseOpacity),
          transform,
        }}
      />
      <animated.div
        className="ProjectCard__back"
        style={{
          height: "90%",
          width: "25%",
          opacity,
          transform: transform.interpolate(inverseTransform),
        }}
      />
      <style jsx>
        {`
      .ProjectCard {
        filter: drop-shadow(0 3px 6px
         rgba(0, 0, 0, 0.16))
         drop-shadow(0 3px 6px
         rgba(0, 0, 0, 0.1));
        transition: filter 0.5s;
      }
      .ProjectCard:hover {
        filter: drop-shadow(0 14px 28px
         rgba(0, 0, 0, 0.25))
         drop-shadow(0 10px 10px
       rgba(0, 0, 0, 0.1));
    `}
      </style>
    </animated.div>
  );
*/
