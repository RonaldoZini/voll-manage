import Table from 'src/components/Table';
import Title from 'src/components/Title';
import { IAppointment } from 'src/shared/interfaces/appointment.interface';
import './Appointments.scss';

interface AppointmentsProps {
	appointments: IAppointment[] | undefined
}

const Appointments = ({ appointments }: AppointmentsProps) => {
	const tableHeads = ['Data', 'Horário', 'Profissional', 'Especialidade', 'Paciente', 'Modalidade'];
	const tableRows = appointments?.map(x => {
		return [
			new Date(x.date).toLocaleDateString(),
			x.time,
			x.professional.name,
			x.professional.specialty,
			x.patient,
			x.modality
		];
	});

	console.log(tableRows);
	return (
		<>
			<Title icon='evaluation'>Consultas do dia</Title>
			<Table heads={tableHeads} rows={tableRows}></Table>
		</>
	)
};

export default Appointments;