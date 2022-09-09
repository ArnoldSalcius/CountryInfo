import { useEffect, useCallback, useState, useRef } from "react";
import useAxios from "./useAxios";
import apiInstance from "../api/api";
import { AxiosRequestConfig } from "axios";

const useAxiosApi = (config: AxiosRequestConfig) => {
	const [data, loading, error, fetch, cancel] = useAxios(apiInstance);
	const [toggle, setToggle] = useState(false);
	const refetch = useCallback(() => {
		setToggle(!toggle);
	}, [toggle]);
	const configRef = useRef(config);

	useEffect(() => {
		fetch(configRef.current, undefined);

		return () => {
			cancel();
		};
	}, [toggle, fetch]);

	return [data, loading, error, refetch] as const;
};

export default useAxiosApi;
