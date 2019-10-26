import Header from "./Header";

const layoutStyle = {
  height: "100vh",
  background: "black",
  fontFamily: "Courier New"
};

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <Header />
      <div className="children">{props.children}</div>
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
