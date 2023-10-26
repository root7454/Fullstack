import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let date = new Date();
date = date.getHours();
let html = "";
const stylecss = { };

if(date>=1 && date<12){
html= "Good Morning";
stylecss.color ='red';

}else if(date>=12 && date<19) {

  html = "Good Afternon";
  stylecss.color ='green';
  
} else {
  html = "Good Night";
  stylecss.color ='black';
}


ReactDOM.render(
 <>
 <div>
 <h1 >Hello sir, <span style={stylecss}>{html}</span></h1>
 </div>
 </>
  , document.getElementById('root')
)