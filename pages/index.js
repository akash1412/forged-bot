import Head from "next/head";
import { useState } from "react";

import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
	min-height: 100vh;
	padding: 0 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Main = styled.main`
	padding: 3rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
`;

const Title = styled.h1`
	color: #0070f3;
	font-size: 5rem;
	padding: 0.3rem;
`;
const Footer = styled.footer`
	width: 100%;
	height: 100px;
	border-top: 1px solid #eaeaea;
	display: flex;
	justify-content: center;
	align-items: center;

	& > a {
		display: flex;
		justify-content: center;
		align-items: center;

		& > img {
			margin-left: 0.5rem;
		}
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const FileInput = styled.input`
	display: none;
`;

const Button = styled.button`
	background-color: #ccc;
	margin-top: 2rem;
`;

const Label = styled.label`
	background-color: #000;
	color: #fff;
	padding: 0.5rem 1rem;
`;

export default function Home() {
	const [imagePreview, setImagePreview] = useState("");
	const [imageToUpload, setImageToUpload] = useState(null);
	const [freezeForm, setFreezeForm] = useState(false);
	const [predictedImage, setPredictedImage] = useState("");

	const handleInputChange = async e => {
		const file = e.target.files[0];
		if (!file) return;
		setImageToUpload(file);
		previewImageFile(file);
	};

	function previewImageFile(file) {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImagePreview(reader.result);
		};
	}

	const predictHandler = async () => {
		try {
			const res = await axios({
				url: "http://008133b7ff53.ngrok.io/predict",
				headers: {
					"Context-Type": "application/json",
				},
				method: "POST",
				data: {
					url:
						"https://res.cloudinary.com/dhqp2dd6b/image/upload/v1614309837/image-processing/mtvjctglxenopdprugyj.png",
				},
			});

			console.log(res);
			setPredictedImage(res.data.url);
		} catch (error) {
			console.log(error);
		}
		setFreezeForm(false);
	};

	const uploadImage = e => {
		e.preventDefault();
		setFreezeForm(true);
		const formData = new FormData();
		formData.append("file", imageToUpload);
		formData.append("upload_preset", "dlyu4xhy");

		axios("https://api.cloudinary.com/v1_1/dhqp2dd6b/image/upload", {
			method: "POST",
			data: formData,
		}).then(result => predictHandler(result.data.secure_url));
	};

	return (
		<Container>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Main>
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
				<button></button>
			</Main>
		</Container>
	);
}

{
	/* <Footer>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by <img src='/vercel.svg' alt='Vercel Logo' />
				</a>
			</Footer> */
}
