import { useRouter } from "next/router";
import Layout from "../../components/AllPages/Layout";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout textColor="white" backgroundColor="#13adf7">
      <p>Post: {id}</p>
      <p>Post: {id}</p>
      <p>Post: {id}</p>
      <p>Post: {id}</p>
      <p>Post: {id}</p>
    </Layout>
  );
};

export default Project;
