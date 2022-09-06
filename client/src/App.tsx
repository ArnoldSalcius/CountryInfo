import React from "react";
import "./App.css";
import RobotTest from "./components/RobotTest/RobotTest";
import Test2 from "./components/Test2";

function App() {
	return (
		<div className="App">
			<div>Country Trivia</div>
			<div>
				{/* <RobotTest /> */}
				<Test2 />
			</div>
		</div>
	);
}

export default App;
