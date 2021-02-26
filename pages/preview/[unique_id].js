import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

const PreveiwImage = () => {
	const router = useRouter();

	const unique_key = router.query.unique_id;

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			{unique_key && (
				<img
					src={`https://mantrap.s3-us-west-1.amazonaws.com/${unique_key}.png`}
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			)}
		</div>
	);
};

export default PreveiwImage;
