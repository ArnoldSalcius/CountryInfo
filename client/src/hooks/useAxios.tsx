import { AxiosInstance, AxiosRequestConfig } from "axios";
import React, { useState } from "react";
import { Method, Country } from "../types";

interface Error {
	error: Boolean;
}

//Todo next

const useAxios = (axiosInstance: AxiosInstance) => {
	const [data, setData] = useState<Country | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	async function fetchData(config: AxiosRequestConfig, method?: Method) {
		setLoading(true);

		try {
			let response;
			if (method !== undefined) {
				response = await axiosInstance[method](config.url || "/", config);
			} else {
				response = await axiosInstance.request(config);
			}
			setData(response.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setError({ error: true });
		}
	}
	//really... as const...
	return [data, loading, error, fetchData] as const;
};

export default useAxios;
