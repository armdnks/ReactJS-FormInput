import usePostContext from "../../use-context/post-context";

const PostItem = ({ post }) => {
  const { deletePost, setEditPost } = usePostContext();
  const { name, id, gender, company, isCompleted } = post;

  return (
    <div>
      <h3>Post Item | ID: {id}</h3>
      <div>
        <strong>name : </strong> {name}
      </div>
      <div>
        <strong>gender : </strong>
        {gender}
      </div>
      <div>
        <strong>company : </strong>
        {company}
      </div>
      <div>
        <strong>is completed : </strong> {isCompleted.toString()}
      </div>

      <div>
        <button onClick={() => setEditPost(post)}>edit</button>

        <button onClick={() => deletePost(id)}>delete</button>
      </div>
    </div>
  );
};
export default PostItem;
