import { IProfessional } from "./professional.interface";

export interface IRates {
	id: number;
	date: string;
	time: string;
	professional: IProfessional;
	rate: number;
}