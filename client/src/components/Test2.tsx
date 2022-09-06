import React, { useState } from "react";
import useCountry from "../hooks/useCountry";

const Test2 = () => {
	const [data, loading, error, fetch] = useCountry();
	return (
		<div>
			<div>Header</div>
			<div>{data?.name}</div>
			<button onClick={fetch}>refetch</button>
		</div>
	);
};

export default Test2;
