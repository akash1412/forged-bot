import styled from "styled-components";

const HeaderContainer = styled.div`
	/* background-color: ${({ theme }) => theme.color.deepBlue}; */
	background-color: #000;
	color: #fff;
	/* height: 4rem; */
	padding: 0.8rem 0;
	text-align: center;
	font-size: 1.5rem;
`;

const Header = () => <HeaderContainer>Header</HeaderContainer>;

export default Header;
