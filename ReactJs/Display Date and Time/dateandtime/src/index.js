import React from "react";
import ReactDOM from "react-dom";

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
ReactDOM.render(
<div>
<h1>Time and Date</h1>
<p>The currentDate is {date}</p>
<p>The currentTime is {time}</p>
</div>
,
document.getElementById('root'));

