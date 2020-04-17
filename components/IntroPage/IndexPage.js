import Introduction from "./Introduction";

export default () => (
  <div className="index-div index-background">
    <Introduction />
    <style jsx>{`
      .index-div {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }
      .index-background {
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.9)
          ),
          url("/art-artistic-bright-2040273.jpg");
        font-family: Courier New;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
      }
    `}</style>
  </div>
);
