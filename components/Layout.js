import Header from "./Header";
import styled from "styled-components";
//import img from "../static/art-artistic-bright-2040273.jpg";

const MyImage = () => {
  return <img src="../static/art-artistic-bright-2040273.jpg" alt="my image" />;
};

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  zIndex: "2"
};

// const backgroundStyle = {
//   height: "80vh",
//   width: "100vw"
// };
// const Background = styled.div`
//   background-image: url(${img});
//   background-size: cover;
// `;

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
