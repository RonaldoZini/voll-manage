import { IProfessional } from "./shared/interfaces/professional.interface";
import useFetch from "./useFetch";

const useProfessionalData = () => {
	return useFetch<IProfessional[]>({ path: 'professional' });
}

export default useProfessionalData;