import React, { useState } from "react";
import Link from "next/link";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NavBarHeader = ({ textColor, backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <Link href="/">
          <a>KF</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#features">
            <Link href="/home">
              <a>Home</a>
            </Link>
          </Nav.Link>
          <Nav.Link href="#features">
            <Link href="/experience">
              <a>Experience</a>
            </Link>
          </Nav.Link>
          <Nav.Link href="#features">
            <Link href="/about">
              <a>About</a>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarHeader;

//   <Template backgroundColor={backgroundColor}>
//     <Link href="/">
//       <ImageLogo textColor={textColor}>KF</ImageLogo>
//     </Link>
//     <div></div>
//     <Link href="/home">
//       <StyledLink textColor={textColor}>
//         <span>Home</span>
//       </StyledLink>
//     </Link>
//     <Link href="/experience">
//       <StyledLink textColor={textColor}>Experience</StyledLink>
//     </Link>
//     <Link href="/about">
//       <StyledLink textColor={textColor}>About</StyledLink>
//     </Link>
//     <Link href="/home#contactus">
//       <StyledLink textColor={textColor}>Contact</StyledLink>
//     </Link>
//     <style jsx>{`
//       span:hover {
//         text-shadow: 10px 5px 30px #de121c;
//       }
//     `}</style>
//   </Template>
// );
