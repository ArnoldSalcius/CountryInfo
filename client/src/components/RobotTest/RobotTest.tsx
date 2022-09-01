import React, { useEffect, useCallback } from "react";
import useAxios from "../../hooks/useAxios";
import { apiInstance } from "../../api/api";

const RobotTest = () => {
	const [data, loading, error, fetchData, abort] = useAxios(apiInstance);
	const fetch = useCallback(fetchData, []);
	useEffect(() => {
		fetch(
			{
				url: "/api/v1/country",
			},
			"get"
		);

		return () => {
			abort();
		};
	}, []);

	return (
		<div>
			<div>{data ? data.capital : "capital"}</div>
			<div>{loading ? <h1>Loading</h1> : null}</div>
			<button
				onClick={() =>
					fetchData(
						{
							url: "/api/v1/country",
						},
						"get"
					)
				}
			>
				Refetch Data
			</button>
		</div>
	);
};

export default RobotTest;
