import Container from "../../components/Container";
import Header from "../../components/Header";

const Dashboard = () => {
	const exit = () => {
		alert('exiting...');
	}

	return (
		<>
			<Header
				onExit={() => exit()}
			/>
			<Container/>
		</>
	);
};

export default Dashboard;