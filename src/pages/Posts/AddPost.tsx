import usePosts from "../../hooks/usePosts";
import FormPost from "./components/Form";
import Heading from "./components/Heading";
import Loading from "./components/Loading";

const AddPost = () => {
  const { loading, error, fetchPosts } = usePosts();
    console.log(error);
  const onFinish = (value: any) => {
    fetchPosts("posts", "POST", value);
  };

  return (
    <>
      <Loading loading={loading} />
      <section>
        <Heading title="Add Post" />
        <div>
          <FormPost onFinish={onFinish} />
        </div>
      </section>
    </>
  );
};

export default AddPost;
