import React, { useState } from "react";
import Link from "next/link";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const NavBarHeader = ({ textColor, backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundColor,
        color: textColor,
        fontFamily: "Courier New",
      }}
    >
      <Navbar.Brand>
        <Link href="/">
          <a
            style={{
              fontWeight: "bolder",
              letterSpacing: ".15em",
              fontSize: "2em",
            }}
          >
            KF
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Link href="/home">
            <a>Home</a>
          </Link>
          <div className="dropdown">
            <NavDropdown
              title={
                <span
                  className="text-white my-auto"
                  style={{ fontSize: "1.5em" }}
                >
                  Experience
                </span>
              }
              id="collasible-nav-dropdown nav-dropdown"
            >
              <NavDropdown.Item href="/projects/1">
                Red Tracker
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/2">
                My Stock Portfolio
              </NavDropdown.Item>
              <NavDropdown.Item href="/projects/3">
                Support Butterflies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://drive.google.com/file/d/1wttS2VCKIVtMxTs_8EEc_pYIEFj_2XIB/view?usp=sharing"
                target="_blank"
              >
                Resume
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <Link href="/about">
            <a>About</a>
          </Link>

          <Link href="/home#contactme">
            <a>Contact</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
      <style jsx>{`
        a {
          color: white;
          margin-right: 30px;
          font-size: 1.5em;
          margin-top: 0.3em;
        }
        a:hover {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
        }
        .dropdown {
          color: white;
          margin-right: 30px;
        }
      `}</style>
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
