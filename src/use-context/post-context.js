import { createContext, useContext, useState } from "react";
import axios from "axios";

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  const [isEditMode, setIsEditMode] = useState(false);

  async function getPosts() {
    const { data } = await axios.get(`http://localhost:5000/posts/`);
    setPosts(data);
  }

  async function createPost(data) {
    await axios.post(`http://localhost:5000/posts`, data);

    getPosts();
  }

  function setEditPost(existingPost) {
    setPost(existingPost);
    setIsEditMode(true);
  }

  async function updatePost(id, data) {
    await axios.put(`http://localhost:5000/posts/${id}`, data);

    setPost({});
    setIsEditMode(false);

    getPosts();
  }

  async function deletePost(id) {
    await axios.delete(`http://localhost:5000/posts/${id}`);

    getPosts();
  }

  const value = {
    posts,
    post,
    isEditMode,
    getPosts,
    createPost,
    setEditPost,
    updatePost,
    deletePost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default function usePostContext() {
  return useContext(PostContext);
}
