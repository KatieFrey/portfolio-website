import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div>
        <p>Yellow!</p>
      </div>
      <style jsx>{`
        p {
          color: white;
        }
      `}</style>
    </Layout>
  );
};
