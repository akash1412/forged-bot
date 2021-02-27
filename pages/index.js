import Head from "next/head";
import { useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import { GlobalContext } from "./../context/globalContext";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width:100%;
`;
const SecOne = styled.div`
	background-color: #02244a;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const SecOneMain = styled.div`
	margin: 100px 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) {
		flex-direction: row;
	}
`;
const SecOnLeft = styled.div`
	display: flex;
	padding: 10px 0rem;
	width: 100%;
	flex-direction: column;
	@media (min-width: 768px) {
		width: 60%;
	}
`;
const SecOneRight = styled.div`
	padding: 0 0.5rem;
	display: flex;
	width: 100%;
	flex-direction: column;
	@media (min-width: 768px) {
		width: 40%;
	}
`;
const SecOneHead = styled.div`
	padding: 0 0.5rem;
	color: #fff;
	font-size: 34px;
	font-weigth: 600;
	text-align: ḷeft;
	@media (min-width: 768px) {
		font-size: 72px;
	}
`;
const SecOnePara = styled.div`
	padding: 0 0.5rem;
	margin: 30px 0;
	width: 500px;
	font-weigth: 400;
	color: #fff;
	font-size: 12px;
	text-align: left;
	@media (min-width: 768px) {
		font-size: 27px;
	}
`;
const SecOneImg = styled.div`
	width: 474px;
	height: 400px;
	margin: 27px 0 0 -83px;
	background-image: url("/homeImg.png");
	background-size: contain;
	background-repeat: no-repeat;
`;

const SecOneUploadButton = styled.button`
	padding: 17px;
	border-radius: 10px;
	background-color: #6ed0dd;
	display: flex;
	font-size: 21px;
	color: #02244a;
	margin: 55px 0 10px 0;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 275px;
	outline: 0;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		transform: scale(1.1);
	}
`;
const SaveIcon = styled.div`
	width: 28px;
    height: 28px;
	background-image: url(/saveIcon.png);
	background-size: contain;
	background-repeat: no-repeat;
`;
const SecOneNote = styled.div`
	padding: 0.2rem 0rem;
	color: #fff;
	font-size: 15px;
	margin: 15px 0;
	text-align: left;
`;
const SecTwo = styled.div`
	background-image: url(/bgSec2.png);
	background-size: 100% 100%;
	padding: 100px 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const SecTwoHead = styled.div`
	text-align: center;
	color: #02244a;
	font-size: 36px;
	font-weight: 600;
	margin: 50px 30px;
`;
const SecTwoStepsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 50px;
	width: 100%;
	-webkit-align-items: start;
`;
const SecTwoStepsNumber = styled.div`
	height: 40px;
	width: 40px;
	font-size: 19px;
	border-radius: 50%;
	display: flex;
	background-color: #df622c;
	justify-content: center;
	align-items: center;
`;
const SecTwoStepsTitle = styled.div`
	font-size: 30px;
	text-align: left;
	padding: 0px 50px;
	width: 420px;
	margin: 0 100px 0 0;
`;
const SecTwoStepsImg = styled.div`
	height: 114px;
	width: 122px;
	padding: 1rem;
	margin: 10px 50px;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: ${props =>
		props.step1
			? 'url("/workStep1.png")'
			: props.step2
			? 'url("/workStep2.png")'
			: 'url("/workStep3.png")'};
`;
const SecTwoNote = styled.p`
	display: flex;
	margin: 0 100px;
	font-size: 18px;
	align-self: center;
`;
const SecTwoImg = styled.div`
	display: flex;
	margin: 60px 100px 0 0;
	align-self: flex-end;
	background-color: white;
    height: 210px;
    width: 390px;
`;
const SecThree = styled.div`
	background-image: url(/bgSec3.png);
	background-size: 100% 100%;
	padding: 50px 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const SecThreeImgLeft = styled.div`
	display: flex;
	margin: 60px 0 0 115px;
	align-self: flex-start;
	background-color: white;
    height: 195px;
    width: 400px;
`;
const SecThreeImgRight = styled.div`
	display: flex;
	align-self: flex-end;
    margin: 60px 115px 0 0;
    background-color: white;
    height: 195px;
    width: 400px;
`;
const SecFour = styled.div`
	background-image: url(/bgSec4.png);
	background-size: 100% 100%;
	padding: 0px 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const SecFourTeamTop = styled.div`
	display: flex;
	margin: 60px 0px;
	flex-direction: row;
	justify-content: space-between;
`;
const SecFourTeamMiddle = styled.div`
	display: flex;
	margin: 30px 0;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const TeamBox = styled.div`
	display: flex;
    height: 100px;
    width: 350px;
	flex-direction: row;
	background-color: #02244a;
	border-radius: 65px;
	justify-content: center;
`;
const TeamBoxLeft = styled.div`
	width: 35%;
	height: 100%;
	border-radius: 50%;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url("/Abhinav.png");
`;

const TeamBoxRight = styled.div`
	width: 65%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;
const TeamBoxRightName = styled.div`
	font-size: 22px;
	width: 100%;
	text-align: left;
	color: #6ed0dd;
