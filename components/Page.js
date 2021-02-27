import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const GlobalWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainChildWrapper = styled.div`
	flex-grow: 1;
`;

const Page = ({ children }) => {
	return (
		<GlobalWrapper>
			<Header />
			<MainChildWrapper>{children}</MainChildWrapper>
			<Footer />
		</GlobalWrapper>
	);
};

export default Page;
