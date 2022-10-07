import { useState, useEffect } from "react";
import styled from "styled-components";

import usePostContext from "../../use-context/post-context";

const Form = () => {
  const [textInput, setTextInput] = useState("");
  const [radioInput, setRadioInput] = useState("radio-input-one");
  const [selectOption, setSelectOption] = useState("option-1");
  const [checkboxInput, setCheckboxInput] = useState(false);

  const { post, isEditMode, createPost, updatePost } = usePostContext();

  function onSubmitHandler(e) {
    e.preventDefault();
    const data = { textInput, radioInput, selectOption, checkboxInput };

    if (isEditMode) {
      updatePost(post.id, data);
      setToDefault();
      return;
    }

    createPost(data);
    setToDefault();
  }

  function setToDefault() {
    setTextInput("");
    setRadioInput("radio-input-one");
    setSelectOption("option-1");
    setCheckboxInput(false);
  }

  useEffect(() => {
    if (isEditMode) {
      setTextInput(post.textInput);
      setRadioInput(post.radioInput);
      setSelectOption(post.selectOption);
      setCheckboxInput(post.checkboxInput);
    }
    // eslint-disable-next-line
  }, [post]);

  return (
    <Wrapper onSubmit={onSubmitHandler}>
      <div className="form-col">
        <label htmlFor="text-input">text input</label>
        <input
          type="text"
          id="text-input"
          name="text-input"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>

      <div className="form-row">
        <input
          type="radio"
          id="radio-input-one"
          name="radio-input"
          value="radio-input-one"
          checked={radioInput === "radio-input-one"}
          onChange={() => setRadioInput("radio-input-one")}
        />
        <label htmlFor="radio-input-one">radio input one</label>

        <input
          type="radio"
          id="radio-input-two"
          name="radio-input"
          value="radio-input-two"
          checked={radioInput === "radio-input-two"}
          onChange={() => setRadioInput("radio-input-two")}
        />
        <label htmlFor="radio-input-two">radio input two</label>

        <input
          type="radio"
          id="radio-input-three"
          name="radio-input"
          value="radio-input-three"
          checked={radioInput === "radio-input-three"}
          onChange={() => setRadioInput("radio-input-three")}
        />
        <label htmlFor="radio-input-three">radio input three</label>
      </div>

      <div className="form-col">
        <label htmlFor="select-option">select option</label>
        <select
          name="select-option"
          id="select-option"
          value={selectOption}
          onChange={(e) => setSelectOption(e.target.value)}
        >
          <option value="option-1">option-1</option>
          <option value="option-2">option-2</option>
          <option value="option-3">option-3</option>
        </select>
      </div>

      <div className="form-row">
        <input
          type="checkbox"
          id="checkbox-input"
          name="checkbox-input"
          value="checkbox-input"
          checked={checkboxInput}
          onChange={() => setCheckboxInput(!checkboxInput)}
        />
        <label htmlFor="checkbox-input">checkbox input</label>
      </div>

      <button type="submit">submit</button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  .form-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-row {
    width: 100%;
    display: flex;
    gap: 0.5rem;
  }
`;

export default Form;
