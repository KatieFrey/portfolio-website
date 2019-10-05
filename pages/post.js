import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Content = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is my post.</p>
    </div>
  );
};
const Post = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Post;
