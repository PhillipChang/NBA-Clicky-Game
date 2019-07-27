import React from "react";
import "./style.css";

function Title(props) {
    return  (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <img id="logo" src="http://assets.stickpng.com/thumbs/58428defa6515b1e0ad75ab4.png" href="https://phillipchang.github.io/nba-clicky-game/"/>
    &nbsp;&nbsp;<span id="logo-text">Clicky Game</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="message col-md-4" id="message">
                {props.message}
                </li>
            <li className="col-md-4" id="scores">
                <span>Score: {props.score}</span> &nbsp;&nbsp;
                <span>Top Score: {props.topScore}</span>
                </li>
            </ul>
        </div>
    </nav>);
}

export default Title;