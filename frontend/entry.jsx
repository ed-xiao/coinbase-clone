import React from "react";
import ReactDOM from "react-dom";

let yoda = (<img src="https://media1.tenor.com/images/709f58a3fad3e65122487a8cc4f12490/tenor.gif?itemid=15739229"></img>)

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(yoda, root);
});