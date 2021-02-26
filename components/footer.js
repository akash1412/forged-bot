import styled from "styled-components";

const FooterStyle = styled.footer`
	background-color: ${({ theme }) => theme.color.deepBlue};
	text-align: center;

	& > h2 {
		font-size: 1.5rem;
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
