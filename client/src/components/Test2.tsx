import useAxiosApi from "../hooks/useAxiosApi";

const Test2 = () => {
	//This causes infinite useEffect loop
	const config = { url: "/country" };

	const [data, loading, , fetch] = useAxiosApi(config);
	return (
		<div>
			<div>Test2</div>
			<div>{data?.name}</div>
			<button disabled={loading} onClick={fetch}>
				refetch
			</button>
		</div>
	);
};

export default Test2;
