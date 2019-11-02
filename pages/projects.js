import Layout from "../components/Layout";

export default () => {
  return (
    <Layout textColor="white" backgroundColor="#0f9ca6">
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
