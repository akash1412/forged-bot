import styled from "styled-components";

const FooterStyle = styled.footer`
	height: 1.4rem;
	width: 100%;
	background-color: ${({ theme }) => theme.color.deepBlue};
	text-align: center;

	& > h3 {
		font-weight: 400;
		color: #fff;
	}
`;

const Footer = () => (
	<FooterStyle>
		<h2>
			Made with ❤ by Team{" "}
			<a href='https://xiken.tech' target='_blank'>
				Xiken.tech
			</a>
		</h2>
	</FooterStyle>
);

export default Footer;
