import styled from "styled-components";

const InputRadio = ({ name, options, checked, onChange }) => {
  return (
    <Wrapper>
      {options.map((title, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              id={`input-radio-${title}`}
              name={name}
              value={title}
              checked={checked === title}
              onChange={onChange}
            />
            <label htmlFor={`input-radio-${title}`}>{title}</label>
          </div>
        );
      })}
    </Wrapper>
  );
};

InputRadio.defaultProps = {
  name: "radio",
  options: ["radio"],
  checked: "radio",
  onChange: () => {},
};

const Wrapper = styled.div``;

export default InputRadio;
