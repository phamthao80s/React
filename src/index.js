import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user ={ 
    name: "Thao Pham",
    email: "phamthao@80sgmail.com",
};
// const myfirstelement =(
// <div className="Hello">
// <p> <h1> Hello Every one, </h1>

// <h3> My name is: {user.name}, and my email is: {user.email}</h3></p>

//     <h5> If you wanna contact with {user.name}, pls send me email to: {user.email} </h5>
// </div>
// );
var numbers=[1,2,3,4];
var doubleNumbers=numbers.map((eachNumber)=>eachNumber*2+";");
ReactDOM.render(<h1>doubleNumbers is: {doubleNumbers} </h1>, document.getElementById('root'));




