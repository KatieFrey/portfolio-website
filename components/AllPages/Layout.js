import NavBarHeader from "./NavBarHeader";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

// const layoutStyle = {
//   fontFamily: "Courier New",
// };

const Layout = ({ children, textColor, backgroundColor }) => {
  return (
    <div>
      <Head>
        <title>Katharine Francis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          href="../../public/favicon.ico"
          type="image/x-icon"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
        ></link>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <NavBarHeader textColor={textColor} backgroundColor={backgroundColor} />

        <div className="children">{children}</div>
        <Footer />
      </div>

      <script
        src="https://s.pageclip.co/v1/pageclip.js"
        charSet="utf-8"
      ></script>
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
        integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      />

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      />
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      />
    </div>
  );
};

export default Layout;

{
  /* <style jsx>{`
        .children {
          font-family: Courier New;
          height: 100vh;
          width: 105vw;
          margin-left: -5%;
          padding-right: 10%;
        }
      `}</style> */
}
