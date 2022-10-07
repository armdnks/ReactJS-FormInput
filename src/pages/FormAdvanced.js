import { useEffect } from "react";
import Form from "../components/advanced/Form";
import PostItem from "../components/advanced/PostItem";
import usePostContext from "../use-context/post-context";

const FormAdvanced = () => {
  const { posts, getPosts } = usePostContext();

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Form />
      {posts.length === 0 && <h1>no post to show</h1>}
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FormAdvanced;
