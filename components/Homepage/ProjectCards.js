import React, { useState } from "react";
import Link from "next/link";
//import ProjectCard from "./ProjectCard";
import { Card, CardDeck, Col } from "react-bootstrap";
//import { imageCards } from "../../data/imageCards";
// import Red from "../../public/red_tracker-card.png";
// import Stock from "../../public/stock_portfolio_card.png";
// import Butterfly from "../../public/butterflies_card.png";

const ProjectCards = () => {
  //const [cards] = useState([1, 2, 3]);

  //return <ProjectCard />;
  return (
    <CardDeck>
      <Col xs={6} sm={6} md={4}>
        <div className="hover-effect">
          <div className="front">
            <Card bg="danger" text="light">
              <Card.Img variant="top" src="red_tracker_card.png" />
            </Card>
          </div>
          <div className="back">
            <Card bg="danger" text="light">
              <Card.Body>
                <div className="description-box"></div>
                <Card.Title>Red Tracker</Card.Title>
                <Card.Text>
                  <Link href="/projects/1">
                    <a>Project Description</a>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Col>

      <Col xs={6} sm={6} md={4}>
        <div className="hover-effect">
          <div className="front">
            <Card>
              <Card.Img variant="top" src="stock_portfolio_card.png" />
            </Card>
          </div>
          <div className="back">
            <Card>
              <Card.Body>
                <Card.Title>My Stock Portfolio</Card.Title>
                <Card.Text>
                  <Link href="/projects/2">
                    <a>Project Description</a>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Col>

      <Col xs={6} sm={6} md={4}>
        <div className="hover-effect">
          <div className="front">
            <Card>
              <Card.Img variant="top" src="butterflies_card.png" />
            </Card>
          </div>
          <div className="back">
            <Card>
              <Card.Body>
                <Card.Title>Support Butterflies</Card.Title>
                <Card.Text>
                  <Link href="/projects/3">
                    <a>Project Description</a>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Col>

      <style jsx>{`
        .back {
          transform: rotateY(90deg);
          min-height: 200px;
          min-width: 200px;
          margin-bottom: 4em;
        }
        .hover-effect:hover div.back {
          animation: twirl 0.2s 0.2s ease-out forwards reverse;
        }
        .front {
          position: absolute;
          min-height: 200px;
          min-width: 200px;
        }
        .hover-effect:hover div.front {
          animation: twirl 0.2s ease-in forwards;
        }
        .description-box {
          postion: relative;
        }

        @keyframes twirl {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(90deg);
          }
        }
      `}</style>
    </CardDeck>
  );
};

export default ProjectCards;

//<div>{cards && cards.map((card) => <ProjectCard key={card} />)}</div>;
