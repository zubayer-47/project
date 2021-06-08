import React from "react";
import classes from './Hero.module.css'

const Hero = () => {
	return (
		<div className="bg-warning container-fluid" style={{height: '69vh'}}>
			<div className="container text-center py-5">
				<h1 className={classes.title}>Web Boost</h1>
				<p className={classes.subtitle}>
					A Beginner-Friendly Fullstack Web Development Journey Following Agile
				</p>

				<iframe
            className={classes.iframe}
					width="1176"
					height="662"
					src="https://www.youtube.com/embed/o7AowuYQH8E"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default Hero;
