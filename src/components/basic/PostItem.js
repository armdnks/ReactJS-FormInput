import usePostContext from "../../use-context/post-context";

const PostItem = ({ post }) => {
  const { deletePost, setEditPost } = usePostContext();
  const { checkboxInput, id, radioInput, selectOption, textInput } = post;
  return (
    <div>
      <h3>Post Item | ID: {id}</h3>
      <div>
        <strong>Text Input : </strong> {textInput}
      </div>
      <div>
        <strong>Radio Input : </strong>
        {radioInput}
      </div>
      <div>
        <strong>Select Option : </strong>
        {selectOption}
      </div>
      <div>
        <strong>Checkbox Input : </strong> {checkboxInput}
      </div>

      <div>
        <button onClick={() => setEditPost(post)}>edit</button>

        <button onClick={() => deletePost(id)}>delete</button>
      </div>
    </div>
  );
};
export default PostItem;
