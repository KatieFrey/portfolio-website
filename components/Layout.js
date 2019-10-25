import Header from "./Header";

const layoutStyle = {
  height: "100vh",
  margin: "-9% auto",
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
        }
      `}</style>
    </div>
  );
};

export default Layout;
