import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div className="contact">
        <p>Contact ya'll!</p>
      </div>
      <style jsx>{`
        .contact {
          height: 100vh;
        }
        p {
          color: white;
        }
      `}</style>
    </Layout>
  );
};
