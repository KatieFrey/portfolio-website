const Footer = () => (
  <footer className="footer mt-auto py-3 bg-dark text-white">
    <div className="container center-text">
      &copy; {new Date().getFullYear()} -
      <a href="https://my-website.katiefrey.now.sh/"> Katharine Francis </a>
    </div>
    <style jsx>
      {`
        a {
          color: white;
          cursor: pointer;
        }
        .center-text {
          text-align: center;
        }
        .fix_to_bottom {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100vw;
        }
      `}
    </style>
  </footer>
);

export default Footer;
