import { IProfessional } from "./professional.interface";

export interface IAppointment {
	id: number,
    date: string,
    time: string,
    professional: IProfessional,
    patient: string,
    modality: string
}