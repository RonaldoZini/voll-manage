import { IAppointment } from "./shared/interfaces/appointment.interface";
import useFetch from "./useFetch";

const useAppointmentData = () => {
	return useFetch<IAppointment[]>({ path: 'appointment' });
}

export default useAppointmentData;