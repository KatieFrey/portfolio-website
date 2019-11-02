import Navbar from "./Navbar";
import Header from "./Header";

const layoutStyle = {
  //height: "100vh",
  fontFamily: "Courier New"
};

const Layout = ({ children, textColor, backgroundColor }) => {
  return (
    <div style={layoutStyle}>
      <Header />
      <Navbar textColor={textColor} backgroundColor={backgroundColor} />
      <div className="children">{children}</div>
      <style jsx>{`
        .children {
          font-family: Courier New;
          height: 100vh;
          width: 105vw;
          margin-left: -2%;
          padding-right: 10%;
        }
      `}</style>
    </div>
  );
};

export default Layout;
