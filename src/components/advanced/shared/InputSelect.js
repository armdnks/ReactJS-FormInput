import styled from "styled-components";

const InputSelect = ({ label, name, value, options, onChange }) => {
  return (
    <Wrapper>
      <label htmlFor={`select-${name}`}>{label || name}</label>
      <select
        id={`select-${name}`}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          choose one
        </option>
        {options.map((title, index) => {
          return (
            <option key={index} value={title}>
              {title}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

InputSelect.defaultProps = {
  name: "select-option",
  options: [],
  value: "",
  onChange: () => {},
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export default InputSelect;
