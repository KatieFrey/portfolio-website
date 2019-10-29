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

export const Container = styled.div``;

const linkStyle = {
  textDecoration: "none"
};
const Header = () => {
  return (
    <Container>
      <Template>
        <Link href="/">
          <a className="logo">Logo</a>
        </Link>
        <div></div>
        <Link href="/home">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/projects">
          <a style={linkStyle}>Projects</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/home#contactus">
          <a style={linkStyle}>Contact</a>
        </Link>
        <style jsx>{`
          .logo {
            text-decoration: none;
            margin-left: 20%;
          }
          a {
            text-decoration: none;
            color: white;
            font-family: Courier New;
            marginright: 10px;
            transition: font-size 1s;
          }
          a:hover {
            opacity: 0.6;
            font-size: 125%;
          }
          a:visited {
            color: white;
          }
        `}</style>
      </Template>
    </Container>
  );
};

export default Header;
