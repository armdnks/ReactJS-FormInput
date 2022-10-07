import { useState, useEffect } from "react";
import {
  Button,
  InputText,
  InputRadio,
  InputSelect,
  InputCheckBox,
} from "./shared";

import usePostContext from "../../use-context/post-context";

const initialState = {
  name: "",
  gender: "male",
  company: "",
  isCompleted: false,
};

const Form = () => {
  const { post, isEditMode, createPost, updatePost } = usePostContext();

  const [values, setValues] = useState(initialState);

  function onChangeTextInput(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function onChangeCheckBox(e) {
    const { checked } = e.target;
    setValues({ ...values, isCompleted: checked });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    // console.log(values);

    if (isEditMode) {
      updatePost(post.id, values);
      setValues(initialState); // set back to default
      return;
    }

    createPost(values);
    setValues(initialState); // set back to default
  }

  useEffect(() => {
    if (isEditMode) {
      setValues({
        name: post.name,
        gender: post.gender,
        company: post.company,
        isCompleted: post.isCompleted,
      });
    }
    // eslint-disable-next-line
  }, [post]);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <InputText
          name="name"
          value={values.name}
          onChange={onChangeTextInput}
        />

        <InputRadio
          name="gender"
          options={["male", "female"]}
          checked={values.gender}
          onChange={onChangeTextInput}
        />

        <InputSelect
          name="company"
          options={["apple", "facebook", "google"]}
          value={values.company}
          onChange={onChangeTextInput}
        />

        <InputCheckBox
          name="isCompleted"
          checked={values.isCompleted}
          onChange={onChangeCheckBox}
        />

        <Button type="submit" title="submit" />
      </form>
    </div>
  );
};
export default Form;
