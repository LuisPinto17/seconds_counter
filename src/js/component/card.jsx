import React from "react";

const Card = (props) => {
	return (
<div class="container text-center pb-5 pt-5 mt-5">

    <div>
        <div className="card" style={{width: "15rem",backgroundColor: "black"}}>
        <div className="card-body">
            <h1 className="display-1" style={{color: "white"}}>
            {(String(props.segundos).charAt(props.digitos) != "") ? 
            String(props.segundos).charAt(props.digitos) : "_"} 
            </h1>
        </div>
        </div>
    </div>
</div>
);
};

export default Card;