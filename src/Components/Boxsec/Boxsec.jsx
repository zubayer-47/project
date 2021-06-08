import React from "react";
import '../MilestoneCom/MilestoneCom.css';

const Boxsec = ({title, desc}) => {
	return (
		<div>
			<div className="m-box">
				<p>{title}</p>
            <p>{desc}</p>
			</div>
		</div>
	);
};

export default Boxsec;
