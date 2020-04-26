import React, { useState } from "react";
//import ProjectCard from "./ProjectCard";
import { Card, CardDeck } from "react-bootstrap";
//import { imageCards } from "../../data/imageCards";
// import Red from "../../public/red_tracker-card.png";
// import Stock from "../../public/stock_portfolio_card.png";
// import Butterfly from "../../public/butterflies_card.png";

const ProjectCards = () => {
  //const [cards] = useState([1, 2, 3]);

  //return <ProjectCard />;
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="red_tracker_card.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="stock_portfolio_card.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="butterflies_card.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <style jsx>{`
        img {
          height: 160px;
          width: 207px;
        }
      `}</style>
    </CardDeck>
  );
};

export default ProjectCards;

//<div>{cards && cards.map((card) => <ProjectCard key={card} />)}</div>;
