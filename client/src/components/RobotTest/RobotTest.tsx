import React, { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { apiInstance } from "../../api/api";

const RobotTest = () => {
	const [data, loading, error, fetchData] = useAxios(apiInstance);

	useEffect(() => {
		const fetch = async () => {
			fetchData(
				{
					url: "/api/v1/country",
				},
				"get"
			);
		};

		fetch();
	}, []);

	return <div>{data}</div>;
};

export default RobotTest;
