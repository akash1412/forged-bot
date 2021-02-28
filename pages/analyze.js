import { useContext, useEffect } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import { GlobalContext } from "./../context/globalContext";
import ImageOverview from "../components/ImageOverview";

import * as animationData from "../public/lf30_0pkhkmwj.json";
const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.color.deepBlue};
	color: #fff;
	min-height: 100vh;
`;

const Main = styled.div`
	padding: 2rem 0;
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
	/* margin-top: 2rem; */
	display: flex;
	flex-direction: column;
`;

const PreviewImageContainer = styled.div`
	margin-bottom: 2rem;
`;

const ImagePlaceholder = styled.img`
	width: 100%;

	height: 25rem;
`;

const Button = styled.button`
	cursor: pointer;
	opacity: ${({ isLoading }) => (isLoading ? ".8" : "1")};
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
	const {
		imagePreview,
		isImageUploading,
		predictedImage,
		Analyze,
		resetHandler,
	} = useContext(GlobalContext);

	useEffect(() => {
		return () => {
			resetHandler();
		};
	}, []);

	return (
		<Wrapper>
			<Main>
				<Title>Check Results</Title>
				<ContentWrapper>
					{imagePreview && (
						<PreviewImageContainer>
							<SubTitle>Morphed Image</SubTitle>
							<ImagePlaceholder src={imagePreview} />
						</PreviewImageContainer>
					)}

					{predictedImage && (
						<PreviewImageContainer>
							<SubTitle>Result</SubTitle>
							<ImagePlaceholder src={predictedImage} />
						</PreviewImageContainer>
					)}

					<Button
						isLoading={isImageUploading}
						disabled={isImageUploading}
						onClick={Analyze}>
						Analyze
					</Button>
				</ContentWrapper>
			</Main>
			{/* <Lottie
				options={defaultOptions}
				width={400}
				height={400}
				isStopped={false}
			/> */}
		</Wrapper>
	);
};

export default ProductPage;
