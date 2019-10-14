import Link from "next/link";
import styled from "styled-components";

export const Template = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10% 10% 10% 10%;
`;

const linkStyle = {
  textDecoration: "none",
  marginBottom: "20px",
  fontSize: "20px"
};
const Header = () => {
  return (
    <Template>
      <Link href="/">
        <a style={linkStyle}>Logo</a>
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
      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: white;
          font-family: "Arial";
        }

        a:hover {
          opacity: 0.6;
        }

        a:visited {
          color: white;
        }
      `}</style>
    </Template>
  );
};

export default Header;
