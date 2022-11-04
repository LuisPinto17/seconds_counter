import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Reloj = (props) => {
	return (
<div class="container text-center pb-5 pt-5 mt-5">

    <div>
        <div className="card" style={{width: "15rem",backgroundColor: "black"}}>
        <div className="card-body">
            <h1 className="display-1" style={{color: "white"}}>
                <FontAwesomeIcon className="fs-2 mx-auto" style={{height: "80px",width: "80px",}} icon={faClock}/>
            </h1>
        </div>
        </div>
    </div>
</div>
);
};

export default Reloj;