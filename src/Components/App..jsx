import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import BioCom from "./BioCom/BioCom"
import MilestoneComponent from './MilestoneCom/index'

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
         <BioCom />
         <MilestoneComponent />
		</div>
	);
};

export default App;
