import styled from "styled-components";

const FooterStyle = styled.footer`
	width: 100%;
	padding: 20px;
	background-color: ${({ theme }) => theme.color.deepBlue};
	text-align: center;
	font-size: 12px;
	& > h3 {
		font-size: 12px;
		font-weight: 400;
		color: #fff;
	}
`;

const Footer = () => (
	<FooterStyle>
		<h2>
			Made with ❤️ by Team{" "}
			<a href='https://xiken.tech' target='_blank'>
				Xiken.tech
			</a>
		</h2>
	</FooterStyle>
);

export default Footer;
