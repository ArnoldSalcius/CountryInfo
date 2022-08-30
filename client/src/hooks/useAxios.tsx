import { AxiosInstance, AxiosRequestConfig } from "axios";
import React, { useState } from "react";
import { Method } from "../types";

interface Error {
	error: Boolean;
}

//Todo next
interface Country {}

const useAxios = (axiosInstance: AxiosInstance) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	async function fetchData(config: AxiosRequestConfig, method?: Method) {
		setLoading(true);

		try {
			if (method !== undefined) {
				const response = await axiosInstance[method](config.url || "/", config);
				console.log("I ran");
				console.log(response.data);

				setData(response.data);
			} else {
				const response = await axiosInstance.request(config);
				console.log("I ran");
				console.log(response.data);
			}
		} catch (e) {
			console.log(e);
			setError({ error: true });
		}
	}
	//really... as const...
	return [data, loading, error, fetchData] as const;
};

export default useAxios;
