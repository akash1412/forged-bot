import { route } from "next/dist/next-server/server/router";
import styled from "styled-components";
import { useRouter } from "next/router";


const PreviewContainer = styled.div`
	display: flex;
	alignItems: center;
	justifyContent: center;
	padding:155px;
	background-color:${props=>props.theme.color.deepBlue};
`;


const PreveiwImage = () => {
	const router = useRouter();

	const unique_key = router.query.unique_id;

	return (
		<PreviewContainer>
			{unique_key && (
				<img
					src={`https://mantrap.s3-us-west-1.amazonaws.com/${unique_key}.png`}
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			)}
		</PreviewContainer>
	);
};

export default PreveiwImage;
