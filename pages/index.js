import Head from "next/head";
import { useState } from "react";

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
	justify-content: center;
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

export default function Home() {
	const [imagePreview, setImagePreview] = useState("");
	const [imageToUpload, setImageToUpload] = useState(null);

	const handleInputChange = async e => {
		const file = e.target.files[0];
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

	const uploadImage = () => {
		const formData = new FormData();
		formData.append("file", imageToUpload);
		formData.append("upload_preset", "dlyu4xhy");

		fetch("https://api.cloudinary.com/v1_1/dhqp2dd6b/image/upload", {
			method: "POST",
			body: formData,
		})
			.then(res => res.json())
			.then(result => console.log(result));
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
				<button onClick={uploadImage}>upload Image</button>
				<form>
					<input type='file' onChange={handleInputChange} />
				</form>
			</Main>

			<Footer>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by <img src='/vercel.svg' alt='Vercel Logo' />
				</a>
			</Footer>
		</Container>
	);
}
