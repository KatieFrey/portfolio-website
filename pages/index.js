import Link from "next/link";
import Header from "../components/Header";

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
        margin: 13% auto;
        width: 700px;
        border-radius: 90%;
        text-align: center;
        padding-top: 80px;
      }
      .card:hover {
      }
      p {
        font-size: 25px;
        color: white;
      }
      p span {
        font-size: 40px;
      }
      a {
        font-size: 40px;
        color: white;
        display: block;
        text-decoration: none;
        transition: font-size 1s;
      }
      a:hover {
        text-shadow: 10px 5px 30px #3a0a63;
        font-size: 400%;
      }
    `}</style>
  </div>
);
export default () => {
  return (
    <div className="opening">
      <Header />
      <Intro />
      <style jsx global>{`
        body {
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.9)
            ),
            url("../static/art-artistic-bright-2040273.jpg");
          height: 100vh;
          font-family: Courier New;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};
