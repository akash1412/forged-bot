import { useState, createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const GlobalContext = createContext({
	imagePreview: null,
	predictedImage: null,
	handleInputChange: () => {},
	resetHandler: () => {},
});

const GlobalContextProvider = ({ children }) => {
	const router = useRouter();

	const [imagePreview, setImagePreview] = useState(null);
	const [isImageUploading, setIsImageUploading] = useState(false);

	const [cloudImage, setCloudImage] = useState(null);

	const [predictedImage, setPredictedImage] = useState(null);

	function previewImageFile(file) {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImagePreview(reader.result);
		};
	}

	const handleInputChange = e => {
		const file = e.target.files[0];
		if (!file) return;

		previewImageFile(file);
		uploadImage(file);
		router.push("/analyze");
	};

	function uploadImage(file) {
		setIsImageUploading(true);

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "dlyu4xhy");

		axios("https://api.cloudinary.com/v1_1/dhqp2dd6b/image/upload", {
			method: "POST",
			data: formData,
		}).then(result => {
			console.log(result);
			setCloudImage(result.data.secure_url);
			setIsImageUploading(false);
		});
	}

	const resetHandler = () => {
		setImagePreview(null);
		setCloudImage(null);
		setPredictedImage(null);
	};

	const Analyze = async () => {
		try {
			const res = await axios({
				url: "http://fcfd57e81fbd.ngrok.io/predict",
				headers: {
					"Context-Type": "application/json",
				},
				method: "POST",
				data: {
					url: cloudImage,
				},
			});

			console.log(res.data);

			setPredictedImage(res.data.url);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				imagePreview,
				predictedImage,
				handleInputChange,
				isImageUploading,
				Analyze,
				resetHandler,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
