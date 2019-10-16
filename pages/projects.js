import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div className="projects">
        <p>Yellow!</p>
      </div>
      <style jsx>{`
        .projects {
          height: 100vh;
        }
        p {
          color: white;
        }
      `}</style>
    </Layout>
  );
};
