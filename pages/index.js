import Layout from "../components/Layout";
import Link from "next/link";

const BlogLink = props => {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

export default () => {
  return (
    <Layout>
      <p>Hey guys!</p>
      <h1>New Blogs</h1>
      <ul>
        <BlogLink id="necklaces-earrings" />
        <BlogLink id="notebooks-pens" />
        <BlogLink id="gym-shoes" />
      </ul>
    </Layout>
  );
};
