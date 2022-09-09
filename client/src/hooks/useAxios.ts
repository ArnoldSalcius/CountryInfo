import { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import React, { useCallback, useState, useRef } from "react";
import { Method, Country } from "../types";

interface Error {
	error: Boolean;
}

const useAxios = (axiosInstance: AxiosInstance) => {
	const [data, setData] = useState<Country | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const controllerRef = useRef(new AbortController());
	const cancel = () => {
	  controllerRef.current.abort();
	  controllerRef.current = new AbortController();
	};
	const fetch = useCallback(
		async (
			config: AxiosRequestConfig,
			method?: Method,
		) => {
			try {
				let response;
				config.signal = controllerRef.current.signal;
				setLoading(true);

				if (method !== undefined) {
					response = await axiosInstance[method](config.url || "/", config);
				} else {
					response = await axiosInstance.request(config);
				}

				setData(response.data);
				setLoading(false);
			} catch (err: any) {
				if (err.name === "CanceledError") {
					console.log("cancelled");
					return;
				}

				setError({ error: true });
				setLoading(false);
			}
		},
		[axiosInstance]
	);

	return [data, loading, error, fetch, cancel] as const;
};

export default useAxios;
