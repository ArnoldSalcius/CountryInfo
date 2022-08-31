import React, { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { apiInstance } from "../../api/api";

const RobotTest = () => {
	const [data, loading, error, fetchData] = useAxios(apiInstance);

	useEffect(() => {
		console.log("useeffect ran");

		const fetch = async () => {
			await fetchData(
				{
					url: "/api/v1/country",
				},
				"get"
			);
		};
		fetch();
	}, []);

	return <div>{data ? data.capital : "capital"}</div>;
};

export default RobotTest;
