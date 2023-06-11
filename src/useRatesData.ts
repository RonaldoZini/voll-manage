import { IRates } from "./shared/interfaces/rates.interface";
import useFetch from "./useFetch";

const useRatesData = () => {
	return useFetch<IRates[]>({ path: 'rates' });
}

export default useRatesData;