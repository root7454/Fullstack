import React from "react";


function add(x,y){
    let sum = x+y;
    return sum;
}
function sub(x,y){
    let sum = x-y;
    return sum;
}
function div(x,y){
    let sum = x/y;
    sum= sum.toFixed(2);
    return sum;
}
function mul(x,y){
    let sum = x*y;
    sum = sum.toFixed(2);
    return sum;
}



export {add, sub, div, mul};