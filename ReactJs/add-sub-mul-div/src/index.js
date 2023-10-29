import React from 'react';
import ReactDOM from 'react-dom';
import {add, sub,div,mul} from './Math';

ReactDOM.render(
  <ul>
    <li>The sum of the two no is = {add(40, 4)}</li>
    <li>Sub of two no is = {sub(40, 4)}</li>
    <li>Div of two no is = {div(40, 3)}</li>
    <li>Mult of two no is = {mul(33, 3.2)}</li>
  </ul>,
  document.getElementById('root')
)
