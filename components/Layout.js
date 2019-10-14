import Header from "./Header";

const layoutStyle = {
  padding: 30,
  background: "black"
};

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
