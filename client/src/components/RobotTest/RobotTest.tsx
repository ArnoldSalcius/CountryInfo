import React, { useEffect, useCallback, useState } from "react";
import useAxios from "../../hooks/useAxios";
import apiInstance from "../../api/api";

const RobotTest = () => {
	const [data, loading, error, fetchData] = useAxios(apiInstance);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		const ctrl = new AbortController();
		fetchData(
			{
				url: "/api/v1/country",
			},
			"get",
			ctrl
		);
		return () => {
			ctrl.abort();
		};
	}, [toggle, fetch]);

	return (
		<div>
			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				Refetch Data
			</button>
			<div>{data ? data.capital : "capital"}</div>
			<div>{loading ? <h1>Loading</h1> : null}</div>
		</div>
	);
};

export default RobotTest;
