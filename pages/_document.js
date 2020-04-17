import Document, { Html, Main, NextScript } from "next/document";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Header />
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: Courier New;
            min-height: 100%;
            min-width: 100%;
            overflow-x: hidden;
            overflow-y: hidden;
            font-size: 1rem;
            line-height: 1.5;
          }
        `}</style>
      </Html>
    );
  }
}

export default MyDocument;
