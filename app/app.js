import React from "react";
import ReactDOM from "react-dom";
import Main from './componets/main'

var mountNode = document.getElementById("yn");
var p = "your name here ?"
ReactDOM.render(<Main name={p} />, mountNode);