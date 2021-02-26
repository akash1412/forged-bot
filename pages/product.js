import styled from "styled-components";

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.color.deepBlue};
	color: #fff;
	min-height: 100vh;
`;

const Main = styled.div`
	padding: 3rem 0;
	width: 50%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h1`
	font-size: 3rem;
`;

const SubTitle = styled.h2`
	font-size: 1.5rem;
`;

const ContentWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
`;

const PreviewImageContainer = styled.div`
	margin-bottom: 2rem;
`;

const ImagePlaceholder = styled.img`
	width: 100%;
	object-fit: cover;
	height: 25rem;
`;

const Button = styled.button`
	align-self: center;
	padding: 1rem 3rem;
	outline: none;
	border: none;
	color: #fff;
	font-size: 1.2rem;
	font-weight: 600;
	border-radius: 0.4rem;
	background-color: ${({ theme }) => theme.color.orange};
`;

const ProductPage = () => {
	return (
		<Wrapper>
			<Main>
				<Title>Check Results</Title>
				<ContentWrapper>
					<PreviewImageContainer>
						<SubTitle>Origin Document</SubTitle>
						<ImagePlaceholder src='/homeImg.png' />
					</PreviewImageContainer>
					<PreviewImageContainer>
						<SubTitle>Result</SubTitle>
						<ImagePlaceholder src='/homeImg.png' />
					</PreviewImageContainer>
					<Button>check another document</Button>
				</ContentWrapper>
			</Main>
		</Wrapper>
	);
};

export default ProductPage;
