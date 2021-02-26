import styled from "styled-components";

const ButtonStyle = styled.button`
	outline: none;
	border: none;
	background-color: ${props => props.color};
`;

const Button = ({ children }) => {
	return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
