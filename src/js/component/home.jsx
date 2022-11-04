import React from "react";
import '../../styles/index.css';
import Card from "../component/card.jsx"
import Reloj from "./reloj";
//create your first component
//far fa-clock

const Home = ({counter}) => {
	return (
		<div className="main-contain">

			{/* <div className="row">
				<div className="col-1">
				</div>
				<div className="col-2">
				<Card/>
				</div>
				<div className="col-2">
				<Card segundos={counter} digitos="0" />
				</div>
				<div className="col-2">
				<Card segundos={counter} digitos="1"/>
				</div>
				<div className="col-2">
				<Card segundos={counter} digitos="2"/>
				</div>
				<div className="col-2">
				<Card segundos={counter} digitos="3"/>
				</div>
				<div className="col-1">
				</div>
			</div> */}

			<div className="contador">
				<Reloj/>
				<Card segundos={counter} digitos="0" />
				<Card segundos={counter} digitos="1"/>
				<Card segundos={counter} digitos="2"/>
				<Card segundos={counter} digitos="3"/>
			</div>

		</div>
	);
};

export default Home;
