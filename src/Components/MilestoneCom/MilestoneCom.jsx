import React from "react";
import "./MilestoneCom.css";

const MilestoneCom = ({ text, title, desc, bg }) => (
	<div className="m-box">
		<div className="circleShape" style={{ background: `${bg}` }}>
			{text}
		</div>
		<div className="title my-2">
			<p>{title}</p>
		</div>
		<p className="desc text-muted">{desc}</p>
	</div>
);

export default MilestoneCom;
