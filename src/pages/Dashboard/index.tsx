import Footer from "src/components/Footer";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Appointments from "./Appointments";
import Register from "./Register";
import useAppointmentData from "src/useAppointmentData";
import useRatesData from "src/useRatesData";
import useProfessionalData from "src/useProfessionalData";

const Dashboard = () => {
	const exit = () => {
		alert('exiting...');
	}

	const { data: appointments, error: appointmentsError } = useAppointmentData();
	const { data: professional, error: professionalError } = useProfessionalData();
	const { data: rates, error: ratesError } = useRatesData();

	return (
		<>
			<Header
				onExit={() => exit()}
			/>
			<Container>
				<Register />
				<Appointments appointments={appointments} />
			</Container>
			<Footer />
		</>
	);
};

export default Dashboard;