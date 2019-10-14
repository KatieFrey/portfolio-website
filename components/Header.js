import Link from "next/link";
import styled from "styled-components";

export const Template = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10% 10%;
`;

const Header = () => {
  return (
    <Template>
      <Link href="/">
        <a>Logo</a>
      </Link>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Template>
  );
};

export default Header;
