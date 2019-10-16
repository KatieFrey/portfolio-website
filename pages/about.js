import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div className="about">
        <p>This is the About page</p>
      </div>
      <style jsx>{`
        .about {
          height: 100vh;
        }
        p {
          color: white;
        }
      `}</style>
    </Layout>
  );
};
