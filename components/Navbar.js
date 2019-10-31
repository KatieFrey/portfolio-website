import Link from "next/link";
import styled from "styled-components";

export const Template = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10% 15% 10% 10%;
  position: fixed;
  top: 0;
  padding: 2% 0 1.5%;
  margin-left: -1%;
  width: 101%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 125%;
  font-family: Courier New;
  margin-right: 10px;
  :hover {
    opacity: 0.6;
  }
  :visited {
    color: white;
  }
  :active {
    text-shadow: 10px 5px 30px #de121c;
  }
`;

export const ImageLogo = styled.a`
  text-decoration: none;
  color: white;
  font-size: 200%;
  margin-left: 20%;
  margin-bottom: -5%;
  padding-bottom: 2%;
  transition: all 0.5s;
  :hover {
    font-size: 225%;
    margin-bottom: -9%;
  }
`;

const Navbar = () => {
  return (
    <Template>
      <Link href="/">
        <ImageLogo>KF</ImageLogo>
      </Link>
      <div></div>
      <Link href="/home">
        <StyledLink>
          <span>Home</span>
        </StyledLink>
      </Link>
      <Link href="/projects">
        <StyledLink>Projects</StyledLink>
      </Link>
      <Link href="/about">
        <StyledLink>About</StyledLink>
      </Link>
      <Link href="/home#contactus">
        <StyledLink>Contact</StyledLink>
      </Link>
      <style jsx>{`
        span:hover {
          text-shadow: 10px 5px 30px #de121c;
        }
      `}</style>
    </Template>
  );
};

export default Navbar;