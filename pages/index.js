import Layout from "../components/Layout";
import Link from "next/link";

const BlogLink = props => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
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
        <BlogLink title="Saurav stinks" />
        <BlogLink title="My Boobs" />
        <BlogLink title="Duck feet" />
      </ul>
    </Layout>
  );
};
