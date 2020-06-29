import React, { useState } from "react";
import Link from "next/link";
//import ProjectCard from "./ProjectCard";
import { Card, CardDeck, Col } from "react-bootstrap";

const ProjectCards = () => {
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
            <Card text="light">
              <Link href="/projects/1">
                <Card.Body>
                  <Card.Img src="card_back_red_tracker.jpg" />
                </Card.Body>
              </Link>
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
            <Card text="light">
              <Link href="/projects/2">
                <Card.Body>
                  <Card.Img src="card_back_stock_portfolio.jpg" />
                </Card.Body>
              </Link>
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
            <Card text="light">
              <Link href="/projects/3">
                <Card.Body>
                  <Card.Img src="card_back_support_butterflies.jpg" />
                </Card.Body>
              </Link>
            </Card>
          </div>
        </div>
      </Col>

      <Col xs={6} sm={6} md={4}>
        <div className="hover-effect">
          <div className="front">
            <Card>
              <Card.Img variant="top" src="youth_connection.jpg" />
            </Card>
          </div>
          <div className="back">
            <Card text="light">
              <Link href="/projects/4">
                <Card.Body>
                  <Card.Img src="card_back_youth_connection.jpg" />
                </Card.Body>
              </Link>
            </Card>
          </div>
        </div>
      </Col>

      <style jsx>{`
        .back {
          transform: rotateY(90deg);
          min-height: 345px;
          min-width: 345px;
          margin-bottom: 4em;
          cursor: pointer;
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
