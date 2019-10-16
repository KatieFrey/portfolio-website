import Link from "next/link";

const Intro = () => (
  <div className="card">
    <p>
      Hello, I'm <span>Katharine Francis</span>.
    </p>
    <p> I'm a Software Developer.</p>
    <Link href="/home">
      <a>Learn more</a>
    </Link>
    <style jsx>{`
      .card {
        height: 350px;
        border: 5px solid white;
        background-color: rgb(255, 204, 255, 0.6);
        margin: 10% auto;
        width: 450px;
        border-radius: 90%;
        text-align: center;
        padding-top: 80px;
      }
      .card:hover {
      }
      p {
        font-size: 30px;
        color: white;
      }
      a {
        font-size: 55px;
        color: white;
        display: block;
        margin-top: 40px;
        text-decoration: none;
      }
      a:hover {
        text-shadow: 10px 5px 30px #3a0a63;
      }
    `}</style>
  </div>
);
export default () => {
  return (
    <div className="opening">
      <Intro />
      <style jsx global>{`
        body {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.9)
            ),
            url("../static/art-artistic-bright-2040273.jpg");
          background-size: cover;
        }
      `}</style>
    </div>
  );
};
