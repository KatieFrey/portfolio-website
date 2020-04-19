import App from "next/app";
//import "bootstrap/dist/css/bootstrap.min.css";

import "./stylesheet.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
