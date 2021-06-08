import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import {Container} from 'reactstrap'
import logo from '../../img/logo.png'


const style = {
   maxWidth: '100%',
   width: '4rem'
}
const Header = () => {
	return (
		<Container>
			<header className="d-flex justify-content-between align-items-center p-3">
				<div className="logo">
					<img style={style} src={logo} alt="Header Logo" />
				</div>
				<div className="mood">
					<FontAwesomeIcon style={{width: '1.5rem', height: 'auto'}} icon={faMoon} />
				</div>
			</header>
		</Container>
	);
};

export default Header;
