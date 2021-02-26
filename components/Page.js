import Header from "./header";
import Footer from "./footer";

const Page = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Page;
