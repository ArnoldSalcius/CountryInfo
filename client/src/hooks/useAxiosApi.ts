import React, { useEffect, useCallback, useState } from "react";
import useAxios from "./useAxios";
import apiInstance from "../api/api";
import { AxiosRequestConfig } from "axios";

const useAxiosApi = (config: AxiosRequestConfig) => {
	const [data, loading, error, fetch] = useAxios(apiInstance);
	const [toggle, setToggle] = useState(false);

	const refetch = useCallback(() => {
		setToggle(!toggle);
	}, [toggle]);

	useEffect(() => {
		const ctrl = new AbortController();
		config.signal = ctrl.signal;
		fetch(config, undefined, ctrl);

		return () => {
			ctrl.abort();
		};
	}, [toggle]);

	return [data, loading, error, refetch] as const;
};

export default useAxiosApi;
