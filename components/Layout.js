import Navbar from "./Navbar";
import Header from "./Header";

import MyDocument from "../pages/_document";

const layoutStyle = {
  //height: "100vh",
  fontFamily: "Courier New"
};

const Layout = ({ children, textColor, backgroundColor }) => {
  return (
    <div style={layoutStyle}>
      <body>
        <Header />
        <Navbar textColor={textColor} backgroundColor={backgroundColor} />
        <div className="children">{children}</div>
        <script
          src="https://s.pageclip.co/v1/pageclip.js"
          charset="utf-8"
        ></script>
        <style jsx>{`
          .children {
            font-family: Courier New;
            height: 100vh;
            width: 105vw;
            margin-left: -2%;
            padding-right: 10%;
          }
        `}</style>
      </body>
    </div>
  );
};

export default Layout;
