import styled from "styled-components";

const Button = ({ type, title }) => {
  return <Wrapper type={type}>{title}</Wrapper>;
};

Button.defaultProps = {
  type: "button",
  title: "button",
};

const Wrapper = styled.button`
  text-transform: capitalize;
`;

export default Button;
