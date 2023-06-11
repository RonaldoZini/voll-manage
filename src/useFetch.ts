import { useEffect, useState } from "react";
import { Environment } from "./environment";

const useFetch = <T>({ path }: { path: string }) => {
	const [data, setData] = useState<T>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		const url = `${Environment.SERVER_URL}${path}`;

		const fetchData = async () => {
			const res = await fetch(url);
			const json = await res.json();
			setData(json);
		}

		fetchData().catch((error) => {
			const errroMessage = `Ocorreu um erro ao solicitar ${url}`;
			console.log(errroMessage, error);
			setError(errroMessage);
		})
	}, [path]);

	return { data, error };
}

export default useFetch;