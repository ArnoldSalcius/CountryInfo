import useAxiosApi from "../hooks/useAxiosApi";

const Test2 = () => {
	//This causes infinite useEffect loop
	const config = { url: "/country" };

	const [data, , , fetch] = useAxiosApi(config);
	return (
		<div>
			<div>Test2</div>
			<div>{data?.name}</div>
			<button onClick={fetch}>refetch</button>
		</div>
	);
};

export default Test2;
