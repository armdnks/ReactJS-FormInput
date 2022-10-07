import styled from "styled-components";

const InputText = ({ label, name, type, value, onChange }) => {
  return (
    <Wrapper>
      <label htmlFor={`input-${type}-${name}`} className="input-text-label">
        {label || name}
      </label>
      <input
        type={type}
        id={`input-${type}-${name}`}
        name={name}
        value={value}
        onChange={onChange}
        className="input-text-field"
      />
    </Wrapper>
  );
};

InputText.defaultProps = {
  name: "input-name",
  type: "text",
  value: "",
  onChange: () => {},
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .input-text-label {
    font-size: 1rem;
    text-transform: capitalize;
  }

  .input-text-field {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

export default InputText;
