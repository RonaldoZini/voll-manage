import Footer from "src/components/Footer";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Register from "./Register";
import Schedule from "./Schedule";

const Dashboard = () => {
	const exit = () => {
		alert('exiting...');
	}

	return (
		<>
			<Header
				onExit={() => exit()}
			/>
			<Container>
				<Register />
				<Schedule />
			</Container>
			<Footer />
		</>
	);
};

export default Dashboard;