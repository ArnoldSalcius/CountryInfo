import React, { useState } from "react";
import useAxiosApi from "../hooks/useAxiosApi";

const Test2 = () => {
	const [data, loading, error, fetch] = useAxiosApi({ url: "/country" });
	return (
		<div>
			<div>Test2</div>
			<div>{data?.name}</div>
			<button onClick={fetch}>refetch</button>
		</div>
	);
};

export default Test2;
