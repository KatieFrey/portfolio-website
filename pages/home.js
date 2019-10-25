import Layout from "../components/Layout";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Katharine Francis</h1>
      <section>
        <Intro />
      </section>
      <section>
        <Cards about="about" text="My about section" />
        <Cards projects="projects" text="My projects section" />
      </section>
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          height: 250px;
          background: linear-gradient(#0f0f0f, transparent);
          margin-top: 9%;
        }
        h1 {
          color: white;
          font-family: Courier New;
          margin: 5% auto;
          letter-spacing: 5px;
        }
      `}</style>
    </div>
  );
};

const Intro = () => {
  return (
    <div className="intro">
      <p>
        What's up! Thanks for visiting my site. Like everything I do, we're
        always under construction here, making things better and{" "}
        <em>sweeeet</em>. As I said, before you so kindly clicked on this link,
        I'm a software developer and my favorite thing to do is to make a
        website more visually pleasing to the user and create an all around
        optimal user experience.
      </p>
      <style jsx>{`
        .intro {
          margin: 0 auto;
          width: 85%;
          padding: 2%;
        }
        p {
          color: white;
          text-shadow: 3px 3px 3px black;
          font-family: Courier New;
          line-height: 175%;
          font-size: 120%;
        }
      `}</style>
    </div>
  );
};

const Cards = ({ about, text }) => {
  return (
    <div>
      {about ? (
        <div>
          <section className="cards">
            <h1>{text}</h1>
          </section>
          <style jsx>{`
            .cards {
              background: rgba(255, 255, 255, 0.8);
              height: 70vh;
              clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
            }
            h1 {
              text-align: center;
              padding-top: 5%;
            }
          `}</style>
        </div>
      ) : (
        <div>
          <section className="cards">
            <h1>{text}</h1>
          </section>
          <style jsx>{`
            .cards {
              background: rgba(255, 255, 255, 0.8);
              height: 70vh;
              clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);
              margin: 10% auto;
            }
            h1 {
              text-align: center;
              padding-top: 5%;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default () => {
  return (
    <Layout>
      <div className="homeBackground">
        <Hero />
      </div>
      <style jsx>{`
        .homeBackground {
          height: 300vh;
          background-image: url("../static/art-close-up-computer-keyboard-3029916.jpg");
          background-size: cover;
        }
      `}</style>
    </Layout>
  );
};
// function getPosts() {
//   return [
//     { id: "hello-nextjs", title: "Hello Next.js" },
//     { id: "learn-nextjs", title: "Learn Next.js is awesome" },
//     { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
//   ];
// }

// const PostLink = ({ post }) => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${post.id}`}>
//       <a>{post.title}</a>
//     </Link>
//     <style jsx>{`
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }

//       a {
//         text-decoration: none;
//         color: blue;
//         font-family: "Arial";
//       }

//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         {getPosts().map(post => (
//           <PostLink key={post.id} post={post} />
//         ))}
//       </ul>
//       <style jsx>{`
//         h1,
//         a {
//           font-family: "Arial";
//         }

//         ul {
//           padding: 0;
//         }

//         li {
//           list-style: none;
//           margin: 5px 0;
//         }

//         a {
//           text-decoration: none;
//           color: blue;
//         }

//         a:hover {
//           opacity: 0.6;
//         }
//       `}</style>
//     </Layout>
//   );
// }

// import Layout from "../components/Layout";
// import Link from "next/link";
// import fetch from "isomorphic-unfetch";

// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;
