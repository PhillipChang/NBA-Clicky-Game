import React from "react";
import "./style.css";

function LogoCard(props) {
    return (
    <div className="holder">
      <div className="img-container" >
        <img alt={props.name} src={props.image} id={props.id} onClick={() =>props.handleBtnClick(props.id,props.name)}/>
      </div>
    </div>  
    );
}

export default LogoCard;
