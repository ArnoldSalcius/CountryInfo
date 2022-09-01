import { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import React, { useState } from "react";
import { Method, Country } from "../types";

interface Error {
	error: Boolean;
}

//Todo next

const useAxios = (axiosInstance: AxiosInstance) => {
	const [abortController, setAbortController] = useState<AbortController>(
		new AbortController()
	);
	const [data, setData] = useState<Country | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	async function fetchData(config: AxiosRequestConfig, method?: Method) {
		setLoading(true);

		try {
			const newAbc = new AbortController();
			setAbortController(newAbc);
			config.signal = newAbc.signal;

			let response;

			if (method !== undefined) {
				response = await axiosInstance[method](config.url || "/", config);
			} else {
				response = await axiosInstance.request(config);
			}

			setData(response.data);
			setLoading(false);
		} catch (err: any) {
			if (err.name === "CanceledError") {
				console.log("canelled");
				return;
			}
			setError({ error: true });
			setLoading(false);
		}
	}

	async function abort() {
		console.log("abort");
		// console.log(abortController);

		if (abortController) {
			abortController.abort();
		}
	}
	//really... as const...
	return [data, loading, error, fetchData, abort] as const;
};

export default useAxios;