`;
const TeamBoxRightContent = styled.div`
	font-size: 13px;
	margin: 0 0 0 40px;
	text-align: left;
	width: 100%;
	color: #d7e4f2;
`;
 
const FileLabel = styled.label`
	padding: 17px;
	border-radius: 10px;
	background-color: #6ed0dd;
	display: flex;
	font-size: 21px;
	color: #02244a;
	margin: 55px 0 10px 0;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 275px;
	outline: 0;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		transform: scale(1.1);
	}
`;

const FileInput = styled.input`
	display: none;
`;

export default function Home() {
	const { handleInputChange } = useContext(GlobalContext);

	return (
		<Container>
			<Head>
				<title>Forged Bot</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SecOne>
				<SecOneMain>
					<SecOnLeft>
						<SecOneHead>Forged Bot</SecOneHead>
						<SecOnePara>
							The first online tool to detect manipulated images using AI.
						</SecOnePara>
						<FileLabel htmlFor='upload-img'><SaveIcon></SaveIcon>upload image</FileLabel>
						<FileInput
							type='file'
							id='upload-img'
							onChange={handleInputChange}
							required
						/>
						<SecOneNote>
							Your files will be discarded after analysing. jpg, .jpeg, .png
							formats are supported.
						</SecOneNote>
					</SecOnLeft>
					<SecOneRight>
						<SecOneImg></SecOneImg>
					</SecOneRight>
				</SecOneMain>
			</SecOne>
			<SecTwo>
				<SecTwoHead>How it works?</SecTwoHead>
				<WorkStep num='1' title='Upload your document' />
				<WorkStep num='2' title='Our bots scan your document.' />
				<WorkStep num='3' title='Check the results.' />
				<SecTwoNote>
					or you can alos tag our twitter bot @forged_bot to any tweeted photo
					to check it.
				</SecTwoNote>
				<SecTwoImg></SecTwoImg>
			</SecTwo>
			<SecThree>
				<SecTwoHead>Results</SecTwoHead>
				<SecThreeImgLeft></SecThreeImgLeft>
				<SecThreeImgRight></SecThreeImgRight>
				<SecThreeImgLeft></SecThreeImgLeft>
				<SecThreeImgRight></SecThreeImgRight>
			</SecThree>
			<SecFour>
				<SecTwoHead>Our Team</SecTwoHead>
				<SecFourTeamTop>
					<TeamMemberBox
						memberName='Abhinav Prakash'
						work='Machine Learning'
						college='Gita Bhubaneswar'
						twitter='twitter.com/abcxyz'
					/>
					<TeamMemberBox
						memberName='Ankit Jaiswal'
						work='Web Developer'
						college='Gita Bhubaneswar'
						twitter='twitter.com/abcxyz'
					/>
				</SecFourTeamTop>
				<SecFourTeamMiddle>
					<TeamMemberBox
						memberName='Adrisha Mohapatra'
						work='Web Developer'
						college='Gita Bhubaneswar'
						twitter='twitter.com/abcxyz'
					/>
				</SecFourTeamMiddle>
				<SecFourTeamTop>
					<TeamMemberBox
						memberName='Akash Prasad'
						work='Web Developer'
						college='Gita Bhubaneswar'
						twitter='twitter.com/abcxyz'
					/>
					<TeamMemberBox
						memberName='Som ...'
						work='Graphic Designer'
						college='Gita Bhubaneswar'
						twitter='twitter.com/abcxyz'
					/>
				</SecFourTeamTop>
			</SecFour>
		</Container>
	);
}

const WorkStep = props => {
	const { num, title } = props;
	return (
		<SecTwoStepsContainer>
			<SecTwoStepsNumber>{num}</SecTwoStepsNumber>
			<SecTwoStepsTitle>{title}</SecTwoStepsTitle>
			{num === "1" ? (
				<SecTwoStepsImg step1 />
			) : num === "2" ? (
				<SecTwoStepsImg step2 />
			) : (
				<SecTwoStepsImg step3 />
			)}
		</SecTwoStepsContainer>
	);
};
const TeamMemberBox = props => {
	const { memberName, work, college, twitter } = props;
	return (
		<TeamBox>
			<TeamBoxLeft></TeamBoxLeft>
			<TeamBoxRight>
				<TeamBoxRightName>{memberName}</TeamBoxRightName>
				<TeamBoxRightContent>{work}</TeamBoxRightContent>
				<TeamBoxRightContent>{college}</TeamBoxRightContent>
				<TeamBoxRightContent>{twitter}</TeamBoxRightContent>
			</TeamBoxRight>
		</TeamBox>
	);
};

{
	/* <Main>
				<Title>Forged Bot !!!!</Title>

				<img src={imagePreview} />

				<fieldset disabled={freezeForm}>
					<Form onSubmit={uploadImage} target='/search'>
						<Label htmlFor='upload-img'>uploadd image</Label>
						<FileInput
							required
							type='file'
							id='upload-img'
							onChange={handleInputChange}
						/>
						<Button type='submit'>verify</Button>
					</Form>
				</fieldset>
				<img src={predictedImage} />
			</Main> */
}
