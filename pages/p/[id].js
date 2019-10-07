import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default () => {
  let router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>Blog post content</p>
    </Layout>
  );
};
